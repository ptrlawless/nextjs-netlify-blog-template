import { GetStaticProps } from 'next';
import config from '../lib/config';
import { countPosts, listPostContent, PostContent } from '../lib/posts';
import { listTags, TagContent } from '../lib/tags';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Head from 'next/head';
import Headline from '../components/Headline';

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Home({ posts, tags, pagination }: Props) {
  const heroPost = posts[0];
  const morePosts = posts;
  const title = 'About';
  const subtitle = "What's this all about?";
  return (
    <Layout>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>Regarding Justice</title>
      </Head>

      <Container>
        <div>
          <Headline title={title} subtitle={subtitle} />
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  // const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      // tags,
      pagination,
    },
  };
};

// export async function getStaticProps() {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ]);

//   return {
//     props: { allPosts },
//   };
// }
