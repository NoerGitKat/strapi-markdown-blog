import type { GetStaticProps, NextPage } from "next";
import { AllPosts } from "../components/posts";
import { GET_ALL_POSTS } from "../graphql";
import apolloClient from "../graphql/apollo";
import { IPost } from "../interfaces";

const Home: NextPage<{ posts: Pick<IPost, "attributes">[] }> = ({ posts = [] }) => {
  return (
    <main>
      <section>
        <h1>Welcome to the StrapiBlog!</h1>
        <p>Here you will find the most amazing posts ever.</p>
      </section>
      <AllPosts posts={posts} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    // TODO: Add typing
    const { data } = await apolloClient.query({ query: GET_ALL_POSTS });

    return {
      props: { posts: data.posts.data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
};

export default Home;
