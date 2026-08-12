import { useEffect, useRef, useState } from "react";

export function ActiveCampaignForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(560);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== iframeRef.current?.contentWindow) return;
      if (typeof e.data?.acFormHeight === "number") {
        setHeight(e.data.acFormHeight);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title="Fale com nossos especialistas em Segurança"
      src={`${import.meta.env.BASE_URL}ac-form.html`}
      style={{
        width: "100%",
        maxWidth: 600,
        border: "none",
        display: "block",
        margin: "0 auto",
        height,
      }}
    />
  );
}
