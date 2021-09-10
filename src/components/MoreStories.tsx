import PostPreview from './PostPreview';
import ArticlePreview from './ArticlePreview';
import KeywordPreview from './KeywordPreview';

export default function MoreStories({ posts, postType }) {
  function storyType() {
    switch (postType) {
      case 'blog':
        console.log('blog');
        return posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            authorImage={post.authorImage}
          />
        ));

      case 'article':
        console.log('article');
        return posts.map((post) => (
          <ArticlePreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            authorImage={post.authorImage}
          />
        ));

      case 'keyword':
        console.log('keyword');
        return posts.map((post) => (
          <KeywordPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            authorImage={post.authorImage}
          />
        ));
    }
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 pb-32">
        {storyType()}
      </div>
    </section>
  );
}
