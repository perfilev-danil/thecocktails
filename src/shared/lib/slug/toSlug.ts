export const toSlug = (str) =>
  str.toLowerCase().replace(/\//g, "--").replace(/\s+/g, "_");
