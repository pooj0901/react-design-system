import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { FaGithub, FaFigma } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const NAV_ITEMS = [
  { label: "Foundations", href: "/colors" },
  { label: "Components", href: "/button" },
  { label: "Tokens", href: "/tokens" },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "preconnect";
    link1.href = "https://fonts.googleapis.com";
    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href =
      "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap";
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  // Close mobile menu on resize back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-[#1E1B2E]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @keyframes floatA {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(30px, -40px) scale(1.08); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes floatB {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(-40px, 30px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes softBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes menuSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-in-1 { animation: heroFadeUp 0.7s cubic-bezier(.16,1,.3,1) 0.05s both; }
        .hero-in-2 { animation: heroFadeUp 0.7s cubic-bezier(.16,1,.3,1) 0.18s both; }
        .hero-in-3 { animation: heroFadeUp 0.7s cubic-bezier(.16,1,.3,1) 0.30s both; }
        .hero-in-4 { animation: heroFadeUp 0.7s cubic-bezier(.16,1,.3,1) 0.42s both; }
        .hero-in-5 { animation: heroFadeUp 0.8s cubic-bezier(.16,1,.3,1) 0.55s both; }
        .blob-a { animation: floatA 16s ease-in-out infinite; }
        .blob-b { animation: floatB 20s ease-in-out infinite; }
        .arrow-nudge { transition: transform 0.35s cubic-bezier(.16,1,.3,1); }
        .group:hover .arrow-nudge { transform: translateX(6px); }
        .btn-shimmer {
          background: linear-gradient(110deg, #EC4899 20%, #F472B6 35%, #22D3EE 50%, #EC4899 65%);
          background-size: 250% 100%;
          animation: shimmer 5s linear infinite;
        }
        .nav-link { position: relative; }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -4px;
          height: 2px;
          background: linear-gradient(90deg, #EC4899, #22D3EE);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(.16,1,.3,1);
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .float-soft { animation: softBounce 4.5s ease-in-out infinite; }
        .mobile-menu-in { animation: menuSlide 0.25s cubic-bezier(.16,1,.3,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .blob-a, .blob-b, .hero-in-1, .hero-in-2, .hero-in-3, .hero-in-4, .hero-in-5, .btn-shimmer, .float-soft, .mobile-menu-in {
            animation: none !important;
          }
        }
      `}</style>


      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#FFFBFD]">
        <div
          className="blob-a absolute -top-32 -left-24 h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px] rounded-full opacity-60 blur-[80px] sm:blur-[110px]"
          style={{ background: "radial-gradient(circle, #F9A8D4 0%, #FBCFE8 60%, transparent 75%)" }}
        />
        <div
          className="blob-b absolute top-1/3 -right-32 h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] lg:h-[560px] lg:w-[560px] rounded-full opacity-50 blur-[90px] sm:blur-[120px]"
          style={{ background: "radial-gradient(circle, #67E8F9 0%, #CFFAFE 60%, transparent 75%)" }}
        />
        <div
          className="blob-a absolute bottom-0 left-1/4 h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px] rounded-full opacity-40 blur-[70px] sm:blur-[100px]"
          style={{ background: "radial-gradient(circle, #F472B6 0%, transparent 70%)", animationDelay: "-6s" }}
        />
      </div>



     <header className="fixed inset-x-0 top-0 z-50">
  <div className="absolute inset-x-0 top-0 -z-10 flex justify-center pt-3 sm:pt-5">
    <div className="h-16 w-full max-w-7xl rounded-full bg-white/35 blur-2xl sm:h-20" />
  </div>

  <nav className="mx-3 mt-3 flex h-16 items-center justify-between rounded-full border border-white/40 bg-white/65 px-4 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:mx-6 sm:h-[72px] sm:px-6 md:mx-auto md:mt-5 md:h-20 md:max-w-7xl md:px-8">


    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-blue-500 text-sm font-bold text-white sm:h-12 sm:w-12 sm:rounded-2xl sm:text-base">
        DS
      </div>

      <div>
        <h1
          className="text-xs font-semibold text-neutral-900 sm:text-[15px]"
          style={{ fontFamily: "Sora" }}
        >
          Design System
        </h1>

        <p className="text-[10px] text-neutral-500 sm:text-xs">
          Figma → Code
        </p>
      </div>
    </div>


    <div className="hidden items-center gap-10 lg:flex">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="relative text-sm font-medium text-neutral-500 transition hover:text-neutral-900 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-cyan-500 after:transition-all hover:after:w-full"
        >
          {item.label}
        </a>
      ))}
    </div>


    <div className="flex items-center gap-2 sm:gap-3">

   
      <a
        href="https://github.com/pooj0901"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-neutral-200 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:h-11 sm:w-11 sm:rounded-2xl"
      >
        <FaGithub size={18} />
      </a>

   
      <a
        href="https://www.figma.com/design/q3ND2vCKyM6q9ckcTkCd1E/Design-Systems?node-id=392-2&t=3eeIRiZMSmXrxYRf-1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-neutral-200 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:h-11 sm:w-11 sm:rounded-2xl"
      >
        <FaFigma size={18} />
      </a>


      <button
        onClick={() => navigate("/research")}
        className="hidden rounded-full border border-neutral-300 bg-pink-300/80 px-7 py-3.5 text-base font-medium text-pink-950 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-md lg:inline-flex"
      >
        <span className="inline-flex items-center gap-2">
          Get Started
          <ArrowRight size={16} />
        </span>
      </button>

    
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-neutral-200 bg-white/70 transition hover:shadow-md lg:hidden"
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

    </div>
  </nav>

  {menuOpen && (
    <div className="mobile-menu-in mx-3 mt-2 rounded-3xl border border-white/40 bg-white/90 p-4 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:mx-6 lg:hidden">

      <div className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl px-4 py-3 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50 hover:text-neutral-900"
          >
            {item.label}
          </a>
        ))}

        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/research");
          }}
          className="mt-3 rounded-full border border-neutral-300 bg-pink-300/80 px-5 py-3 font-medium text-pink-950"
        >
          Get Started
        </button>
      </div>

    </div>
  )}
</header>


      <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center gap-12 px-4 pt-32 pb-16 sm:px-6 sm:pt-36 lg:min-h-[calc(100vh-64px)] lg:flex-row lg:justify-between lg:gap-16 lg:pt-40">

        <div className="w-full max-w-2xl lg:max-w-[650px]">

          <span className="hero-in-1 inline-flex items-center rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-xs font-medium text-neutral-600 shadow-sm sm:text-sm">
            ✨ Version 1.0
          </span>

          <h1
            className="hero-in-2 mt-6 text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:mt-8 sm:text-5xl sm:leading-[1.05] md:text-6xl lg:text-7xl lg:tracking-[-0.04em]"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Build beautiful
            <br />
            interfaces
            <br />
            from{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#EC4899,#22D3EE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Figma → Code
            </span>
          </h1>

          <p className="hero-in-3 mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:mt-8 sm:text-lg sm:leading-8">
            A scalable design system built with reusable components,
            design tokens, accessibility, and production-ready React
            code.
          </p>

          <div className="hero-in-4 mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">

            <button
              onClick={() => navigate("/research")}
              className="rounded-full border border-neutral-300 bg-pink-300/80 px-6 py-3 font-medium text-pink-950 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-md sm:px-7 sm:py-3.5"
            >
              <span className="inline-flex items-center gap-2">
                Get Started
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("featured-components")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className="rounded-full border border-neutral-300 bg-white/80 px-6 py-3 font-medium text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-md sm:px-7 sm:py-3.5"
            >
              View Components
            </button>
          </div>

        </div>


        <div className="hero-in-5 flex w-full max-w-[420px] flex-col items-center gap-4 lg:w-auto lg:max-w-none lg:flex-row lg:gap-0">


          <div className="w-full rounded-3xl border border-neutral-200 bg-white p-5 shadow-xl sm:p-6 lg:w-80">

            <div className="mb-4 flex items-center justify-between sm:mb-5">

              <span className="font-semibold">
                Figma
              </span>

              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

            </div>

            <div className="rounded-2xl border border-neutral-200 p-4 sm:p-5">

              <div className="mb-4 rounded-[12px] bg-cyan-500 py-3 text-center font-medium text-white sm:mb-5">
                Primary Button
              </div>


              <div className="space-y-3 text-sm">

                <div className="flex justify-between">
                  <span>Auto Layout</span>
                  <span className="text-neutral-400">
                    Horizontal
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Padding</span>
                  <span className="text-neutral-400">
                    16px
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Radius</span>
                  <span className="text-neutral-400">
                    12px
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Color</span>
                  <div className="flex gap-2">
                    <div className="h-4 w-4 rounded-full bg-cyan-400" />
                  </div>
                </div>

              </div>

            </div>

          </div>


          <div className="rotate-90 text-3xl font-light lg:rotate-0 lg:text-4xl">
            →
          </div>



          <div className="w-full overflow-hidden rounded-3xl border border-neutral-800 bg-[#111827] shadow-2xl lg:w-96">

            <div className="flex items-center gap-2 border-b border-neutral-700 px-4 py-3 sm:px-5">

              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-3 text-xs text-neutral-400">
                Button.tsx
              </span>

            </div>

            <pre className="overflow-x-auto px-4 py-4 text-xs leading-6 text-neutral-300 sm:px-5 sm:py-5 sm:text-[13px] sm:leading-7">
{`export function Button() {
  return (
    <button
      className="
      rounded-xl
      px-5 py-3
      bg-black
      text-white
      "
    >
     Primary Button
    </button>
  );
}`}
            </pre>

          </div>

        </div>

      </section>


      <section className="mx-auto mt-12 max-w-7xl px-4 pb-16 sm:mt-20 sm:px-6 sm:pb-24">

        <Reveal className="mb-8 sm:mb-10">
          <span className="inline-flex rounded-full border border-pink-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-neutral-600">
            Documentation
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:mt-9 sm:text-4xl md:text-5xl" style={{ fontFamily: "'Sora', sans-serif" }}>
            Documentation
          </h2>

          <p className="mt-2 text-neutral-500">
            Everything you need to design and build consistent interfaces.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            { icon: "🎨", title: "Foundations", desc: "Colors, typography, spacing, grids and elevation.", ring: "hover:shadow-pink-100" },
            { icon: "🧩", title: "Components", desc: "Buttons, inputs, cards, navigation and more.", ring: "hover:shadow-cyan-100" },
            { icon: "⚙️", title: "Design Tokens", desc: "Variables shared between Figma and React.", ring: "hover:shadow-pink-100" },
            { icon: "📚", title: "Guidelines", desc: "Accessibility, usage, best practices and patterns.", ring: "hover:shadow-cyan-100" },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className={`h-full rounded-3xl border border-white/60 bg-white/70 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-6 ${item.ring}`}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-xl sm:mb-5">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}

        </div>

      </section>



      <section id="featured-components" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">



        <Reveal className="mb-10 sm:mb-14">

          <span className="inline-flex rounded-full border border-pink-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-neutral-600">
            Components
          </span>

          <h2
            className="mt-6 text-3xl font-bold tracking-tight sm:mt-9 sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Featured Components
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg sm:leading-8">
            Production-ready UI components designed for consistency,
            accessibility, and beautiful user experiences.
          </p>

        </Reveal>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">


          <Reveal>

            <div className="flex min-h-[260px] flex-col rounded-[30px] border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/60 sm:h-[280px] sm:p-8">

              <div className="flex items-center justify-between">

                <span className="text-sm font-medium text-neutral-500">
                  Button
                </span>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                  React
                </span>

              </div>

             <div className="flex flex-1 flex-col justify-start gap-4 py-4 sm:justify-center sm:py-0">  <div className="flex flex-wrap items-center gap-3">

                  <button
                    className="rounded-full px-6 py-3 font-medium text-white shadow-sm"
                    style={{ background: "linear-gradient(135deg,#1E1B2E,#3F3A56)" }}
                  >
                    Primary
                  </button>

                  <button className="rounded-full border border-neutral-300 px-6 py-3 font-medium transition hover:border-cyan-300">
                    Secondary
                  </button>

                  <button className="rounded-full bg-neutral-100 px-6 py-3 font-medium">
                    Ghost
                  </button>

                </div>

                <p className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "linear-gradient(135deg,#EC4899,#22D3EE)" }} />
                  3 variants · loading & disabled states included
                </p>

              </div>

              <button
                onClick={() => navigate("/button")}
                className="self-start mt-2 sm:mt-0 rounded-full px-5 py-2.5 text-sm font-medium text-cyan-900 bg-cyan-100/80 border border-cyan-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-lg"
              >
                Learn More
              </button>

            </div>

          </Reveal>



          <Reveal delay={100}>

            <div className="flex min-h-[260px] flex-col rounded-[30px] border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60 sm:h-[280px] sm:p-8">

              <div className="flex items-center justify-between">

                <span className="text-sm font-medium text-neutral-500">
                  Input
                </span>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                  Forms
                </span>

              </div>

              <div className="flex flex-1 flex-col justify-center gap-3">

                <label className="text-xs font-medium text-neutral-500">
                  Email address
                </label>

                <input
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-neutral-200 px-5 py-3 text-sm outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />

                <p className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <span className="text-cyan-500">✓</span>
                  Looks good — we'll never share this
                </p>

              </div>

              <button
                onClick={() => navigate("/input")}
                className="
    self-start 
    rounded-full 
    px-5 py-2.5 
    text-sm 
    font-medium 
    text-cyan-900
    bg-cyan-100/80
    border border-cyan-200
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-cyan-200
    hover:shadow-lg
  "
              >
                Learn More
              </button>
            </div>

          </Reveal>



          <Reveal delay={150}>

            <div className="flex min-h-[260px] flex-col rounded-[30px] border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/60 sm:h-[280px] sm:p-8">

              <div className="flex items-center justify-between">

                <span className="text-sm font-medium text-neutral-500">
                  Checkbox
                </span>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                  Forms
                </span>

              </div>

              <div className="flex flex-1 flex-col justify-center gap-4">

                <label className="flex items-center gap-3 text-sm font-medium text-neutral-700">
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-md text-[11px] text-white shadow-sm"
                    style={{ background: "linear-gradient(135deg,#EC4899,#22D3EE)" }}
                  >
                    ✓
                  </span>
                  Remember me
                </label>

                <label className="flex items-center gap-3 text-sm font-medium text-neutral-400">
                  <span className="h-5 w-5 rounded-md border border-neutral-300" />
                  Send me updates
                </label>

                <label className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                  <span className="h-5 w-5 rounded-md border border-neutral-200 bg-neutral-50" />
                  Share usage data
                </label>

              </div>

              <button
                onClick={() => navigate("/checkbox")}
                className="
    self-start 
    rounded-full 
    px-5 py-2.5 
    text-sm 
    font-medium 
    text-cyan-900
    bg-cyan-100/80
    border border-cyan-200
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-cyan-200
    hover:shadow-lg
  "
              >
                Learn More
              </button>

            </div>

          </Reveal>


          <Reveal delay={200}>

            <div className="flex min-h-[260px] flex-col rounded-[30px] border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60 sm:h-[280px] sm:p-8">

              <div className="flex items-center justify-between">

                <span className="text-sm font-medium text-neutral-500">
                  Badge
                </span>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                  Status
                </span>

              </div>

              <div className="flex flex-1 flex-col justify-center gap-4">

                <div className="flex flex-wrap gap-3">

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                    Success
                  </span>

                  <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                    Warning
                  </span>

                  <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
                    Error
                  </span>

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                    Info
                  </span>

                </div>

                <p className="text-xs text-neutral-400">
                  Semantic colors map to your design tokens automatically.
                </p>

              </div>

              <button
                onClick={() => navigate("/badge")}
                className="
    self-start 
    rounded-full 
    px-5 py-2.5 
    text-sm 
    font-medium 
    text-cyan-900
    bg-cyan-100/80
    border border-cyan-200
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-cyan-200
    hover:shadow-lg
  "
              >
                Learn More
              </button>

            </div>

          </Reveal>


          <Reveal delay={250}>

            <div className="flex min-h-[260px] flex-col rounded-[30px] border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/60 sm:h-[280px] sm:p-8">

              <div className="flex items-center justify-between">

                <span className="text-sm font-medium text-neutral-500">
                  Card
                </span>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                  Layout
                </span>

              </div>

              <div className="flex flex-1 flex-col justify-center">

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5">

                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl" style={{ background: "linear-gradient(135deg,#EC4899,#22D3EE)" }} />
                    <div>
                      <h3 className="text-sm font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>
                        Design System
                      </h3>
                      <p className="text-xs text-neutral-500">
                        Build once. Reuse everywhere.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              <button
                onClick={() => navigate("/card")}
                className="
    self-start 
    rounded-full 
    px-5 py-2.5 
    text-sm 
    font-medium 
    text-cyan-900
    bg-cyan-100/80
    border border-cyan-200
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-cyan-200
    hover:shadow-lg
  "
              >
                Learn More
              </button>

            </div>

          </Reveal>



          <Reveal delay={0}>
            <div className="flex min-h-[260px] flex-col rounded-[30px] border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60 sm:h-[280px] sm:p-8">


              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-500">
                  Modal
                </span>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                  Overlay
                </span>
              </div>


              <div className="my-4 flex h-[120px] items-center justify-center rounded-2xl bg-neutral-100/70 sm:my-5">

                <div className="w-[260px] rounded-[12px] border border-neutral-200 bg-white p-2.5 shadow-lg sm:w-[300px]">

                  <div className="flex items-center justify-between">
                    <h3
                      className="text-[11px] font-semibold text-neutral-800"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      Delete item?
                    </h3>

                    <span className="text-[10px] text-neutral-400">
                      ✕
                    </span>
                  </div>

                  <p className="mt-1 text-[9px] leading-3.5 text-neutral-500">
                    This action cannot be undone.
                  </p>

                  <div className="mt-2 flex justify-end gap-1">
                    <button className="rounded-full bg-neutral-100 px-2 py-0.5 text-[9px] font-medium">
                      Cancel
                    </button>

                    <button
                      className="rounded-full px-2 py-0.5 text-[9px] font-medium text-white"
                      style={{
                        background: "linear-gradient(135deg,#1E1B2E,#3F3A56)",
                      }}
                    >
                      Confirm
                    </button>
                  </div>

                </div>

              </div>

              <button
                onClick={() => navigate("/modal")}
                className="
        self-start
        rounded-full
        border border-cyan-200
        bg-cyan-100/80
        px-5
        py-2.5
        text-sm
        font-medium
        text-cyan-900
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-cyan-200
        hover:shadow-lg
      "
              >
                Learn More
              </button>

            </div>
          </Reveal>


          <Reveal delay={90}>

            <div className="flex min-h-[260px] flex-col rounded-[30px] border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/60 sm:h-[280px] sm:p-8">

              <div className="flex items-center justify-between">

                <span className="text-sm font-medium text-neutral-500">
                  Dropdown
                </span>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                  Navigation
                </span>

              </div>

              <div className="flex flex-1 flex-col justify-center gap-2">
                <div className="flex items-center justify-between rounded-[8px] border border-neutral-200 px-3 py-2.5 text-xs font-medium text-neutral-700">
                  <span>Sort by: Newest</span>

                  <span className="text-[10px] text-neutral-400">
                    ⌄
                  </span>
                </div>

                <div className="rounded-[8px] border border-neutral-200 bg-white p-1.5 shadow-sm">
                  <p
                    className="rounded-[8px] px-3 py-2 text-xs text-neutral-700"
                    style={{
                      background:
                        "linear-gradient(90deg,#FDF2F8,#ECFEFF)",
                    }}
                  >
                    Newest
                  </p>

                  <p className="rounded-[8px] px-3 py-2 text-xs text-neutral-500">
                    Oldest
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate("/dropdown")}
                className="
    self-start 
    rounded-full 
    px-5 py-2.5 
    text-sm 
    font-medium 
    text-cyan-900
    bg-cyan-100/80
    border border-cyan-200
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-cyan-200
    hover:shadow-lg
  "
              >
                Learn More
              </button>

            </div>

          </Reveal>


          <Reveal delay={150}>

            <div className="flex min-h-[260px] flex-col rounded-[30px] border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60 sm:h-[280px] sm:p-8">

              <div className="flex items-center justify-between">

                <span className="text-sm font-medium text-neutral-500">
                  Table
                </span>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                  Data
                </span>

              </div>

              <div className="flex flex-1 flex-col justify-center">

                <div className="overflow-x-auto rounded-2xl border border-neutral-200">

                  <div className="grid min-w-[280px] grid-cols-3 bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-500">
                    <span>Name</span>
                    <span>Role</span>
                    <span>Status</span>
                  </div>

                  <div className="grid min-w-[280px] grid-cols-3 items-center border-t border-neutral-100 px-4 py-2.5 text-sm text-neutral-700">
                    <span>Pooja</span>
                    <span>UI Dev</span>
                    <span className="w-fit rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">Active</span>
                  </div>

                  <div className="grid min-w-[280px] grid-cols-3 items-center border-t border-neutral-100 px-4 py-2.5 text-sm text-neutral-700">
                    <span>Arjun</span>
                    <span>Designer</span>
                    <span className="w-fit rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700">Invited</span>
                  </div>

                </div>

              </div>

              <button
                onClick={() => navigate("/table")}
                className="
    self-start 
    rounded-full 
    px-5 py-2.5 
    text-sm 
    font-medium 
    text-cyan-900
    bg-cyan-100/80
    border border-cyan-200
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-cyan-200
    hover:shadow-lg
  "
              >
                Learn More
              </button>

            </div>

          </Reveal>

        </div>

      </section>



      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">

        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-white/60 px-5 py-12 text-center shadow-xl shadow-pink-100/50 sm:px-8 sm:py-16"
            style={{ background: "linear-gradient(135deg, #FDF2F8 0%, #FFFFFF 45%, #ECFEFF 100%)" }}
          >
            <div
              className="blob-a pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "#F9A8D4" }}
            />
            <div
              className="blob-b pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "#67E8F9" }}
            />

            <span className="relative rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm">
              Ready to build?
            </span>

            <h2 className="relative mt-6 text-2xl font-bold sm:mt-9 sm:text-3xl md:text-4xl" style={{ fontFamily: "'Sora', sans-serif" }}>
              Start building with the
              <br />
              Design System today.
            </h2>

            <p className="relative mx-auto mt-4 max-w-xl text-sm text-neutral-500 sm:mt-6 sm:text-base">
              Explore reusable components, design tokens, and documentation
              designed to help you build consistent, scalable interfaces.
            </p>

            <div className="relative mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">

              <button
                className="rounded-full border border-neutral-300 bg-pink-300/80 px-6 py-3 font-medium text-pink-950 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-md sm:px-7 sm:py-3.5"
              >
                Browse Components
              </button>

              <button className="rounded-full border border-neutral-300 bg-white px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
                View on GitHub
              </button>

            </div>

          </div>
        </Reveal>

      </section>



      <footer className="border-t border-white/50">

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 text-center text-sm text-neutral-500 sm:px-6 sm:py-10 md:flex-row md:justify-between md:text-left">

          <div>

            <h3 className="font-semibold text-[#1E1B2E]" style={{ fontFamily: "'Sora', sans-serif" }}>
              Design System
            </h3>

            <p className="mt-1">
              Built with Figma, React & Tailwind CSS.
            </p>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

            <a href="/research" className="nav-link hover:text-[#1E1B2E]">
              Documentation
            </a>

            <a href="https://github.com/pooj0901" className="nav-link hover:text-[#1E1B2E]">
              GitHub
            </a>

            <a href="https://www.figma.com/design/q3ND2vCKyM6q9ckcTkCd1E/Design-Systems?node-id=392-2&t=3eeIRiZMSmXrxYRf-1" className="nav-link hover:text-[#1E1B2E]">
              Figma
            </a>

          </div>

          <p>
            © 2026 All rights reserved.
          </p>

        </div>

      </footer>
    </div>

  );
}