import type { TFunction } from "i18next";
import type en from "locales/en.json";

type ListTranslationKey = {
  [Key in keyof typeof en]: (typeof en)[Key] extends readonly string[]
    ? Key
    : never;
}[keyof typeof en];

export const getTranslationList = (
  t: TFunction<"translation">,
  key: ListTranslationKey,
): string[] => t(key, { returnObjects: true }) as unknown as string[];
