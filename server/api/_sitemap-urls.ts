import { serverQueryContent } from "#content/server";

export default cachedEventHandler(
  async (event) => {
    // Fetch all documents
    const docs = await serverQueryContent(event).find();
    const urls = [];

    ["/", "/about", "/outline", "/pricing", "/start"].forEach((url) => {
      urls.push({
        loc: url,
        changefreq: "daily",
      });
    });

    for (const doc of docs) {
      urls.push({
        loc: doc._path,
        changefreq: "daily",
      });
    }
    return urls;
  },
  {
    name: "sitemap-dynamic-urls",
    maxAge: 60 * 10, // cache URLs for 10 minutes
  }
);
