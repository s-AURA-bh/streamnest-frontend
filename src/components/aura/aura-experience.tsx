"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Instagram,
  Mail,
  Radio,
  Sparkles
} from "lucide-react";
import { useEffect, useRef } from "react";
import { MagneticLink } from "@/components/aura/magnetic-link";
import { FutureProductCard, ProductCard } from "@/components/aura/product-card";
import { Reveal, TextReveal } from "@/components/aura/reveal";
import { cn } from "@/lib/utils";

type AuraExperienceProps = {
  pulseUrl: string;
  streamNestUrl: string;
};

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29 + 11) % 100}%`,
  top: `${(index * 47 + 17) % 100}%`,
  size: 2 + (index % 4),
  opacity: 0.18 + (index % 5) * 0.045,
  duration: 7 + (index % 6),
  delay: (index % 9) * 0.42
}));

const futureProducts = [0, 1, 2, 3];

export function AuraExperience({
  pulseUrl,
  streamNestUrl
}: AuraExperienceProps) {
  return (
    <motion.main
      className="aura-shell relative min-h-screen overflow-hidden bg-[#050506] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <CursorLight />
      <AmbientStage />
      <SiteHeader />
      <HeroSection />
      <ProductsSection pulseUrl={pulseUrl} streamNestUrl={streamNestUrl} />
      <FounderSection />
      <VisionSection />
      <ContactSection />
      <Footer pulseUrl={pulseUrl} streamNestUrl={streamNestUrl} />
    </motion.main>
  );
}

function SiteHeader() {
  const links = [
    { label: "Products", href: "#products" },
    { label: "Builder", href: "#builder" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-lg border border-white/[0.08] bg-black/35 px-4 shadow-[0_12px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
        <a href="#top" className="text-sm font-semibold text-white">
          AURA
        </a>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:bg-white/[0.055] hover:text-white"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

function AmbientStage() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="aura-gradient-field absolute inset-0" />
      <div className="aura-grid absolute inset-0" />
      <div className="aura-vignette absolute inset-0" />
      <FloatingParticles />
    </div>
  );
}

function FloatingParticles() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <motion.span
          className="absolute rounded-full bg-white"
          key={particle.id}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            boxShadow: "0 0 18px rgba(214, 203, 255, 0.55)"
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -18, 0],
                  x: [0, particle.id % 2 === 0 ? 10 : -10, 0],
                  opacity: [particle.opacity, particle.opacity + 0.22, particle.opacity]
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

function CursorLight() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-240);
  const mouseY = useMotionValue(-240);
  const x = useSpring(mouseX, { stiffness: 90, damping: 24, mass: 0.25 });
  const y = useSpring(mouseY, { stiffness: 90, damping: 24, mass: 0.25 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    function onPointerMove(event: PointerEvent) {
      mouseX.set(event.clientX - 210);
      mouseY.set(event.clientY - 210);
    }

    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(178,145,255,0.14),rgba(105,216,255,0.055)_34%,transparent_67%)] blur-2xl"
      style={{ x, y }}
    />
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-screen items-center justify-center px-5 pb-20 pt-28 sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.045] px-3 py-2 text-sm text-zinc-300 shadow-[0_0_60px_rgba(145,115,255,0.12)] backdrop-blur-2xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Sparkles className="size-4 text-violet-100" aria-hidden="true" />
          Crafted by Saurabh Yadav
        </motion.div>

        <h1
          className="aura-title text-[clamp(5.4rem,24vw,17rem)] font-semibold leading-[0.78] text-white"
          aria-label="AURA"
        >
          {"AURA".split("").map((letter, index) => (
            <motion.span
              className="inline-block"
              aria-hidden="true"
              initial={{ y: "110%", opacity: 0, filter: "blur(18px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              transition={{
                delay: 0.55 + index * 0.08,
                duration: 1.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              key={index}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-7 text-xl font-medium text-zinc-100 sm:text-2xl"
          initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.02, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Building digital systems
        </motion.p>

        <motion.div
          className="mt-11"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticLink href="#products">
            Explore
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </MagneticLink>
        </motion.div>
      </div>
    </section>
  );
}

function ProductsSection({
  pulseUrl,
  streamNestUrl
}: {
  pulseUrl: string;
  streamNestUrl: string;
}) {
  return (
    <section
      id="products"
      className="relative z-10 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-medium text-violet-100/80">
                01
              </p>
              <h2 className="text-4xl font-semibold text-white sm:text-6xl">
                Products
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-zinc-400">
              Quiet systems with a clear direction.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <ProductCard
            name="Pulse"
            description={[
              "A personal operating system for life.",
              "Track growth.",
              "Capture thoughts.",
              "Build momentum."
            ]}
            status="LIVE"
            href={pulseUrl}
            icon={Activity}
          />
          <ProductCard
            name="StreamNest"
            description={["A modern streaming platform experience."]}
            status="LIVE"
            href={streamNestUrl}
            icon={Radio}
          />
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {futureProducts.map((item) => (
            <FutureProductCard index={item} key={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section
      id="builder"
      className="relative z-10 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_0.72fr] md:items-center">
        <Reveal>
          <p className="mb-3 text-sm font-medium text-violet-100/80">02</p>
          <h2 className="text-4xl font-semibold text-white sm:text-6xl">
            The Builder
          </h2>
          <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-zinc-300">
            <p>Aura is a digital ecosystem created by Saurabh Yadav.</p>
            <p>
              A collection of products, ideas, and systems built with the goal
              of helping people grow, learn, and move forward.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="aura-portrait relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-lg border border-white/[0.09] bg-white/[0.035] shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="absolute inset-x-8 bottom-0 top-12 rounded-t-full border border-white/[0.08] bg-gradient-to-b from-white/[0.075] via-white/[0.025] to-transparent" />
            <div className="absolute left-1/2 top-16 size-24 -translate-x-1/2 rounded-full border border-white/[0.08] bg-gradient-to-b from-white/12 to-white/[0.025] shadow-[0_0_80px_rgba(181,153,255,0.18)]" />
            <div className="absolute inset-x-8 bottom-10 h-36 rounded-t-full border border-white/[0.07] bg-gradient-to-b from-white/[0.07] to-white/[0.02]" />
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),transparent_32%,rgba(148,119,255,0.09)_72%,transparent)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VisionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [72, -72]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.78, 1], [0.55, 1, 1, 0.72]);

  return (
    <section
      ref={ref}
      className="relative z-10 overflow-hidden px-5 py-28 sm:px-8 sm:py-40"
    >
      <motion.div
        className="aura-vision-light absolute inset-x-0 top-1/2 h-[44rem] -translate-y-1/2"
        style={{ y, opacity }}
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-8 text-sm font-medium text-violet-100/80">03</p>
        </Reveal>
        <h2 className="max-w-5xl text-[clamp(3.3rem,11vw,9.4rem)] font-semibold leading-[0.92] text-white">
          Ideas Into Impact
      </h2>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactLinks = [
    {
      label: "Email",
      href: "mailto:saurabhyadav49345252@gmail.com",
      icon: Mail
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/saurabh_somewhere/",
      icon: Instagram
    }
  ];

  return (
    <section
      id="contact"
      className="relative z-10 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-medium text-violet-100/80">04</p>
          <h2 className="text-4xl font-semibold text-white sm:text-6xl">
            Contact
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <MagneticLink
                className="h-14 justify-between px-5 sm:min-w-[220px]"
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-3">
                  <Icon className="size-5" aria-hidden="true" />
                  {link.label}
                </span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </MagneticLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer({
  pulseUrl,
  streamNestUrl
}: {
  pulseUrl: string;
  streamNestUrl: string;
}) {
  const links = [
    { label: "Pulse", href: normalizeExternal(pulseUrl) },
    { label: "StreamNest", href: normalizeExternal(streamNestUrl) },
    { label: "Instagram", href: "https://www.instagram.com/saurabh_somewhere/" },
    { label: "Email", href: "mailto:saurabhyadav49345252@gmail.com" }
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.08] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-semibold text-white">AURA</p>
          <p className="mt-2 text-sm text-zinc-400">Building digital systems</p>
          <p className="mt-6 text-sm text-zinc-500">Crafted by Saurabh Yadav</p>
        </div>
      </div>
    </footer>
  );
}

function normalizeExternal(href: string) {
  if (/^(https?:|mailto:)/.test(href)) return href;
  return `https://${href}`;
}
