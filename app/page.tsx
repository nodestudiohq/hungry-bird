import Menu from "@/components/Menu";
import Bird from "@/components/Bird";
import { site } from "@/lib/site";
import { menu } from "@/lib/menu";

const favourites = menu.flatMap((c) => c.items).filter((i) => i.popular).slice(0, 5);

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-saffron text-ink">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#" className="flex items-center gap-2 font-display text-2xl font-extrabold">
            <Bird className="h-9 w-9 text-oxblood" /> {site.name}
          </a>
          <div className="flex items-center gap-6 text-sm font-semibold">
            <a href="#menu" className="hover:underline">Menu</a>
            <a href="#visit" className="rounded-full bg-oxblood px-5 py-2.5 text-sand transition hover:bg-ink">Find us</a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-28 pt-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="font-semibold">{site.tagline} in Bagula, Nadia</p>
            <h1 className="mt-4 font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-8xl">
              Hot, crisp and ready when you are.
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink/80">
              Momos, rolls, chowmein and fried bites, made fresh in a small kitchen, with chai on the boil all day.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#menu" className="rounded-full bg-oxblood px-7 py-3.5 font-semibold text-sand transition hover:bg-ink">See the menu</a>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="rounded-full border-2 border-ink px-7 py-3.5 font-semibold transition hover:bg-ink hover:text-saffron">Get directions</a>
            </div>
          </div>

          <aside className="board-in mx-auto w-full max-w-sm rounded-[2rem] bg-oxblood p-8 text-sand shadow-[10px_12px_0_0_#1E0A0C]">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold">Everyone orders these</h2>
              <Bird className="h-8 w-8 text-saffron" />
            </div>
            <ul className="mt-6 space-y-4">
              {favourites.map((i) => (
                <li key={i.name} className="flex items-baseline justify-between gap-3 border-b border-dashed border-oxblood-line pb-3">
                  <span className="font-semibold">{i.name}</span>
                  <span className="font-display text-xl font-extrabold text-saffron">₹{i.price}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 h-10 w-full text-oxblood" aria-hidden>
          <path d="M0 60V30c60 20 120 20 180 0s120-20 180 0 120 20 180 0 120-20 180 0 120 20 180 0 120-20 180 0 120 20 180 0 120-20 180 0V60Z" fill="currentColor" />
        </svg>
      </section>

      <Menu />

      {/* Why us */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 sm:grid-cols-3">
          {[
            ["Made to order", "Every plate is cooked after you order, not before."],
            ["Easy on the pocket", "Chai from ₹10 and a full plate of noodles under ₹100."],
            ["Come as you are", "Sit a while with friends or take it home in a box."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="font-display text-2xl font-bold text-saffron">{t}</h3>
              <p className="mt-2 text-sand/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-5xl px-5 py-24">
        <div className="grid gap-10 rounded-[2rem] bg-saffron p-8 text-ink sm:p-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Come hungry.</h2>
            <p className="mt-4 text-ink/80">We are on the road in Bagula, Nadia. Walk in, order at the counter and we will call you when it is ready.</p>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-oxblood px-7 py-3.5 font-semibold text-sand transition hover:bg-ink">Open in Google Maps</a>
          </div>
          <dl className="space-y-6">
            <div><dt className="text-sm font-semibold text-ink/70">Address</dt><dd className="font-display text-2xl font-bold">{site.address}</dd></div>
            <div><dt className="text-sm font-semibold text-ink/70">Open</dt><dd className="font-display text-2xl font-bold">{site.hours}</dd></div>
            <div><dt className="text-sm font-semibold text-ink/70">Call</dt><dd className="font-display text-2xl font-bold">{site.phone}</dd></div>
          </dl>
        </div>
      </section>

      <footer className="border-t border-oxblood-line px-5 py-8 text-center text-sm text-sand/60">
        © {new Date().getFullYear()} {site.name}, {site.address}
      </footer>
    </main>
  );
}
