import { GetStaticProps } from 'next';
import PostList from '../components/PostList';
import config from '../lib/config';
import { countPosts, listPostContent, PostContent } from '../lib/posts';
import { listTags, TagContent } from '../lib/tags';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Head from 'next/head';
import HeroPost from '../components/HeroPost';
import MoreStories from '../components/MoreStories';
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
  const morePosts = posts.slice(1);
  const title = 'Blog Posts';
  const subtitle = 'Thoughts and News on Criminal Justice Reform';
  const postType = 'blog';
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
