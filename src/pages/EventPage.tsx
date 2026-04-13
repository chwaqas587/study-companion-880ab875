import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { events } from "@/data/events";
import LeadForm from "@/components/LeadForm";

const EventPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container pt-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Event Not Found</h1>
          <Link to="/events">
            <Button>Back to Events</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Breadcrumb */}
          <Link to="/events" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Events
          </Link>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="outline" className="capitalize">{event.type}</Badge>
                  <Badge className="bg-primary/10 text-primary border-0">{event.category}</Badge>
                  {event.isFeatured && (
                    <Badge className="bg-destructive/10 text-destructive border-0">Featured</Badge>
                  )}
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {event.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {event.fullDescription}
                </p>
              </div>

              {/* Agenda */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Event Agenda</h2>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  {event.agenda.map((item, i) => (
                    <div key={i} className={`flex gap-4 p-4 ${i !== event.agenda.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-sm font-mono text-primary font-medium min-w-[80px]">{item.time}</span>
                      <span className="text-sm text-foreground">{item.topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Speakers</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {event.speakers.map((speaker) => (
                    <div key={speaker.name} className="flex items-center gap-4 bg-card border border-border rounded-xl p-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {speaker.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{speaker.name}</p>
                        <p className="text-sm text-muted-foreground">{speaker.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar — Registration Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
