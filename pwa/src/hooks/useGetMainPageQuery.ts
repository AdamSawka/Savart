import {useQuery, UseQueryOptions} from "react-query";
import {getApiClient} from "helpers/Global";
import {AxiosError} from "axios";
import qs from "qs";
import {baseUrl} from "constans/common";

const path = `${process.env.REACT_APP_API_STRAPI_URL}/api/main`;
const queryKey = "get-main-page";


const getMainPage = async (params: object = {}) => {
  const url = new URL(path, baseUrl);
  url.search = qs.stringify(params, {encode: false});
  const {data} = await getApiClient().get(url.href);
  return data;
};
export default function useGetMainPageQuery(
  options: UseQueryOptions<any, AxiosError> = {},
  queryParams: object = {}
) {
  return useQuery<any, AxiosError>(
    [queryKey, queryParams],
    () => getMainPage(queryParams),
    options
  );
}
