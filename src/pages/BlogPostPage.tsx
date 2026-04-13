import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogs } from "@/data/blogs";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container pt-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogs.filter((b) => b.slug !== post.slug && (b.category === post.category || b.tags.some((t) => post.tags.includes(t)))).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-primary/10 text-primary border-0">{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">#{tag}</Badge>
              ))}
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                  {post.author.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <article className="space-y-6">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-heading text-xl font-bold text-foreground mt-8 mb-3">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              // Split by ## headings within a block
              const parts = block.split(/(?=## )/);
              return parts.map((part, j) => {
                if (part.startsWith("## ")) {
                  const [heading, ...rest] = part.split("\n\n");
                  return (
                    <div key={`${i}-${j}`}>
                      <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">
                        {heading.replace("## ", "")}
                      </h2>
                      {rest.map((p, k) => (
                        <p key={k} className="text-muted-foreground leading-relaxed">{p}</p>
                      ))}
                    </div>
                  );
                }
                return (
                  <p key={`${i}-${j}`} className="text-muted-foreground leading-relaxed">{part}</p>
                );
              });
            })}
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-border">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                  >
                    <Badge className="bg-primary/10 text-primary text-xs border-0 mb-2">{rp.category}</Badge>
                    <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{rp.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
