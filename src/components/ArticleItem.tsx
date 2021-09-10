import { ArticleContent } from '../../src/lib/articles';
import Date from '../../src/components/Date';
import Link from 'next/link';
import { parseISO } from 'date-fns';

type Props = {
  post: ArticleContent;
};
export default function ArticleItem({ post }: Props) {
  return (
    <Link href={'/articles/' + post.slug}>
      <a>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
