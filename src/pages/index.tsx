import { GetStaticProps } from 'next';
import config from '../lib/config';
import { countPosts, listPostContent, PostContent } from '../lib/posts';
import { listTags, TagContent } from '../lib/tags';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Intro from '../components/Intro';
import Head from 'next/head';
import Categories from '../components/Categories';

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Home({ posts, tags, pagination }: Props) {
  const morePosts = posts.slice(0, 4);

  return (
    <Layout>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>Regarding Justice</title>
      </Head>
      <div
        style={{
          backgroundImage: `url(/images/hands-up-full.jpg)`,
          backgroundSize: 'cover',
        }}
      >
        <Intro />
        <div
          style={{
            width: '100%',
            height: 'auto',
            margin: '0 auto',
            backgroundColor: '#0003',
            padding: '4rem',
          }}
        >
          <Container>
            {morePosts.length > 0 && <Categories posts={morePosts} />}
          </Container>
        </div>
      </div>
      <div
        style={{ backgroundColor: 'black', height: '70vh', width: '100%' }}
      ></div>
      <div
        style={{ backgroundColor: '#4c8878', height: '40vh', width: '100%' }}
      ></div>
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
