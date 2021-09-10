import React from 'react';
import { ArticleContent } from '../lib/articles';
import ArticleItem from './ArticleItem';
import TagLink from './TagLink';
import Pagination from './Pagination';
import { TagContent } from '../lib/tags';

type Props = {
  posts: ArticleContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <div>
      <div className={'container'}>
        <section className={'title'}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Articles and Features
          </h1>
        </section>
        <div className={'poststuff'}>
          <div className={'posts'}>
            <ul className={'post-list'}>
              {posts.map((it, i) => (
                <li key={i}>
                  <ArticleItem post={it} />
                </li>
              ))}
            </ul>
            <Pagination
              current={pagination.current}
              pages={pagination.pages}
              link={{
                href: (page) => (page === 1 ? '/posts' : '/posts/page/[page]'),
                as: (page) => (page === 1 ? null : '/posts/page/' + page),
              }}
            />
          </div>
          <ul className={'categories'}>
            {tags.map((it, i) => (
              <li key={i}>
                <TagLink tag={it} />
              </li>
            ))}
          </ul>
        </div>
        <style jsx>{`
          .container {
            margin: 0 auto;
            min-height: 100vh;
            width: 100%;
            padding: 4rem 1.5rem;
            height: auto;
          }
          .title {
            max-width: 30%;
          }
          .poststuff {
            width: 50%;
            display: flex;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style: none;
          }
          .posts {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
          }
          .posts li {
            margin-bottom: 1.5rem;
          }
          .post-list {
            flex: 1 0 auto;
          }
          .categories {
            display: block;
          }
          .categories li {
            margin-bottom: 0.75em;
          }

          @media (min-width: 769px) {
            .container {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .categories {
              display: block;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
