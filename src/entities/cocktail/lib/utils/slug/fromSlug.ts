export const fromSlug = (slug: string) => {
  if (!slug) return "";
  return slug.replace(/--/g, "/").replace(/_/g, " ");
};
