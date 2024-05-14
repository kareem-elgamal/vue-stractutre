/**
 * this hook for using fetch requests get
 * *** usage
 * useQuery({
 *   queryKey: get-todos,
 *   queryFn: apiRequest,
 *   options,
   })
*/

import {
  useQuery as useVueQuery,
  QueryKey,
  QueryFunction,
  QueryOptions,
} from "@tanstack/vue-query";

import { toast, ToastOptions } from "vue3-toastify";

import { watch } from "vue";

import useGlobalStore from "@/store/useGlobalStore";

type UseQueryOptions = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
  options?: QueryOptions;
};

export default function useQuery({
  queryKey,
  queryFn,
  options,
}: UseQueryOptions) {
  const { theme } = useGlobalStore();

  const themeIsLight = theme === "light" ? "light" : "dark";

  const toastOptions: ToastOptions = {
    position: toast.POSITION.BOTTOM_LEFT,
    theme: themeIsLight,
  };

  const query = useVueQuery({
    queryKey,
    queryFn,
    ...options,
  });

  watch(query.error, () => {
    if (query.error.value?.message) {
      console.log("useQuery custom hook query error", query.error.value);
      if (query.error.value?.message) {
        toast.error(query.error.value?.message, toastOptions);
      }
    }
  });

  return query;
}
