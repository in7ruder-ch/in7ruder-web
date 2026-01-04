"use client";

import { useEffect, useMemo, useState } from "react";

function normalizeKey(v) {
  return String(v || "")
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

function buildServiceAliasMap(options) {
  // Map many possible incoming values -> exact option label from contact.json
  // We *must* return one of the real option strings for the <select> to match.
  const find = (predicate) => options.find(predicate);

  const optPentesting = find((o) => normalizeKey(o) === "pentesting") || "Pentesting";

  const optSecure =
    find((o) => normalizeKey(o).includes("secure-full-stack-development")) ||
    find((o) => normalizeKey(o).includes("secure-full-stack")) ||
    "Secure Full-Stack Development";

  const optSE =
    find((o) => normalizeKey(o).includes("corporate-social-engineering-training")) ||
    find((o) => normalizeKey(o).includes("social-engineering-training")) ||
    "Corporate Social Engineering Training";

  const optNotSure =
    find((o) => normalizeKey(o).includes("not-sure")) || "Not sure yet";

  // aliases (keys) -> canonical option label
  return {
    // Pentesting
    pentesting: optPentesting,

    // Secure Full-Stack Dev
    "secure-fullstack": optSecure,
    "secure-full-stack": optSecure,
    "secure-fullstack-development": optSecure,
    "secure-full-stack-development": optSecure,
    "secure-full-stack-dev": optSecure,
    "secure-fullstack-dev": optSecure,
    "secure-development": optSecure,

    // Social engineering training
    "social-engineering-training": optSE,
    "corporate-social-engineering-training": optSE,
    "social-engineering": optSE,
    "se-training": optSE,

    // Not sure
    "not-sure": optNotSure,
    "not-sure-yet": optNotSure,
    unsure: optNotSure,
  };
}

export default function Contact() {
  const [config, setConfig] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  // Controlled value for the select
  const [serviceValue, setServiceValue] = useState("");

  const [didAutoScroll, setDidAutoScroll] = useState(false);

  // Read query param immediately (before config), keep it in state
  const [queryServiceRaw, setQueryServiceRaw] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const svc = params.get("service");
    if (svc) setQueryServiceRaw(svc);
  }, []);

  // Fetch config
  useEffect(() => {
    fetch("/data/contact.json")
      .then((res) => res.json())
      .then(setConfig)
      .catch(() => setConfig(null));
  }, []);

  // Once config + queryServiceRaw exist, resolve to one of the real options and set controlled value
  const serviceOptions = useMemo(() => {
    if (!config) return [];
    const field = config.fields?.find((f) => f.type === "select" && f.name === "service");
    return field?.options || [];
  }, [config]);

  useEffect(() => {
    if (!config) return;

    // If no query param, don't force anything (user can choose)
    if (!queryServiceRaw) return;

    const options = serviceOptions;
    if (!options.length) return;

    // 1) Exact match (if query already is the label)
    const exact = options.find((o) => o === queryServiceRaw);
    if (exact) {
      setServiceValue(exact);
      return;
    }

    // 2) Normalized match against normalized options
    const key = normalizeKey(queryServiceRaw);
    const normalizedMap = new Map(options.map((o) => [normalizeKey(o), o]));
    const directNormalized = normalizedMap.get(key);
    if (directNormalized) {
      setServiceValue(directNormalized);
      return;
    }

    // 3) Alias mapping (slugs -> correct long labels)
    const alias = buildServiceAliasMap(options);
    if (alias[key] && options.includes(alias[key])) {
      setServiceValue(alias[key]);
      return;
    }

    // 4) Last resort: fuzzy includes
    const fuzzy =
      options.find((o) => normalizeKey(o).includes(key)) ||
      options.find((o) => key.includes(normalizeKey(o)));
    if (fuzzy) {
      setServiceValue(fuzzy);
    }
  }, [config, queryServiceRaw, serviceOptions]);

  // Auto-scroll when arriving with #contact
  useEffect(() => {
    if (!config) return;
    if (didAutoScroll) return;

    if (window.location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setDidAutoScroll(true);
      }
    }
  }, [config, didAutoScroll]);

  async function handleSubmit(e) {
    e.preventDefault();

    const formEl = e.currentTarget;

    setStatus("loading");
    setError(null);

    const formData = new FormData(formEl);

    // Ensure the controlled select is included correctly
    if (serviceValue) {
      formData.set("service", serviceValue);
    }

    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setError(data?.error || `Request failed (${res.status})`);
        return;
      }

      setStatus("success");
      formEl.reset();
      setServiceValue(""); // reset controlled field too
    } catch (err) {
      console.error("CONTACT_FORM_CLIENT_ERROR", err);
      setStatus("error");
      setError(`Client error: ${err?.message || String(err)}`);
    }
  }

  if (!config) {
    return null;
  }

  return (
    <section id="contact" className="py-16 border-t border-white/10">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 self-center">
          <p className="text-sm text-zinc-400">Contact</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
            {config.title}
          </h2>
          <p className="mt-3 text-zinc-300">{config.description}</p>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-7 space-y-4">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          {config.fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label className="text-sm text-zinc-300">{field.label}</label>

              {field.type === "textarea" && (
                <textarea
                  name={field.name}
                  required={field.required}
                  rows={4}
                  className="rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              )}

              {field.type === "select" && (
                <select
                  name={field.name}
                  required={field.required}
                  value={field.name === "service" ? serviceValue : ""}
                  onChange={(e) => {
                    if (field.name === "service") setServiceValue(e.target.value);
                  }}
                  className="rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <option value="">Select an option</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}

              {field.type !== "textarea" && field.type !== "select" && (
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  className="rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-4 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-[var(--color-brand)] hover:!text-white transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : config.submitLabel}
          </button>

          {status === "success" && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">
                {config.successTitle || "Request sent"}
              </p>
              <p className="mt-1 text-sm text-zinc-300">
                {config.successMessage ||
                  "Thanks. I will reply soon with next steps."}
              </p>
            </div>
          )}

          {status === "error" && <p className="text-sm text-red-400">{error}</p>}

          <p className="text-xs text-zinc-500">{config.privacyNote}</p>
        </form>
      </div>
    </section>
  );
}
