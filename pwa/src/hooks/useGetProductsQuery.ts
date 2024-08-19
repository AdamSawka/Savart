import {useQuery, UseQueryOptions} from "react-query";
import {getApiClient} from "helpers/Global";
import {AxiosError} from "axios";

const path = `${process.env.REACT_API_STRAPI_URL}/products`;
const queryKey = "get-products";


const getProducts = async () => {
  const {data} = await getApiClient().get(path, {});
  return data;
};

export default function useGetProductsQuery(
  options: UseQueryOptions<any, AxiosError> = {}
) {
  return useQuery<any, AxiosError>(
    [queryKey],
    () => getProducts(),
    options
  );
}
