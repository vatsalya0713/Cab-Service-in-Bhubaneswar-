import { SITE_CONFIG } from "./constants";

const INDEXNOW_KEY = SITE_CONFIG.indexNowKey;
const INDEXNOW_KEY_LOCATION = `https://${SITE_CONFIG.domain}/${INDEXNOW_KEY}.txt`;

export async function submitToIndexNow(urls: string[]): Promise<{ success: boolean; message: string }> {
  try {
    const body = {
      host: SITE_CONFIG.domain,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: urls,
    };

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    if (res.ok || res.status === 202) {
      return { success: true, message: `Submitted ${urls.length} URLs to IndexNow successfully` };
    }
    return { success: false, message: `IndexNow returned status ${res.status}` };
  } catch (err) {
    return { success: false, message: `IndexNow submission failed: ${String(err)}` };
  }
}

export function getAllSiteUrls(): string[] {
  const base = `https://${SITE_CONFIG.domain}`;
  return [
    `${base}/`,
    `${base}/about`,
    `${base}/services`,
    `${base}/services/local-taxi`,
    `${base}/services/airport-taxi`,
    `${base}/services/outstation-taxi`,
    `${base}/services/corporate-rental`,
    `${base}/services/wedding-cars`,
    `${base}/fleet`,
    `${base}/destinations`,
    `${base}/destinations/bhubaneswar-to-puri`,
    `${base}/destinations/bhubaneswar-to-konark`,
    `${base}/destinations/bhubaneswar-to-chilika`,
    `${base}/destinations/bhubaneswar-to-cuttack`,
    `${base}/destinations/bhubaneswar-to-gopalpur`,
    `${base}/destinations/bhubaneswar-to-berhampur`,
    `${base}/packages`,
    `${base}/gallery`,
    `${base}/blog`,
    `${base}/contact`,
    `${base}/privacy-policy`,
    `${base}/terms`,
  ];
}
