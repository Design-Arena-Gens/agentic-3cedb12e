import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#light", label: "Light Engine" },
  { href: "#features", label: "Highlights" },
  { href: "#specs", label: "Specs" },
  { href: "#shop", label: "Shop" },
];

const statHighlights = [
  { value: "10,000 lux", label: "daylight therapy" },
  { value: "97%", label: "tester satisfaction" },
  { value: "30 days", label: "risk-free trial" },
];

const dayPhases = [
  {
    title: "Ignite your morning focus",
    description:
      "Falcon3Dmodel floods your workspace with 10,000 lux of calibrated daylight to lift mood, sync circadian rhythm, and prime your brain for deep work.",
    image:
      "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea277_05.08.22_HEAVN_0156.avif",
    time: "08:00",
  },
  {
    title: "Precision light for every detail",
    description:
      "Shadowless downward illumination reveals every texture, hue, and model contour—perfect for concept reviews, CAD, and sculpting sessions.",
    image:
      "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea288_05.08.22_HEAVN_0712%201.avif",
    time: "11:30",
  },
  {
    title: "Camera-ready presence",
    description:
      "A front-facing soft light mode frames your face with studio glow, so investor calls and livestream demos land with sharp clarity.",
    image:
      "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea23c_05.08.22_HEAVN_2595-transformed.webp",
    time: "15:45",
  },
  {
    title: "Evening ambience, deeper rest",
    description:
      "Warm, indirect light wraps your studio in calm, easing you into regeneration while intelligent automation cues melatonin release.",
    image:
      "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea240_05.08.22_HEAVN_2364-transformed.webp",
    time: "21:10",
  },
];

const featureHighlights = [
  {
    title: "Sculptural silhouette",
    description: "Designed to complement premium studios and modern workstations.",
    image:
      "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea28d_05.08.22_HEAVN_0194.avif",
  },
  {
    title: "Three light personas",
    description:
      "Desk lamp, daylight therapy, and ceiling wash combine into one intelligent instrument.",
    image:
      "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea28e_05.08.22_HEAVN_0880%201.avif",
  },
  {
    title: "Intuitive touch & app",
    description: "Fine-tune intensity, spectrum, and schedules with tactile controls or phone.",
    image:
      "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea28b_05.08.22_HEAVN_0535.avif",
  },
  {
    title: "Built-in charging dock",
    description: "Keep your phone powered with high-speed wireless charging at the base.",
    image:
      "https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea280_Screenshot%202024-10-17%20at%2017.13.51%201.avif",
  },
];

const specCategories = [
  {
    title: "Dimensions",
    details: ["Height 142 cm", "Lamp head width 82 cm", "Base footprint 34 × 28 cm"],
  },
  {
    title: "Light engine",
    details: ["Full-spectrum LED", "Tunable white 2700K – 6500K", "95+ CRI fidelity"],
  },
  {
    title: "Sensors & automation",
    details: ["Ambient light tracking", "Presence detection", "Adaptive day sequencing"],
  },
  {
    title: "Power & connectivity",
    details: ["230V / 120V auto-switching", "Wi-Fi & Bluetooth control", "Qi 15W wireless pad"],
  },
];

const guarantees = [
  { label: "Promise", value: "30-day money-back" },
  { label: "Delivery", value: "Ships in 3–4 days" },
  { label: "Price", value: "€1,290" },
];

