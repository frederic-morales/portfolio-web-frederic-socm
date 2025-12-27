import "i18next";
import esTranslation from "./locals/es.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof es;
    };
    returnNull: false;
  }
}