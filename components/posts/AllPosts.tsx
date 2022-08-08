import Link from "next/link";
import { IPost } from "../../interfaces";

export interface IAllPostsProps {
  posts: Pick<IPost, "attributes">[];
}

export default function AllPosts({ posts }: IAllPostsProps) {
  return (
    <section>
      <h2>All Posts</h2>
      {posts && posts.length > 0 ? (
        <ul className="card-container">
          {posts.map((post) => {
            const { Title, Description, Slug, createdAt, updatedAt, publishedAt } = post.attributes;
            return (
              <li key={Slug}>
                <Link href={`/posts/${Slug}`}>
                  <a>
                    <article className="card">
                      <aside className="card__title">
                        <h3>{Title}</h3>
                        <h5>
                          <span>Posted on: </span>
                          {new Date(publishedAt).toLocaleDateString()}
                        </h5>
                      </aside>

                      <p>{Description}</p>
                    </article>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No posts available yet.</p>
      )}
    </section>
  );
}
