export const toSlug = (str: string) =>
  str.toLowerCase().replace(/\//g, "--").replace(/\s+/g, "_");
