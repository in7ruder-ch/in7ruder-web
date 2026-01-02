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
          Three offers. One clear path.
        </h2>
        <p className="text-zinc-300 max-w-2xl">
          Validate risk, build safer systems, and train teams to respond with
          clarity. Each designed to turn into concrete next steps.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {loading && <p className="text-sm text-zinc-400">Loading services...</p>}

        {!loading &&
          services.map((s) => {
            // Primary CTA: go to the landing (clean URL, no query)
            const landingHref = `/services/${s.id}`;

            // Secondary CTA: go to Home contact with preselect + scroll
            const quoteHref = `/?service=${encodeURIComponent(
              s.serviceValue || s.title
            )}#contact`;

            return (
              <ServiceCard
                key={s.id}
                title={s.title}
                subtitle={s.subtitle}
                bullets={s.bullets}
                ctaLabel="Learn more"
                ctaHref={landingHref}
                quoteLabel="Request a quote"
                quoteHref={quoteHref}
              />
            );
          })}
      </div>
    </section>
  );
}
