export const fromSlug = (slug) => {
  if (!slug) return "";
  return slug.replace(/--/g, "/").replace(/_/g, " ");
};
