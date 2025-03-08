import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export const SEO = ({
  title = "Your Name - Portfolio",
  description = "Full-stack developer portfolio showcasing web development projects and skills",
  keywords = "web developer, portfolio, react, typescript, frontend, backend",
  image = "/og-image.png"
}: SEOProps) => {
  const siteUrl = window.location.origin;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Theme color */}
      <meta name="theme-color" content="#00FFA3" />
    </Helmet>
  );
};
