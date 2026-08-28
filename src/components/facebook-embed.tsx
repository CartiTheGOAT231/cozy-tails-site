import { useEffect, useRef, useState } from "react";

const FB_PLUGIN_URL =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWadhamsRoadAnimalClinic%2F&tabs=timeline&width=500&height=620&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";

/** Facebook's Page Plugin caps at 500px wide — scale it up to fill the card on larger screens. */
export function FacebookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(Math.max(1, el.clientWidth / 500));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-muted"
      style={{ height: 620 * scale }}
    >
      <iframe
        src={FB_PLUGIN_URL}
        title="Wadhams Road Animal Clinic Facebook page"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        style={{
          width: "100%",
          height: 620,
          border: "none",
          overflow: "hidden",
          zoom: scale,
        }}
      />
    </div>
  );
}
