import { AuthorContent } from '../lib/authors';

type Props = {
  author: AuthorContent;
};
export default function Author({ author }: Props) {
  console.log(author);
  return (
    <>
      <span>{author}</span>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
          }
        `}
      </style>
    </>
  );
}
