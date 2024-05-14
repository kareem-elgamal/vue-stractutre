/**
 * this hook for using mutation requests like post, put, delete, etc
 * *** usage
 * useMutation({
    mutationFn: apiCall,
      invalidateQueries: "getTodos",
      isToast = true,
      toastMessage = "Good Job",
    })
 */

import { toast, ToastOptions } from "vue3-toastify";

import {
  useQueryClient,
  useMutation as useMutationReactQuery,
} from "@tanstack/vue-query";

import { AxiosError, AxiosResponse } from "axios";

import useGlobalStore from "@/store/useGlobalStore";

interface MutationConfig<Data, Error> {
  mutationFn: (variables: Data) => Promise<any>;
  invalidateQueries?: string;
  isToast?: boolean;
  toastMessage?: string;
}

type ErrorsArr = {
  msg: string;
  type: string;
  path: string;
};

/**
 * Custom hook for performing mutations with react-query.
 * @param mutationFn - The mutation function.
 * @param invalidateQueries - The key of the query to invalidate.
 * @param isToast - Flag indicating whether to show toast messages.
 * @param toastMessage - The default toast message.
 * @returns The useMutation hook from react-query.
 */

export interface MyError extends AxiosError {
  message: string;
  errors: ErrorsArr[];
  // Add other properties if needed
}

export default function useMutation<Data = any, Error = any>({
  mutationFn,
  invalidateQueries,
  isToast = true,
  toastMessage = "Good Job",
}: MutationConfig<Data, Error>) {
  const { theme } = useGlobalStore();

  const themeIsLight = theme === "light" ? "light" : "dark";

  const toastOptions: ToastOptions = {
    position: toast.POSITION.BOTTOM_LEFT,
    theme: themeIsLight,
  };

  // Access the client
  const queryClient = useQueryClient();

  return useMutationReactQuery({
    mutationFn: mutationFn,
    onSuccess: (response: AxiosResponse) => {
      if (invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: [invalidateQueries] });
      }
      if (isToast) {
        toast.success(response.data.message || toastMessage, toastOptions);
      }
    },
    onError: (error: AxiosError<MyError>) => {
      if (isToast) {
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message, toastOptions);
        }
        if (error.response?.data?.errors) {
          error.response.data.errors.forEach((err) => {
            toast.error(err?.msg, toastOptions);
          });
        }
      }
    },
  });
}
