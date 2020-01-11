exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ReleasesYaml implements Node {
      title: String!
      date: Date
      release_type: String
      image: File
      tracklist: [Tracklist]
      links: [ReleaseLink]
    }
    type Tracklist {
      name: String!
    }
    type ReleaseLink {
      name: String!
      url: String!
    }

    type ShowsYaml implements Node @dontInfer {
      name: String!
      date: Date!
      location: String!
      info_url: String
      map_url: String
    }
  `;
  createTypes(typeDefs);
};
