import Script from 'next/script';

const ConsentScript = () => {
  return (
    <Script
      strategy="afterInteractive" // Ensures the script loads after the page is interactive
      src="https://cdn.consentmanager.net/delivery/autoblocking/e78fa711d2334.js"
      type="text/javascript"
      data-cmp-ab="1"
      data-cmp-host="c.delivery.consentmanager.net"
      data-cmp-cdn="cdn.consentmanager.net"
      data-cmp-codesrc="16"
    />
  );
};

export default ConsentScript;