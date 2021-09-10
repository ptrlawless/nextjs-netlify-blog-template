import { GetStaticProps } from 'next';
import PostList from '../components/PostList';
import config from '../lib/config';
import { countPosts, listPostContent, PostContent } from '../lib/posts';
import { listTags, TagContent } from '../lib/tags';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Intro from '../components/Intro';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import HeroPost from '../components/HeroPost';
import MoreStories from '../components/MoreStories';

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
  // const url = "/posts";
  // const title = "All posts";
  return (
    <Layout>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>Regarding Justice</title>
      </Head>

      <Container>
        <div className="h-100 px-10 py-20">
          <h1 className="mb-8 text-6xl md:text-7xl font-bold text-gray-800 tracking-tighter leading-tight">
            About
          </h1>
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
