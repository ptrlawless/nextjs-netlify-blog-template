import authors from '../../meta/authors.yml';

export type AuthorContent = {
  readonly slug: string;
  readonly name: string;
  readonly introduction: string;
};

const authorMap: { [key: string]: AuthorContent } = generateAuthorMap();

function generateAuthorMap(): { [key: string]: AuthorContent } {
  let result: { [key: string]: AuthorContent } = {};

  for (const author of authors.authors) {
    result[author.slug] = author;
    console.log(author.slug);
  }

  return result;
}
console.log(authorMap);
export function getAuthor(slug: string) {
  return authorMap[slug];
}
