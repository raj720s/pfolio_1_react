import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "8lous01n",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.sanity_token,
});

const imgBuilder = imageUrlBuilder(client);
export const urlFor = (source) => imgBuilder.image(source);
