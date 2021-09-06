import Layout from '../components/Layout';
import Container from '../components/Container';
import Intro from '../components/Intro';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import HeroPost from '../components/HeroPost';
import MoreStories from '../components/MoreStories';

export default function Index() {
  return (
    <Layout>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}
