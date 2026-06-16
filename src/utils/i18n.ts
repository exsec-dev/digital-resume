import type { TFunction } from "i18next";
import type en from "locales/en.json";

type TranslationKey = keyof typeof en;

export const getTranslationList = (
  t: TFunction<"translation">,
  key: TranslationKey,
): string[] => t(key, { returnObjects: true }) as unknown as string[];
