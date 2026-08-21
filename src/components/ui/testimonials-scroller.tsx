import { useEffect, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type ScrollerTestimonial = {
  text: string;
  name: string;
  role: string;
  /** Foto opcional; sem ela, renderiza avatar com inicial em gradiente da marca (clientes sob NDA) */
  image?: string;
  note?: string;
};

export function TestimonialCard({
  text,
  image,
  name,
  role,
  note,
  className,
}: ScrollerTestimonial & { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-2xl rounded-2xl border border-border bg-card p-8 text-left shadow-lg shadow-slate-900/5",
        className
      )}
    >
      <div className="text-sm leading-relaxed text-card-foreground">{text}</div>
      <div className="mt-5 flex items-center gap-3">
        {image ? (
          <img
            width={40}
            height={40}
            src={image}
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div
            className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full font-bold text-white"
            style={{
              background: "linear-gradient(135deg,#EE5952 0%,#D84943 100%)",
            }}
            aria-hidden="true"
          >
            {name.charAt(0)}
          </div>
        )}
        <div className="flex flex-col">
          <div className="font-semibold leading-5 tracking-tight">{name}</div>
          <div className="text-sm leading-5 text-muted-foreground">{role}</div>
          {note && <div className="text-xs italic text-muted-foreground/80">{note}</div>}
        </div>
      </div>
    </div>
  );
}

/** Grade estática 2x2 com os 4 depoimentos (2 em cima, 2 embaixo). */
export function TestimonialsGrid({
  testimonials,
  className,
}: {
  testimonials: ScrollerTestimonial[];
  className?: string;
}) {
  return (
    <div className={cn("mx-auto grid max-w-4xl gap-6 sm:grid-cols-2", className)}>
      {testimonials.map((t) => (
        <TestimonialCard key={t.name} {...t} />
      ))}
    </div>
  );
}

const scrollerCardClassName = "w-[22rem] max-w-[85vw] flex-shrink-0";

/**
 * Fileira de depoimentos em scroll horizontal contínuo (loop sem costura).
 * Animação em CSS (keyframes em landing.css) para permitir pausa no hover —
 * depoimento é conteúdo de leitura; movimento contínuo sem pausa é ilegível.
 */
export function TestimonialsScroller({
  testimonials,
  speed = "40s",
  direction = "left",
  className,
}: {
  testimonials: ScrollerTestimonial[];
  speed?: string;
  direction?: "left" | "right";
  className?: string;
}) {
  const animationClass =
    direction === "right" ? "animate-scroll-horizontal-reverse" : "animate-scroll-horizontal";
  const style = { "--scroll-duration": speed } as CSSProperties;

  return (
    <div className={cn("scroller-mask relative w-full overflow-hidden", className)}>
      <div className={cn("flex w-max", animationClass)} style={style}>
        <div className="flex flex-shrink-0 items-stretch justify-center gap-6 px-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} className={scrollerCardClassName} />
          ))}
        </div>
        {/* duplicata para o loop sem costura */}
        <div className="flex flex-shrink-0 items-stretch justify-center gap-6 px-3" aria-hidden="true">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`dup-${i}`} {...t} className={scrollerCardClassName} />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Duas fileiras (pares) de depoimentos revezando com fade — só 2 cards
 * visíveis por vez, trocando de par a cada `intervalMs`.
 */
export function TestimonialsRotator({
  pairs,
  intervalMs = 6000,
  className,
}: {
  pairs: ScrollerTestimonial[][];
  intervalMs?: number;
  className?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (pairs.length <= 1) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % pairs.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [pairs.length, intervalMs]);

  return (
    <div
      className={cn(
        "mx-auto grid max-w-3xl justify-items-center gap-6 sm:grid-cols-2 animate-testimonial-fade",
        className
      )}
      key={active}
    >
      {pairs[active].map((t) => (
        <TestimonialCard key={t.name} {...t} />
      ))}
    </div>
  );
}
