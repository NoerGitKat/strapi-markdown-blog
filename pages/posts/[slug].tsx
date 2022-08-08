import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../../graphql";
import apolloClient from "../../graphql/apollo";
import { IPost } from "../../interfaces";

export interface ISinglePostProps {
  post: { title: string; content: string };
}

export default function SinglePost({ post }: ISinglePostProps) {
  return (
    <main>
      <h1>{post.title}</h1>
      <MDXRemote {...post.content} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // TODO: Add typing
    const { data } = await apolloClient.query({ query: GET_ALL_SLUGS });
    const paths: { params: { slug: string } }[] = data.posts.data.map((post: IPost) => ({
      params: { slug: post.attributes.Slug },
    }));

    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    };
  } catch (error) {
    console.error(error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    // TODO: Add typing
    const { data } = await apolloClient.query({
      query: GET_INDIVIDUAL_POST,
      variables: { slug: params && params.slug },
    });

    const postAttributes = data.posts.data[0].attributes;

    const richContent = await serialize(postAttributes.Content);

    return {
      props: { post: { title: postAttributes.Title, content: richContent } },
    };
  } catch (error) {
    return {
      props: { post: {} },
    };
  }
};
