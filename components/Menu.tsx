"use client";
import { useState } from "react";
import { menu } from "@/lib/menu";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active)!;

  return (
    <section id="menu" className="mx-auto max-w-5xl px-5 py-24">
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">The menu</h2>
      <p className="mt-3 max-w-md text-sand/70">Cooked to order. Prices in rupees, same for dine in and takeaway.</p>

      <div role="tablist" aria-label="Menu categories" className="mt-10 flex flex-wrap gap-2">
        {menu.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === c.id ? "bg-saffron text-ink" : "border border-oxblood-line text-sand hover:bg-oxblood-soft"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul role="tabpanel" className="mt-8 divide-y divide-oxblood-line rounded-3xl bg-oxblood-soft px-6 sm:px-10">
        {current.items.map((i) => (
          <li key={i.name} className="flex items-baseline gap-4 py-5">
            <div className="min-w-0">
              <p className="font-display text-xl font-bold">
                {i.name}
                {i.popular && (
                  <span className="ml-3 rounded-full bg-chilli px-2.5 py-0.5 align-middle text-xs font-semibold text-white">
                    Popular
                  </span>
                )}
              </p>
              <p className="mt-0.5 text-sm text-sand/65">{i.note}</p>
            </div>
            <span aria-hidden className="mb-1.5 hidden flex-1 self-end border-b-2 border-dotted border-oxblood-line sm:block" />
            <p className="ml-auto font-display text-2xl font-extrabold text-saffron sm:ml-0">₹{i.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
