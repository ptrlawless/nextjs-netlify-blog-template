import { GetStaticProps } from 'next';
import config from '../lib/config';
import {
  countArticles,
  listArticleContent,
  ArticleContent,
} from '../lib/articles';
import { listTags, TagContent } from '../lib/tags';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Headline from '../components/Headline';
import Head from 'next/head';
import MoreStories from '../components/MoreStories';
import HeroPost from '../components/HeroPost';

type Props = {
  posts: ArticleContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Home({ posts, tags, pagination }: Props) {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  const title = 'Articles';
  const subtitle = 'Articles and Features on Criminal Justice Reform';
  const postType = 'article';
  return (
    <Layout>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>Regarding Justice</title>
      </Head>
      <Container>
        <Headline title={title} subtitle={subtitle} />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            authorImage={heroPost.authorImage}
          />
        )}
        {morePosts.length > 0 && (
          <MoreStories posts={morePosts} postType={postType} />
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listArticleContent(1, config.posts_per_page);
  // const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countArticles() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      // tags,
      pagination,
    },
  };
};
