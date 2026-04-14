import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Globe, Users, Monitor } from "lucide-react";

const facultyMembers = [
  { name: "Dr. Sarah Mitchell", role: "AMC Examiner & Senior Physician", speciality: "Internal Medicine", initials: "SM" },
  { name: "Dr. Hannah Wilson", role: "GMC-Registered, NHS Consultant", speciality: "Emergency Medicine", initials: "HW" },
  { name: "Dr. Ali Reza", role: "DHA-Licensed Physician", speciality: "General Practice", initials: "AR" },
  { name: "Dr. Kate Thompson", role: "MCNZ-Registered, Wellington Hospital", speciality: "Clinical Medicine", initials: "KT" },
  { name: "Dr. Robert Chang", role: "USMLE Trainer", speciality: "Basic Sciences", initials: "RC" },
  { name: "Dr. Rachel Adams", role: "AHPRA-Registered Pharmacist", speciality: "Pharmacy", initials: "RA" },
  { name: "Nurse Sarah Johnson", role: "NCLEX Trainer, California", speciality: "Nursing", initials: "SJ" },
  { name: "Dr. Mark Stevens", role: "ADC Examiner, Melbourne", speciality: "Dentistry", initials: "MS" },
  { name: "Dr. Emma Clarke", role: "HCPC-Registered Physiotherapist", speciality: "Physiotherapy", initials: "EC" },
  { name: "Dr. Raj Patel", role: "Clinical Medicine Specialist", speciality: "Cardiology", initials: "RP" },
  { name: "Dr. Vikram Singh", role: "PLAB Examiner & Trainer", speciality: "Surgery", initials: "VS" },
  { name: "Sarah Williams", role: "OET Trainer", speciality: "English Proficiency", initials: "SW" },
];

const FacultyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  Our experienced mentors have guided countless students
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our faculty includes established doctors, nurses, physiotherapists, dentists, pharmacists,
                  and seasoned educationists, currently practising in different parts of the world.
                  Through our platform, they aim to impart their hard-earned knowledge to help aspirants
                  clear global exams such as KAPS, AIMS, ADC, AMC, APC, NCLEX, USMLE, PLAB, IELTS, PTE, OET and others.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, value: "93%", label: "Success" },
                  { icon: Globe, value: "60+", label: "Countries" },
                  { icon: Users, value: "8000+", label: "Students" },
                  { icon: Monitor, value: "30+", label: "Courses" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-xl btn-gradient text-center">
                    <stat.icon className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
                    <p className="font-heading text-2xl font-bold text-primary-foreground">{stat.value}</p>
                    <p className="text-sm text-primary-foreground/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Meet Our <span className="text-gradient">Faculty</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facultyMembers.map((member) => (
              <div key={member.name} className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/40 transition-all">
                <div className="w-20 h-20 rounded-full btn-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl font-bold text-primary-foreground">{member.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mt-1">{member.speciality}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FacultyPage;
