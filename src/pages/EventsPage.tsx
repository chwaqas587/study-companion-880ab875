import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Search } from "lucide-react";
import { events } from "@/data/events";

const eventTypes = ["All", "Webinar", "Workshop", "Seminar", "Conference"];
const categories = ["All", ...Array.from(new Set(events.map((e) => e.category)))];

const EventsPage = () => {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchesSearch =
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.description.toLowerCase().includes(search.toLowerCase());
      const matchesType = activeType === "All" || e.type === activeType.toLowerCase();
      const matchesCat = activeCategory === "All" || e.category === activeCategory;
      return matchesSearch && matchesType && matchesCat;
    });
  }, [search, activeType, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              Events & Webinars
            </h1>
            <p className="text-muted-foreground text-lg">
              Join our live sessions, workshops, and conferences to accelerate your exam preparation.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((t) => (
                <Button
                  key={t}
                  size="sm"
                  variant={activeType === t ? "default" : "outline"}
                  className={activeType === t ? "btn-gradient text-primary-foreground" : ""}
                  onClick={() => setActiveType(t)}
                >
                  {t}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <Badge
                key={c}
                variant={activeCategory === c ? "default" : "outline"}
                className={`cursor-pointer ${activeCategory === c ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </Badge>
            ))}
          </div>

          {/* Events grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              No events found matching your filters.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event) => (
                <Link
                  key={event.slug}
                  to={`/event/${event.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <Calendar className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs capitalize">{event.type}</Badge>
                      <Badge className="bg-primary/10 text-primary text-xs border-0">{event.category}</Badge>
                      {event.isFeatured && (
                        <Badge className="bg-destructive/10 text-destructive text-xs border-0">Featured</Badge>
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
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

export default EventsPage;
