import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  /** URL da imagem do logo. Se ausente, renderiza `label`/`alt` como wordmark de texto. */
  src?: string;
  /** Wordmark textual (clientes sob NDA, sem logo público) */
  label?: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      {/* nota: a versão original usava speed/speedOnHover; este InfiniteSlider
          trabalha com duration/durationOnHover (hover = mais lento) */}
      <InfiniteSlider gap={42} reverse duration={25} durationOnHover={80}>
        {logos.map((logo) =>
          logo.src ? (
            <img
              alt={logo.alt}
              className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
              height={logo.height || "auto"}
              key={`logo-${logo.alt}`}
              loading="lazy"
              src={logo.src}
              width={logo.width || "auto"}
            />
          ) : (
            <span
              key={`logo-${logo.alt}`}
              className="pointer-events-none select-none whitespace-nowrap text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground md:text-base"
            >
              {logo.label ?? logo.alt}
            </span>
          )
        )}
      </InfiniteSlider>
    </div>
  );
}
