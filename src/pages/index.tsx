import { GetStaticProps } from 'next';
import config from '../lib/config';
import { countPosts, listPostContent, PostContent } from '../lib/posts';
import { listTags, TagContent } from '../lib/tags';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Hero from '../components/Hero';
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
          width: '100vw',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'end',
          paddingRight: '4rem',
        }}
      >
        <h1 className="text-white text-right text-7xl md:text-right md:text-8xl lg:text-8xl font-bold tracking-tighter leading-tight w-full">
          Regarding Justice
        </h1>
        <h4
          className="text-right text-2xl md:text-right font-bold mt-6"
          style={{ color: '#fff', mixBlendMode: 'hard-light' }}
        >
          Information and Opinions on Criminal Justice Reform
        </h4>
      </div>
      <div style={{ backgroundColor: 'black', height: 'auto', width: '100%' }}>
        {' '}
        <div
          style={{
            width: '100%',
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
