import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { courses, specialities, exams, countries } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, Search, ChevronDown, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const CoursesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialities, setSelectedSpecialities] = useState<string[]>([]);
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [specOpen, setSpecOpen] = useState(true);
  const [examOpen, setExamOpen] = useState(true);
  const [countryOpen, setCountryOpen] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Read URL params on mount
  useEffect(() => {
    const spec = searchParams.get("speciality");
    const exam = searchParams.get("exam");
    const country = searchParams.get("country");
    if (spec) setSelectedSpecialities([spec]);
    if (exam) setSelectedExams([exam]);
    if (country) setSelectedCountries([country]);
  }, []);

  const toggleFilter = (
    value: string,
    selected: string[],
    setter: (v: string[]) => void
  ) => {
    if (value === "All Courses") {
      setter([]);
      return;
    }
    setter(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSpec =
        selectedSpecialities.length === 0 ||
        selectedSpecialities.includes(course.speciality);
      const matchesExam =
        selectedExams.length === 0 || selectedExams.includes(course.exam);
      const matchesCountry =
        selectedCountries.length === 0 ||
        selectedCountries.includes(course.country);
      const matchesSearch =
        !searchQuery ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSpec && matchesExam && matchesCountry && matchesSearch;
    });
  }, [selectedSpecialities, selectedExams, selectedCountries, searchQuery]);

  const activeFilterCount =
    selectedSpecialities.length + selectedExams.length + selectedCountries.length;

  const clearAllFilters = () => {
    setSelectedSpecialities([]);
    setSelectedExams([]);
    setSelectedCountries([]);
    setSearchQuery("");
    setSearchParams({});
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg font-bold text-foreground">Apply Filters</h3>
        <span className="text-sm font-medium text-primary">({filteredCourses.length} courses)</span>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search course name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-secondary border-border"
        />
      </div>

      {activeFilterCount > 0 && (
        <Button variant="outline" size="sm" onClick={clearAllFilters} className="w-full">
          Clear All Filters ({activeFilterCount})
        </Button>
      )}

      <p className="text-sm font-semibold text-primary">Filter by</p>

      {/* Specialisation */}
      <div className="border-t border-border pt-4">
        <button
          onClick={() => setSpecOpen(!specOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="font-heading font-bold text-foreground">Specialisation</span>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${specOpen ? "rotate-180" : ""}`} />
        </button>
        {specOpen && (
          <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">
            {specialities.map((spec) => (
              <label key={spec} className="flex items-center gap-3 cursor-pointer group">
                <Checkbox
                  checked={spec === "All Courses" ? selectedSpecialities.length === 0 : selectedSpecialities.includes(spec)}
                  onCheckedChange={() => toggleFilter(spec, selectedSpecialities, setSelectedSpecialities)}
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{spec}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Exam */}
      <div className="border-t border-border pt-4">
        <button
          onClick={() => setExamOpen(!examOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="font-heading font-bold text-foreground">Exam</span>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${examOpen ? "rotate-180" : ""}`} />
        </button>
        {examOpen && (
          <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">
            {exams.map((exam) => (
              <label key={exam} className="flex items-center gap-3 cursor-pointer group">
                <Checkbox
                  checked={selectedExams.includes(exam)}
                  onCheckedChange={() => toggleFilter(exam, selectedExams, setSelectedExams)}
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{exam}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Country */}
      <div className="border-t border-border pt-4">
        <button
          onClick={() => setCountryOpen(!countryOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="font-heading font-bold text-foreground">Country</span>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${countryOpen ? "rotate-180" : ""}`} />
        </button>
        {countryOpen && (
          <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">
            {countries.map((country) => (
              <label key={country} className="flex items-center gap-3 cursor-pointer group">
                <Checkbox
                  checked={selectedCountries.includes(country)}
                  onCheckedChange={() => toggleFilter(country, selectedCountries, setSelectedCountries)}
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{country}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">All Programs</Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Explore Our <span className="text-gradient">Courses</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Find the right exam preparation program for your medical career pathway.
          </p>
        </div>
      </section>

      {/* Mobile filter toggle */}
      <div className="container lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="w-full"
        >
          {mobileFiltersOpen ? "Hide Filters" : `Show Filters${activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}`}
        </Button>
      </div>

      {/* Content */}
      <section className="pb-24">
        <div className="container">
          <div className="flex gap-8">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 rounded-xl bg-card border border-border p-6">
                <FilterSidebar />
              </div>
            </aside>

            {/* Mobile Filters */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
                <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-card border-l border-border p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-bold text-foreground">Filters</h3>
                    <button onClick={() => setMobileFiltersOpen(false)}>
                      <X className="h-5 w-5 text-muted-foreground" />
                    </button>
                  </div>
                  <FilterSidebar />
                </div>
              </div>
            )}

            {/* Course Grid */}
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}
              </p>

              {filteredCourses.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <div
                      key={course.slug}
                      className="group relative flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-box"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {course.speciality}
                        </span>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary">
                          {course.tag}
                        </span>
                      </div>

                      <p className="text-sm text-primary font-medium mb-1">{course.subtitle}</p>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3">{course.title}</h3>
                      <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">{course.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-primary" /> {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="h-4 w-4 text-primary" /> {course.students}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Star className="h-4 w-4 text-primary" /> {course.rating}
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
                  <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
                  <Button variant="outline" className="mt-4" onClick={clearAllFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursesPage;
