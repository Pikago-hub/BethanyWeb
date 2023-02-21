import sanityClient from "@sanity/client";

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  //   projectId: "zp7mbokg",
  //   dataset: "production",
  //   useCdn: true,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
  projectId: "jrllbz94", //jrllbz94, hohy53bd
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
