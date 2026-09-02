const ANALYTICS_ENDPOINT = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
const ANALYTICS_WEBSITE_ID = import.meta.env.VITE_ANALYTICS_WEBSITE_ID as string | undefined;

export function initAnalytics() {
  if (!ANALYTICS_ENDPOINT || !ANALYTICS_WEBSITE_ID) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = `${ANALYTICS_ENDPOINT}/umami`;
  script.dataset.websiteId = ANALYTICS_WEBSITE_ID;
  document.head.appendChild(script);
}
