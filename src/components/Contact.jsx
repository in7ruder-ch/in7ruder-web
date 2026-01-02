"use client";

import { useEffect, useState } from "react";

export default function Contact() {
    const [config, setConfig] = useState(null);
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [error, setError] = useState(null);
    const [initialService, setInitialService] = useState("");
    const [didAutoScroll, setDidAutoScroll] = useState(false);


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const svc = params.get("service");
        if (svc) setInitialService(svc);

        fetch("/data/contact.json")
            .then((res) => res.json())
            .then(setConfig)
            .catch(() => setConfig(null));
    }, []);

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
                                    defaultValue={field.name === "service" ? initialService : ""}
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
                        className="mt-4 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition disabled:opacity-60"
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

                    {status === "error" && (
                        <p className="text-sm text-red-400">{error}</p>
                    )}

                    <p className="text-xs text-zinc-500">{config.privacyNote}</p>
                </form>
            </div>
        </section>
    );
}