const footerLinks = [
  { href: "https://heavn-lights.com/policies/legal-notice", label: "Imprint" },
  { href: "https://heavn-lights.com/policies/privacy-policy", label: "Privacy" },
  { href: "https://heavn-lights.com/policies/terms-of-service", label: "Terms" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(129,140,248,0.2),_transparent_55%)]" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cyan-400/20 text-cyan-300">
              F3D
            </span>
            <span className="text-xl text-slate-100">Falcon3Dmodel</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative transition-colors hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#shop"
            className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200 shadow-[0_0_24px_rgba(56,189,248,0.35)] transition-all hover:border-cyan-200 hover:bg-cyan-300/20 hover:text-white"
          >
            Order now
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section id="experience" className="relative isolate overflow-hidden px-6 pb-24 pt-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
                Falcon3Dmodel One
              </span>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                The world&apos;s brightest desk luminaire—engineered for creators who sculpt with light.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                Unlock a full-spectrum lighting ecosystem that adapts to your workday. Falcon3Dmodel
                blends daylight therapy, ambient wash lighting, and precision desk illumination into
                one sculptural statement.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#shop"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02] hover:bg-cyan-300"
                >
                  Configure your Falcon
                </a>
                <a
                  href="#light"
                  className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-white/30"
                >
                  Explore the light engine
                </a>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {statHighlights.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl border border-white/5 bg-white/5 p-4"
                  >
                    <div className="text-lg font-semibold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[520px] lg:h-[560px]">
              <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
              <div className="absolute inset-0 overflow-hidden rounded-[28px]">
                <Image
                  src="https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea26c_hero_img.avif"
                  alt="Designer working with Falcon3Dmodel luminaire"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-14 -left-14 hidden h-48 w-48 rounded-3xl border border-cyan-300/40 bg-cyan-300/20 p-3 shadow-[0_0_65px_rgba(56,189,248,0.35)] sm:block">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea283_05.08.22_HEAVN_2495%201.avif"
                    alt="Falcon3Dmodel luminaire lifestyle scene"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-12 -right-10 hidden h-28 w-28 rounded-full bg-gradient-to-br from-cyan-300/40 to-indigo-400/40 blur-xl sm:block" />
            </div>
          </div>
        </section>

        <section
          id="light"
          className="relative border-y border-white/5 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-24 lg:px-10"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
            <span className="rounded-full border border-white/5 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              Light that feels like the sun
            </span>
            <h2 className="text-balance text-4xl font-semibold text-white sm:text-5xl">
              A hybrid daylight and desk luminaire engineered to amplify your performance.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              Behind Falcon3Dmodel is a triple-channel optical engine that emulates the sun&apos;s
              spectrum, calibrates itself to your circadian rhythm, and evolves through the day so
              you can stay in flow, energized, and camera-ready.
            </p>
            <div className="relative w-full max-w-4xl overflow-hidden rounded-[32px] border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-indigo-400/20" />
              <Image
                src="https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea284_05.08.22_HEAVN_0414.avif"
                alt="Falcon3Dmodel daylight experience"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Adaptive day sequencing
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Your entire workday, choreographed by light.
                </h2>
              </div>
              <p className="max-w-xl text-slate-300">
                Intelligent automation transitions through daylight therapy, productivity, and
                evening wind-down—keeping you alert when you need it and calm when you don&apos;t.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {dayPhases.map((phase) => (
                <article
                  key={phase.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 transition-transform hover:-translate-y-1"
                >
                  <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-br from-cyan-400/15 via-transparent to-indigo-400/20" />
                  <div className="relative h-60 overflow-hidden rounded-t-3xl">
                    <Image
                      src={phase.image}
                      alt={phase.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur">
                      {phase.time}
                    </div>
                  </div>
                  <div className="relative space-y-3 px-7 pb-7 pt-6">
                    <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {phase.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="features"
          className="relative overflow-hidden border-y border-white/5 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_55%)] px-6 py-24 lg:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="rounded-full border border-white/5 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                Signature features
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                Revolutionize the way you illuminate your craft.
              </h2>
              <p className="mt-4 text-slate-300">
                Every angle, surface, and interaction was sculpted for studios that demand aesthetic
                excellence and ergonomic performance.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {featureHighlights.map((feature) => (
                <div
                  key={feature.title}
                  className="group overflow-hidden rounded-3xl border border-white/5 bg-white/5 transition-transform hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 540px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-cyan-400/10" />
                  </div>
                  <div className="space-y-3 px-7 pb-8 pt-6">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-slate-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="shop"
          className="px-6 py-24 lg:px-10"
        >
          <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 shadow-[0_45px_80px_-40px_rgba(14,165,233,0.35)]">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Reserve Falcon3Dmodel
                </span>
                <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                  Bring sunlight precision to your studio.
                </h2>
                <p className="text-lg text-slate-300">
                  Order Falcon3Dmodel One today and experience the difference within the first week.
                  We&apos;ll deliver it to your workspace, give you 30 days to live with it, and take
                  it back if it&apos;s anything short of transformative.
                </p>
                <div className="space-y-4">
                  {guarantees.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-3 text-sm text-slate-200"
                    >
                      <span>{item.label}</span>
                      <span className="font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://heavn-lights.com/products/heavn-one"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02] hover:bg-cyan-300"
                  >
                    Order Falcon3Dmodel One
                  </a>
                  <a
                    href="https://heavn-lights.com/blogs/journal/interview-mit-frank-thelen"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-white/40"
                  >
                    See customer stories
                  </a>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/10">
                  <Image
                    src="https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea27b_thelen.avif"
                    alt="Falcon3Dmodel in studio environment"
                    width={720}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 space-y-1 text-sm">
                    <p className="font-semibold text-white">“Falcon3Dmodel keeps me sharp.”</p>
                    <p className="text-slate-300">— Frank Thelen, Investor & Creator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="specs"
          className="border-y border-white/5 bg-slate-950/70 px-6 py-24 lg:px-10"
        >
          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Engineered with experts
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Technical details that deliver measurable impact.
              </h2>
              <p className="text-slate-300">
                Falcon3Dmodel was developed with chronobiologists and industrial designers to align
                body chemistry with performance. Explore the specs that set it apart.
              </p>
              <a
                href="https://cdn.shopify.com/s/files/1/0508/0186/8972/files/240624_HVN_Katalog_HEAVN_2024_Digital_EN_small-2PageSetup.pdf?v=1720098477"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                Download catalog (PDF)
              </a>
            </div>

            <div className="grid gap-4">
              {specCategories.map((spec) => (
                <div
                  key={spec.title}
                  className="rounded-3xl border border-white/5 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{spec.title}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-slate-300">
                    {spec.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 lg:px-10">
          <div className="mx-auto flex max-w-5xl flex-col-reverse gap-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-slate-950/80 to-cyan-500/10 p-12 lg:flex-row lg:items-center">
            <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 lg:h-80 lg:w-1/2">
              <Image
                src="https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/671791792241fce77a3dd5f4_05.08.22_HEAVN_0170.avif"
                alt="Falcon3Dmodel night ambience"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 text-xs text-slate-200">
                <span className="font-semibold text-white">Designed in Germany</span>
                <span>Adaptive scenes • Cinematic ambience</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <span className="rounded-full border border-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                Immersive presentation
              </span>
              <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
                Present your ideas under light that captures every contour.
              </h2>
              <p className="text-slate-300">
                Whether you&apos;re unveiling a 3D model, pitching to investors, or streaming a
                behind-the-scenes build, Falcon3Dmodel delivers a cinematic backdrop with one tap.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/watch?v=i9B3IX-JWOA"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02]"
                >
                  Watch the product film
                </a>
                <a
                  href="#experience"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80 px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 font-semibold text-slate-200">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-cyan-400/10 text-cyan-300">
              F3D
            </span>
            Falcon3Dmodel © {new Date().getFullYear()}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href="https://de.linkedin.com/company/heavn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-200"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/heavn_lights/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-200"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/HEAVN.lights/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-200"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
