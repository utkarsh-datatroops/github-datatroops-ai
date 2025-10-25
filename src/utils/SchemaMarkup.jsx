import Script from 'next/script';
import { navigationLinks } from '@/utils/NavigationLinks';
const SchemaMarkup = ({ currentItem }) => {
  const baseUrl = 'https://datatroops.ai/';
  const logoUrl = `${baseUrl}/images/dataTroops/logo.jpg`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DataTroops',
    url: baseUrl,
    logo: logoUrl,
    description:
      'Custom Software Development Company providing innovative solutions across the globe',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@datatroops.io',
    },
    sameAs: [
      'https://www.linkedin.com/company/datatroops',
      'https://twitter.com/datatroops_labs',
      'https://www.instagram.com/datatroops.io/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DataTroops',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const generateBreadcrumbSchema = (path) => {
    const items = path.split('/').filter(Boolean);
    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
      ],
    };

    let currentPath = '';
    items.forEach((item, index) => {
      currentPath += `/${item}`;
      const navItem = navigationLinks.find((link) => link.path === currentPath);
      if (navItem) {
        breadcrumbList.itemListElement.push({
          '@type': 'ListItem',
          position: index + 2,
          name: navItem.label || item.charAt(0).toUpperCase() + item.slice(1),
          item: `${baseUrl}${currentPath}`,
        });
      }
    });

    return breadcrumbList;
  };

  const getBlogPostSchema = (path) => {
    if (path.startsWith('/datatroops-blogs/')) {
      return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: currentItem.titleText,
        description: currentItem.description,
        image: currentItem.image,
        url: `${baseUrl}${path}`,
        datePublished: currentItem.publishedDate,
        dateModified: new Date().toISOString(),
        author: {
          '@type': 'Organization',
          name: 'DataTroops',
        },
        publisher: {
          '@type': 'Organization',
          name: 'DataTroops',
          logo: {
            '@type': 'ImageObject',
            url: logoUrl,
          },
        },
      };
    }
    return null;
  };

  const getServiceSchema = (path) => {
    if (path.startsWith('/services/')) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: currentItem.titleText,
        description: currentItem.description,
        provider: {
          '@type': 'Organization',
          name: 'DataTroops',
          url: baseUrl,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Global',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: currentItem.titleText,
              },
            },
          ],
        },
        serviceType: path.split('/').pop().replace(/-/g, ' '),
      };
    }
    return null;
  };

  const getTechnologySchema = (path) => {
    if (
      [
        '/technologies/',
        '/datatroops-blogs/'
      ].includes(path)
    ) {
      return {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: currentItem.titleText,
        description: currentItem.description,
        image: logoUrl,
        author: {
          '@type': 'Organization',
          name: 'DataTroops',
        },
        publisher: {
          '@type': 'Organization',
          name: 'DataTroops',
          logo: {
            '@type': 'ImageObject',
            url: logoUrl,
          },
        },
      };
    }
    return null;
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: currentItem.titleText,
    description: currentItem.description,
    url: `${baseUrl}${currentItem.path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'DataTroops',
      url: baseUrl,
    },
    breadcrumb: generateBreadcrumbSchema(currentItem.path),
  };

  const getFAQSchema = (faqs) => {
    if (!faqs || faqs.length === 0) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  };

  const faqSchema = getFAQSchema(currentItem.faqs);

  const blogSchema = getBlogPostSchema(currentItem.path);
  const serviceSchema = getServiceSchema(currentItem.path);
  const techSchema = getTechnologySchema(currentItem.path);
  const schemas = [];
  if (blogSchema) schemas.push(blogSchema);
  if (serviceSchema) schemas.push(serviceSchema);
  if (techSchema) schemas.push(techSchema);

  const additionalSchema = schemas;

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {additionalSchema && (
        <Script
          id="schema-additional"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(additionalSchema) }}
        />
      )}
      {faqSchema && (
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
};

export default SchemaMarkup;
