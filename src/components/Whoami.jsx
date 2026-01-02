"use client";

import { useEffect, useState } from "react";

export default function Whoami() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/whoami.json")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data) {
    return null;
  }

  return (
    <section id="whoami" className="py-16 border-t border-white/10">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-sm text-zinc-400">whoami</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
            How I think about security and delivery
          </h2>
        </div>

        <div className="md:col-span-8 space-y-6 text-zinc-300">
          <p>{data.intro}</p>
          <p>{data.mindset}</p>
          <p>{data.background}</p>
          <p>{data.focus}</p>
        </div>
      </div>
    </section>
  );
}
