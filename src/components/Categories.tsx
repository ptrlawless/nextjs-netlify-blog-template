import PostPreview from './PostPreview';

export default function MoreStories({ posts }) {
  return (
    <section className="mt-16 px-4 md:px-0">
      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold text-gray-800 tracking-tighter leading-tight">
        More Stories
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 pb-32">
        {posts.map((post) => (
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
        ))}
      </div>
    </section>
  );
}
