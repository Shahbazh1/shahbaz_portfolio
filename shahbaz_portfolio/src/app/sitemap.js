export default function sitemap() {
  const baseUrl = "https://shahbaz-portfolio.vercel.app"; // Update with actual domain if different

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/Projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ContactMe`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    // Add additional routes here as needed
  ];
}
