"use server";
import { cookies } from "next/headers";
import { IClasses } from "@/common/types";

export const setCookies = async (obj: IClasses) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cookies().set(key, obj[key]);
    }
  }
};

export const getCookies = async () => cookies().getAll();
