import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "tmvzdzrj",
  dataset: "production",
  useCdn: true,
});
