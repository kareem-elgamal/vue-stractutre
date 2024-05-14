// this is a helper function to merge tailwind classes and help you to use dynamic classes easily
/**
 * cls(class1, class2, {}, [])
 */

import { twMerge } from "tailwind-merge";

// handle css classes
type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | boolean
  | null
  | undefined;

export interface ClassDictionary {
  [id: string]: any;
}

export interface ClassArray extends Array<ClassValue> {}

export default function cls(...args: ClassValue[]): string {
  let className = "";
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string" || typeof args[i] === "number") {
      className += args[i] + " ";
    } else if (typeof args[i] === "object") {
      // {} or []
      // if array
      if (Array.isArray(args[i]) && args[i]) {
        // @ts-ignore
        for (let k = 0; k < args[i].length; k++) {
          // @ts-ignore
          className += args[i][k] + " ";
        }
        // if object
      } else {
        // @ts-ignore

        for (let obj in args[i]) {
          // @ts-ignore

          if (args[i][obj]) {
            className += obj + " ";
          }
        }
      }
    }
  }
  return twMerge(className);
}
