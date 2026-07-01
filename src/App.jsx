import React from "react";

export default function App() {
  const KW = "coffee";
  const photo = (n, extra = "") =>
    `https://echols.ai/api/stock?type=photo&q=${KW}&i=${n}${extra}`;

  return (
    <div className="min-h-screen w-full bg-[#0b0b07] text-[#fff] font-[Inter,system-sans] leading-[1.6]">
      {/* STICKY NAV */}
      <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-6">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-[Fraunces,serif] text-[1.4rem] tracking-[0.02em]">
            Bean Street
          </div>
          <div className="flex gap-6 text-[0.8rem] uppercase tracking-[0.18em] opacity-80">
            <span>Home</span>
            <span>About</span>
            <span>Menu</span>
            <span>Gallery</span>
            <span>Visit</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative w-full h-[88vh] overflow-hidden">
        <video
          autoplay
          muted
          loop
          playsinline
          poster={photo(0)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src="https://echols.ai/api/stock?type=video&q=coffee"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,.42), rgba(0,0,0,.72))",
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <div className="text-[0.8rem] uppercase tracking-[0.3em] opacity-80">
            Roasted Fresh · Open 6am–6pm
          </div>
          <h1
            className="font-[Fraunces,serif] font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mt-4"
            style={{ fontWeight: 500 }}
          >
            Bean Street
          </h1>
          <p className="mt-4 max-w-prose text-[1.1rem] opacity-90">
            Coffee that tastes like a memory you didn't know you had.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-[#fff] text-[#0b0b07] px-6 py-3 rounded-[16px] font-[Inter] font-semibold hover:scale-[1.04] transition">
              Reserve a Table
            </button>
            <button className="border border-[#fff]/60 text-[#fff] px-6 py-3 rounded-[16px] hover:scale-[1.04] transition">
              Browse the Bar
            </button>
          </div>
        </div>
      </section>

      {/* INTRO / ABOUT */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <div className="text-[0.8rem] uppercase tracking-[0.2em] opacity-70">
              About
            </div>
            <h2
              className="font-[Fraunces,serif] font-display text-[clamp(2rem,4vw,3.4rem)] mt-3 leading-[1.1]"
              style={{ fontWeight: 500 }}
            >
              Coffee is a conversation, not a transaction.
            </h2>
            <p className="mt-6 max-w-prose text-[1.05rem] opacity-90">
              Bean Street is where you come when you want to disappear for an
              hour. Espresso pulled by hand, milk steamed slow, and a bar that
              never rushes you. We roast in-house, pour at the counter, and
              let the morning decide what comes next.
            </p>
            <p className="mt-4 max-w-prose text-[1.05rem] opacity-80">
              Open six days a week, closed Sundays for the barista's mother.
            </p>
          </div>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-black/40">
            <img
              src={photo(1, "&orient=portrait")}
              alt="barista pouring espresso"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[0.8rem] uppercase tracking-[0.2em] opacity-70">
            On the Bar
          </div>
          <h2
            className="font-[Fraunces,serif] font-display text-[clamp(2rem,4vw,3.4rem)] mt-3 leading-[1.1]"
            style={{ fontWeight: 500 }}
          >
            What we pour
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              ["House Espresso", "Double-shot, pulled fresh, no syrups."],
              ["Cold Brew", "18-hour, slow drip, single origin."],
              ["Latte Art", "Rosettes, tulips, and the occasional swan."],
              ["Filter Coffee", "Refilled every nine minutes, always warm."],
              ["Affogato", "Vanilla soft-serve drowned in espresso."],
              ["Cupping Flight", "Four origins, side by side, for the curious."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-[16px] bg-black/30 border border-[#fff]/10 p-6 hover:translate-[-4px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition"
              >
                <div className="text-[0.7rem] uppercase tracking-[0.2em] opacity-70">
                  Pour
                </div>
                <div className="font-[Fraunces,serif] text-[1.5rem] mt-2">
                  {t}
                </div>
                <div className="mt-3 text-[0.95rem] opacity-80">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[0.8rem] uppercase tracking-[0.2em] opacity-70">
            Gallery
          </div>
          <h2
            className="font-[Fraunces,serif] font-display text-[clamp(2rem,4vw,3.4rem)] mt-3 leading-[1.1]"
            style={{ fontWeight: 500 }}
          >
            The room, the light, the pour
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[2, 3, 4, 5, 6, 7].map((n) => (
              <div
                key={n}
                className="aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-black/40"
              >
                <img
                  src={photo(n)}
                  alt={`coffee ${n}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / STATS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[0.8rem] uppercase tracking-[0.2em] opacity-70">
            Regulars
          </div>
          <h2
            className="font-[Fraunces,serif] font-display text-[clamp(2rem,4vw,3.4rem)] mt-3 leading-[1.1]"
            style={{ fontWeight: 500 }}
          >
            What the morning sounds like
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              [
                "“It's the only place I don't feel rushed. The espresso is a bonus.”",
                "Maya, 9am regular",
              ],
              [
                "“They know my order by the second sip. I've never had to say it out loud.”",
                "Theo, counter staff",
              ],
              [
                "“I came in for a coffee and stayed for the book. Three hours.”",
                "Sam, Wednesdays",
              ],
            ].map(([q, a]) => (
              <div
                key={q}
                className="rounded-[16px] bg-black/30 border border-[#fff]/10 p-6"
              >
                <div className="font-[Fraunces,serif] text-[1.3rem] leading-[1.3]">
                  {q}
                </div>
                <div className="mt-4 text-[0.8rem] uppercase tracking-[0.2em] opacity-70">
                  {a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-24 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="font-[Fraunces,serif] font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1]"
            style={{ fontWeight: 500 }}
          >
            Come early. Stay late. Bring a friend.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-[#fff] text-[#0b0b07] px-6 py-3 rounded-[16px] font-semibold hover:scale-[1.04] transition">
              Reserve a Table
            </button>
            <button className="border border-[#fff]/60 text-[#fff] px-6 py-3 rounded-[16px] hover:scale-[1.04] transition">
              Find Us
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24">
        <div className="max-w-6xl mx-auto px-6 flex justify-between text-[0.8rem] opacity-70">
          <div className="font-[Fraunces,serif] text-[1.1rem]">Bean Street</div>
          <div className="uppercase tracking-[0.2em]">
            Open 6am–6pm · Closed Sundays
          </div>
        </div>
      </footer>
    </div>
  );
}
