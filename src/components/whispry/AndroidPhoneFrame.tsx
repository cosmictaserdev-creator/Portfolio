import Image from "next/image";

// Real Pixel 9 Pro device art from Android Studio's device-art-resources,
// same frame used by the app's own store-screenshot pipeline. Display
// opening: (60, 61), 1280 x 2856 inside the 1408 x 2974 frame.
type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function AndroidPhoneFrame({ src, alt, priority, sizes, className }: Props) {
  return (
    <div className={`relative ${className ?? ""}`} style={{ aspectRatio: "1408 / 2974" }}>
      <Image
        src="/device-art/pixel-9-pro/back.webp"
        alt=""
        fill
        sizes={sizes}
        className="pointer-events-none z-[2] object-contain"
        aria-hidden
      />
      <div
        className="absolute overflow-hidden bg-black"
        style={{
          left: `${(60 / 1408) * 100}%`,
          top: `${(61 / 2974) * 100}%`,
          width: `${(1280 / 1408) * 100}%`,
          height: `${(2856 / 2974) * 100}%`,
          borderRadius: "8.515625% / 3.816527%",
        }}
      >
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>
      <Image
        src="/device-art/pixel-9-pro/mask.webp"
        alt=""
        fill
        sizes={sizes}
        className="pointer-events-none z-[3] object-contain"
        aria-hidden
      />
    </div>
  );
}
