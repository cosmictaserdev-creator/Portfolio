import Script from "next/script";

/**
 * GA4. Renders nothing unless NEXT_PUBLIC_GA_ID is set, so local dev
 * and preview deploys stay out of the numbers.
 */
export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
