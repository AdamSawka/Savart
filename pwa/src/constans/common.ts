import qs from 'qs';

 function getStrapiURL() {
  return process.env.REACT_API_STRAPI_URL;
}
const baseUrl = getStrapiURL();

async function fetchData(url: string, cacheType: RequestCache) {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  const options: RequestInit = {
    method: 'GET',
    headers,
    cache: cacheType ? 'default' : 'default',
  };

  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function getPageData(locale: string, path: string | URL, customParams: (arg0: any, locale: any) => any) {
  const url = new URL(path, baseUrl);
  url.search = qs.stringify(customParams(path, locale), { encode: false });
  return await fetchData(url.href, 'default');
}

export const paramsMainPage = () => {
  return {
    populate: "*"
  };
};
