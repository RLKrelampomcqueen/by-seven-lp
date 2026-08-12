import * as React from "react";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavLink {
  label: string;
  href: string;
}

interface CtaConfig {
  text: string;
  onClick: () => void;
  /** Override do estilo glass padrão (ex.: gradiente de marca) */
  className?: string;
}

interface AnimatedHeroProps {
  /** Imagem de fundo (fallback quando não há vídeo) */
  backgroundImageUrl?: string;
  /** Vídeo de fundo em loop, mudo — renderizado com opacidade reduzida */
  backgroundVideoUrl?: string;
  /** Classe do overlay sobre o fundo (padrão: bg-black/60) */
  overlayClassName?: string;
  logo: React.ReactNode;
  navLinks: NavLink[];
  topRightAction?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  ctaButton: CtaConfig;
  secondaryCta?: CtaConfig;
  /** Conteúdo extra animado abaixo dos CTAs (trust signals, stats…) */
  children?: React.ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const AnimatedHero = ({
  backgroundImageUrl,
  backgroundVideoUrl,
  overlayClassName,
  logo,
  navLinks,
  topRightAction,
  title,
  description,
  ctaButton,
  secondaryCta,
  children,
  className,
}: AnimatedHeroProps) => {
  const glassButtonClassName =
    "bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground hover:bg-white/20 transition-colors";

  // nav fixa: CTA permanece disponível durante toda a rolagem
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background",
        className
      )}
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {backgroundVideoUrl ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-55"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={backgroundVideoUrl} type="video/mp4" />
          </video>
        ) : backgroundImageUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          />
        ) : null}
        <div className={cn("absolute inset-0", overlayClassName ?? "bg-black/60")} />
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 z-50 h-20 w-full text-white transition-colors duration-300",
          scrolled || menuOpen
            ? "border-b border-[#212737] bg-[rgba(6,7,10,.85)] backdrop-blur-md"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-[1160px] items-center justify-between px-6">
          <div className="flex items-center gap-2">{logo}</div>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {topRightAction}
            <button
              type="button"
              className="grid h-10 w-10 place-items-center text-white md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-b border-[#212737] bg-[rgba(6,7,10,.95)] backdrop-blur-md md:hidden">
            <div className="mx-auto flex max-w-[1160px] flex-col px-6 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-3 text-sm font-medium text-primary-foreground/80 last:border-0 hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </motion.header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-[1160px] w-full py-32 text-white"
      >
        <motion.h1
          variants={itemVariants}
          className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80"
        >
          {description}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            onClick={ctaButton.onClick}
            size="lg"
            className={cn(glassButtonClassName, ctaButton.className)}
          >
            {ctaButton.text}
          </Button>
          {secondaryCta && (
            <Button
              onClick={secondaryCta.onClick}
              size="lg"
              className={cn(glassButtonClassName, secondaryCta.className)}
            >
              {secondaryCta.text}
            </Button>
          )}
        </motion.div>
        {children && (
          <motion.div variants={itemVariants} className="mt-10 w-full">
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
