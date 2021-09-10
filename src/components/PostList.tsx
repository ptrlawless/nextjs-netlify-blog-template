import React from 'react';
import { PostContent } from '../lib/posts';
import PostItem from './PostItem';
import TagLink from './TagLink';
import Pagination from './Pagination';
import { TagContent } from '../lib/tags';
import Intro from './Intro';

type Props = {
  posts: PostContent[];
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
        <section className="flex-col md:flex-row flex items-left md:items-center md:justify-between mt-16 mb-16 md:mb-12 ">
          <h1 className="text-7xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Regarding Justice
          </h1>
        </section>
        <div className={'posts'}>
          <ul className={'post-list'}>
            {posts.map((it, i) => (
              <li key={i}>
                <PostItem post={it} />
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
        <style jsx>{`
          .container {
            display: flex;
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
            padding: 4rem 1.5rem;
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
            display: none;
          }
          .categories li {
            margin-bottom: 0.75em;
          }

          @media (min-width: 769px) {
            .categories {
              display: block;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
