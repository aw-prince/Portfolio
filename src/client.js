import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const clinet = SanityClient({
  projectId: "your-project-id",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
  token: "your-token",
});
