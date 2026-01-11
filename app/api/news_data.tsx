//Take Apikey from .env file
const apikey = process.env.NEWSIO_APIKEY;

//This function sanitize external url to https, if url is not https then return null
export function sanitizeExternalUrl(url?: string) {
  if (!url) return null;

  try {
    const u = new URL(url);
    u.protocol = "https:";
    return u.toString();
  } catch {
    return null;
  }
}

//This function force www url to https://, so it can be used to redirect to external url
export function forceHttps(url?: string) {
  if (!url) return null;
  if (url.startsWith("https://")) return url;
  if (url.startsWith("www.")) return url.replace("www.", "https://");
  return url;
}

//This function get featured news from newsdata.io api
export async function getFeaturedNews() {
  try {
      const res = await fetch(`https://newsdata.io/api/1/latest?apikey=${apikey}&country=id,us,gb,my,jp&timezone=asia/jakarta&image=1&removeduplicate=1&size=10`, {
        next: { revalidate: 300 },
      });

      const data = await res.json();

      if (data.status !== "success") return [];

      return Array.isArray(data.results)
      ? data.results.map((item: any) => ({
        ...item,
        source: {
          ...item.source,
          url: sanitizeExternalUrl(item.source?.url),
        },
      }))
      : [];
  } catch {
    return [];
  }
}


