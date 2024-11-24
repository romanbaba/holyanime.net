import axios from "axios";
import useSWR from "swr";

/**
 * 
 * @param {string} url 
 * @param {"get" | "post" | "head" | "put" | "delete" | "options" | "patch"} method 
 * @returns 
 */
export const SWR = (url, method = "get") => useSWR(url, (fetcher) => axios[method](fetcher).then((response) => response.data));