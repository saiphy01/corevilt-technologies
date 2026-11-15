import { COMPANY_INFO } from "@/lib/constants";

export function SeoSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    alternateName: "Corevilt",
    url: "https://corevilt.com",
    logo: "https://corevilt.com/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.phoneRaw,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.phoneRaw,
        contactType: "technical support",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: COMPANY_INFO.delhiOffice.address,
        addressLocality: COMPANY_INFO.delhiOffice.city,
        addressRegion: COMPANY_INFO.delhiOffice.state,
        postalCode: COMPANY_INFO.delhiOffice.pincode,
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: COMPANY_INFO.bareillyOffice.address,
        addressLocality: COMPANY_INFO.bareillyOffice.city,
        addressRegion: COMPANY_INFO.bareillyOffice.state,
        postalCode: COMPANY_INFO.bareillyOffice.pincode,
        addressCountry: "IN",
      },
    ],
  };

  const localBusinessDelhi = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${COMPANY_INFO.name} - Delhi Corporate Headquarters`,
    image: "https://corevilt.com/logo.png",
    telephone: COMPANY_INFO.phoneRaw,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.delhiOffice.address,
      addressLocality: COMPANY_INFO.delhiOffice.city,
      addressRegion: COMPANY_INFO.delhiOffice.state,
      postalCode: COMPANY_INFO.delhiOffice.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.5524",
      longitude: "77.2965",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessDelhi) }}
      />
    </>
  );
}
