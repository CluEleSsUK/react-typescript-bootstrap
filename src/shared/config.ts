import {isProd} from "../util/env";

export const WEB_PORT = process.env.PORT || 8000;
export const WDS_PORT = 7000;
export const STATIC_PATH = "/static";

export const APP_NAME = "Admin dashboard";

export const APP_CONTAINER_CLASS = "js-app";
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`;
export const APP_BUNDLE_NAME = "bundle.js";

export const WEVAT_GATEWAY = isProd ? "https://wevat-gateway.herokuapp.com" : "https://wevat-test-gateway.herokuapp.com";