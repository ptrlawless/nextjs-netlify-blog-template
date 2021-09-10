import Avatar from './Avatar';
import DateFormatter from './DateFormatter';
import CoverImage from './CoverImage';
import Link from 'next/link';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  authorImage,
}) {
  return (
    <div className="bg-gray-300 p-8">
      {/* <div className="mb-5 ">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div> */}
      <h3 className="text-gray-800 text-3xl mb-3 leading-snug">
        {title}
        {/* <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link> */}
      </h3>
      <div className="text-gray-500 text-lg mb-4">
        {/* <DateFormatter dateString={date} /> */}
      </div>
      <p className="text-gray-500 text-lg leading-relaxed mb-4">{excerpt}</p>
      {/* <Avatar name={author} picture={authorImage} /> */}
    </div>
  );
}
