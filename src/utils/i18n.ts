import type { TFunction } from "i18next";
import type en from "locales/en.json";

type TranslationKey = keyof typeof en;

type KeysWithValue<Value> = {
  [Key in TranslationKey]: (typeof en)[Key] extends Value ? Key : never;
}[TranslationKey];

export type StringTranslationKey = KeysWithValue<string>;

export type ListTranslationKey = KeysWithValue<readonly string[]>;

export const getTranslationList = (
  t: TFunction<"translation">,
  key: ListTranslationKey,
): string[] => t(key, { returnObjects: true }) as unknown as string[];
