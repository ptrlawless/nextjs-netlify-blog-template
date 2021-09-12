import DateFormatter from './DateFormatter';
import Link from 'next/link';

export default function PostPreview({ title, date, excerpt, author, slug }) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff4a',
        padding: '1rem',
        borderRadius: '4px',
      }}
    >
      <h3 className="text-gray-100 text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="flex text-gray-100 text-lg mb-4">
        <DateFormatter dateString={date} />
        <p className="pl-4 ">{author}</p>
      </div>
      <p className="text-gray-100 text-lg leading-relaxed">{excerpt}</p>
    </div>
  );
}
