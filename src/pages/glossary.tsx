import { GetStaticProps } from 'next';
import config from '../lib/config';
import {
  countKeywords,
  listKeywordContent,
  keywordContent,
} from '../lib/keywords';
import { listTags, TagContent } from '../lib/tags';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Head from 'next/head';
import MoreStories from '../components/MoreStories';
import Headline from '../components/Headline';

type Props = {
  posts: keywordContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Glossary({ posts, tags, pagination }: Props) {
  // const heroPost = posts[0];
  const morePosts = posts;
  const title = 'Glossary';
  const subtitle = 'Key Concepts in Criminal Justice Reform';
  const postType = 'keyword';

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
        {morePosts.length > 0 && (
          <MoreStories posts={morePosts} postType={postType} />
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listKeywordContent(1, config.posts_per_page);
  // const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countKeywords() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      // tags,
      pagination,
    },
  };
};
