import {AxiosError} from "axios";
import {useMutation, UseMutationOptions} from "react-query";
import {getApiClient} from "helpers/Global";

const path = `${process.env.REACT_APP_API_ENDPOINT}/products`;

const postProducts = async (payload: any) => {
  const {data} = await getApiClient().post(path, payload);
  return data;
};

export default function usePostProductsMutation(
  options: UseMutationOptions<any, AxiosError, any> = {}
) {
  return useMutation<Response, AxiosError, any>(postProducts, options);
}
