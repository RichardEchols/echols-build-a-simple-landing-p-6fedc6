import React from "react";

export default function App() {
  const KW = "dog";
  const photo = (n, extra = "") =>
    `https://echols.ai/api/stock?type=photo&q=${KW}&i=${n}${extra}`;

  return (
    <div
      className="min-h-screen w-full bg-[#0b0b07] text-[#fff] font-[Inter,system-sans] leading-[1.6]"
      style={{ "--accent": "#d2a0a0" }}
    >
      {/* STICKY NAV */}
      <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-6">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-[Fraunces,serif] text-[1.4rem] tracking-[0.02em]">
            PupTrail
          </div>
          <div className="flex gap-6 text-[0.8rem] uppercase tracking-[0.18em] opacity-80">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Gallery</span>
            <span>Book</span>
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
            src="https://echols.ai/api/stock?type=video&q=dog"
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
            Dog Walking · Open 6am–8pm
          </div>
          <h1
            className="font-[Fraunces,serif] font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mt-4"
            style={{ fontWeight: 500 }}
          >
            PupTrail
          </h1>
          <p className="mt-4 max-w-prose text-[1.1rem] opacity-90">
            Every dog deserves a walk that feels like freedom.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-[#fff] text-[#0b0b07] px-6 py-3 rounded-[16px] font-[Inter] font-semibold hover:scale-[1.04] transition">
              Book a Walk
            </button>
            <button className="border border-[#fff]/60 text-[#fff] px-6 py-3 rounded-[16px] hover:scale-[1.04] transition">
              Meet the Team
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
              A walk is the best part of a dog's day.
            </h2>
            <p className="mt-6 max-w-prose text-[1.05rem] opacity-90">
              PupTrail is a dog walking service for people who want their dog to
              have a real walk — not a five-minute trot around the block. We
              walk dogs on trails, in parks, and along the river. We know the
              dogs by name, and we know what each one likes.
            </p>
            <p className="mt-4 max-w-prose text-[1.05rem] opacity-80">
              Open six days a week, closed Sundays for the dog's sake.
            </p>
          </div>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-black/40">
            <img
              src={photo(1, "&orient=portrait")}
              alt="dog on a leash at golden hour"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[0.8rem] uppercase tracking-[0.2em] opacity-70">
            What we offer
          </div>
          <h2
            className="font-[Fraunces,serif] font-display text-[clamp(2rem,4vw,3.4rem)] mt-3 leading-[1.1]"
            style={{ fontWeight: 500 }}
          >
            Services
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              ["Morning Walk", "30-minute sunrise walk, dog's choice of route."],
              ["Evening Stroll", "Sunset loop along the river, leash optional."],
              ["Trail Run", "A guided run for dogs that need to move."],
              ["Dog Days", "A full day out with other dogs and a guide."],
              ["Dog Meetups", "Curated play sessions with compatible dogs."],
              ["Solo Walks", "For dogs that prefer their own company."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-[16px] bg-black/30 border border-[#fff]/10 p-6 hover:translate-[-4px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition"
              >
                <div className="text-[0.7rem] uppercase tracking-[0.2em] opacity-70">
                  Walk
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
            Dogs, dogs, dogs
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[2, 3, 4, 5, 6, 7].map((n) => (
              <div
                key={n}
                className="aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-black/40"
              >
                <img
                  src={photo(n)}
                  alt={`dog ${n}`}
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
            Dog owners
          </div>
          <h2
            className="font-[Fraunces,serif] font-display text-[clamp(2rem,4vw,3.4rem)] mt-3 leading-[1.1]"
            style={{ fontWeight: 500 }}
          >
            What dog owners say
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              [
                "“My dog comes home tired and happy. That's all I wanted.”",
                "Maya, dog owner",
              ],
              [
                "“They know my dog better than I do. The walks are real.”",
                "Theo, dog owner",
              ],
              [
                "“I booked a walk and got back a dog that felt like new.”",
                "Sam, dog owner",
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
            Book a walk. Your dog deserves it.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-[#fff] text-[#0b0b07] px-6 py-3 rounded-[16px] font-semibold hover:scale-[1.04] transition">
              Book a Walk
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
          <div className="font-[Fraunces,serif] text-[1.1rem]">PupTrail</div>
          <div className="uppercase tracking-[0.2em]">
            Open 6am–8pm · Closed Sundays
          </div>
        </div>
      </footer>
    </div>
  );
}
