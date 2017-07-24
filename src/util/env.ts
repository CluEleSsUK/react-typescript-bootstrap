export const isLocal = process.env.NODE_ENV === "local";
export const isTest = process.env.TEST === true;
export const isProd = process.env.NODE_ENV === "production" && !isTest;
