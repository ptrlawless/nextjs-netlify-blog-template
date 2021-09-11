import Avatar from './Avatar';
import DateFormatter from './DateFormatter';
import CoverImage from './CoverImage';
import Link from 'next/link';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  authorImage,
  postType,
}) {
  function storyType() {
    let slugInfo;
    switch (postType) {
      case 'blog':
        console.log('blog');
        return (slugInfo = {
          slugType: `/posts/${slug}`,
          hrefType: '/posts/[slug]',
        });

      case 'article':
        console.log('article');
        return (slugInfo = {
          slugType: `/articles/${slug}`,
          hrefType: '/articles/[slug]',
        });

      case 'keyword':
        console.log('keyword');
        return (slugInfo = {
          slugType: `/keywords/${slug}`,
          hrefType: '/keywords/[slug]',
        });
    }
  }
  const contentType = storyType();

  return (
    <section className="mt-8">
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={contentType.slugType} href={contentType.hrefType}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author} picture={authorImage} />
        </div>
      </div>
    </section>
  );
}
