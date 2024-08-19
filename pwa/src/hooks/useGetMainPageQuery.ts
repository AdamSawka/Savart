import {useQuery, UseQueryOptions} from "react-query";
import {getApiClient} from "helpers/Global";
import {AxiosError} from "axios";

const path = `${process.env.REACT_APP_API_STRAPI_URL}/main`;
const queryKey = "get-main-page";


const getMainPage = async (params:object={}) => {
  const {data} = await getApiClient().get(path, {params});
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
