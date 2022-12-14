import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
  query {
    posts {
      data {
        attributes {
          Slug
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query {
    posts {
      data {
        attributes {
          Title
          Description
          Content
          Slug
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slug: String!) {
    posts(filters: { Slug: { eq: $slug } }) {
      data {
        attributes {
          Title
          Content
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_INDIVIDUAL_POST, GET_ALL_SLUGS };
