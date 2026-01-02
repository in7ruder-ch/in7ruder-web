"use client";

import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => {
        setServices([]);
        setLoading(false);
      });
  }, []);

  return (
    <section id="services" className="py-16 border-t border-white/10">
      <div className="space-y-3">
        <p className="text-sm text-zinc-400">Services</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Three offers. Clear outcomes.
        </h2>
        <p className="text-zinc-300 max-w-2xl">
          Delivery, training or validation. Each designed to turn into concrete
          next steps.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {loading && (
          <p className="text-sm text-zinc-400">Loading services…</p>
        )}

        {!loading &&
          services.map((s) => (
            <ServiceCard
              key={s.id}
              title={s.title}
              subtitle={s.subtitle}
              bullets={s.bullets}
              cta={s.cta}
              href={s.href}
            />
          ))}
      </div>
    </section>
  );
}
