import { GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import ArticleList from '../../components/ArticleList';
import config from '../../lib/config';
import {
  countArticles,
  listArticleContent,
  ArticleContent,
} from '../../lib/articles';
import { listTags, TagContent } from '../../lib/tags';
import Head from 'next/head';

type Props = {
  posts: ArticleContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  const url = '/articles';
  const title = 'All posts';
  console.log(posts);
  return (
    <Layout>
      <div style={{ border: '1px solid black' }}>
        <BasicMeta url={url} title={title} />
        <OpenGraphMeta url={url} title={title} />
        {/* <TwitterCardMeta url={url} title={title} /> */}
        <ArticleList posts={posts} tags={tags} pagination={pagination} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listArticleContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countArticles() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
