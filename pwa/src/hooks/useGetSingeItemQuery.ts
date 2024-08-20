import {useQuery, UseQueryOptions} from "react-query";
import {getApiClient} from "helpers/Global";
import {AxiosError} from "axios";
import qs from "qs";
import {baseUrl} from "constans/common";

const path = `${process.env.REACT_APP_API_STRAPI_URL}/api/products/`;
const queryKey = `get-single-product`;


const getSingleItem = async (params: object = {}, id:number) => {
  const url = new URL(`${path}${id}`, baseUrl);
  url.search = qs.stringify(params, {encode: false});
  const {data} = await getApiClient().get(url.href);
  return data;
};
export default function useGetSingleItemQuery(
  options: UseQueryOptions<any, AxiosError> = {},
  queryParams: object = {},
  id:number
) {
  return useQuery<any, AxiosError>(
    [queryKey, queryParams],
    () => getSingleItem(queryParams, id),
    options
  );
}
