
function getStrapiURL() {
  return process.env.REACT_APP_API_STRAPI_URL;
}

export const baseUrl = getStrapiURL();

export const paramsMainPage = {
  populate: {
    store: {
      populate: {
        products: {
          populate: "*"
        }
      }
    },
    carousel: {
      populate: {
        products: {
          populate: "*"
        }
      }
    },
  }

};
