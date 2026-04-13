import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Clock, User } from "lucide-react";
import { blogs } from "@/data/blogs";

const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];
const allTags = Array.from(new Set(blogs.flatMap((b) => b.tags)));

const BlogsPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchesSearch =
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCat = activeCategory === "All" || b.category === activeCategory;
      const matchesTag = !activeTag || b.tags.includes(activeTag);
      return matchesSearch && matchesCat && matchesTag;
    });
  }, [search, activeCategory, activeTag]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              Blog & Resources
            </h1>
            <p className="text-muted-foreground text-lg">
              Expert articles, study guides, and career advice for international medical graduates.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Button
                  key={c}
                  size="sm"
                  variant={activeCategory === c ? "default" : "outline"}
                  className={activeCategory === c ? "btn-gradient text-primary-foreground" : ""}
                  onClick={() => setActiveCategory(c)}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={activeTag === tag ? "default" : "outline"}
                className={`cursor-pointer ${activeTag === tag ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Blog grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              No articles found matching your filters.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <span className="font-heading text-3xl font-bold text-muted-foreground/30">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary/10 text-primary text-xs border-0">{post.category}</Badge>
                      {post.isFeatured && (
                        <Badge className="bg-destructive/10 text-destructive text-xs border-0">Featured</Badge>
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" />
                        {post.author.name}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
