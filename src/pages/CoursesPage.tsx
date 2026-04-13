import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { courses } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(courses.map((c) => c.category)));
    return ["All", ...cats];
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            All Programs
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Explore Our <span className="text-gradient">Courses</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Find the right exam preparation program for your medical career
            pathway. Filter by destination country to find your perfect match.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="pb-24">
        <div className="container">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={
                  activeCategory === cat
                    ? "btn-gradient text-primary-foreground"
                    : ""
                }
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredCourses.length} course
            {filteredCourses.length !== 1 ? "s" : ""}
          </p>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.slug}
                  className="group relative flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-box"
                >
                  {/* Tag & Category */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {course.category}
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary">
                      {course.tag}
                    </span>
                  </div>

                  <p className="text-sm text-primary font-medium mb-1">
                    {course.subtitle}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-primary" />{" "}
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-primary" />{" "}
                      {course.students}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-primary" />{" "}
                      {course.rating}
                    </span>
                  </div>

                  <Link to={`/course/${course.slug}`}>
                    <Button className="btn-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No courses found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursesPage;
