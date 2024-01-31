import { createI18n } from "vue-i18n";

import ru from "@/language/ru.json";
import kz from "@/language/kz.json";

const locale = localStorage.myLocale || "ru";

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: "kz",
  fallbackWarn: false,
  missingWarn: false,
  messages: {
    ru,
    kz
  }
});

export default i18n;
