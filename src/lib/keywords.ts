import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import yaml from 'js-yaml';

const keywordsDirectory = path.join(process.cwd(), 'content/keywords');

export type keywordContent = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
  readonly tags?: string[];
  readonly fullPath: string;
  readonly coverImage: string;
  readonly author: string;
  readonly excerpt: string;
  readonly authorImage: string;
};

let keywordCache: keywordContent[];

export function fetchKeywordContent(): keywordContent[] {
  if (keywordCache) {
    return keywordCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(keywordsDirectory);
  const allKeywordsData = fileNames
    .filter((it) => it.endsWith('.mdx'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(keywordsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        date: string;
        title: string;
        tags: string[];
        slug: string;
        fullPath: string;
        coverImage: string;
        author: string;
        excerpt: string;
        authorImage: string;
      };
      matterData.fullPath = fullPath;

      const slug = fileName.replace(/\.mdx$/, '');

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          'slug field not match with the path of its content source'
        );
      }

      return matterData;
    });
  // Sort posts by date
  keywordCache = allKeywordsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return keywordCache;
}

export function countKeywords(tag?: string): number {
  return fetchKeywordContent().filter(
    (it) => !tag || (it.tags && it.tags.includes(tag))
  ).length;
}

export function listKeywordContent(
  page: number,
  limit: number,
  tag?: string
): keywordContent[] {
  return fetchKeywordContent()
    .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
    .slice((page - 1) * limit, page * limit);
}
