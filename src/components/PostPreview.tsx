import DateFormatter from './DateFormatter';
// import CoverImage from './CoverImage';
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
    <div>
      <div className="mb-6">
        {/* <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        /> */}
      </div>
      <h3 className="text-gray-800 text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="flex text-gray-500 text-lg mb-4">
        <DateFormatter dateString={date} />
        <p className="pl-4 ">{author}</p>
      </div>
      <p className="text-gray-500 text-lg leading-relaxed">{excerpt}</p>
      {/* <Avatar name={author} picture={authorImage} /> */}
    </div>
  );
}
