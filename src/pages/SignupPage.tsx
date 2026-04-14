import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "" });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground">E</span>
            </div>
            <span className="font-heading font-bold text-lg text-foreground">EliteMed UK</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="btn-gradient text-primary-foreground font-semibold">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <h1 className="font-heading text-3xl font-bold text-foreground text-center">Create Account</h1>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-border bg-card hover:bg-secondary transition-colors">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium text-foreground">Sign up with Google</span>
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-background px-4 text-muted-foreground">or</span></div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name<span className="text-destructive">*</span></label>
              <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email<span className="text-destructive">*</span></label>
              <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Your email" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number<span className="text-destructive">*</span></label>
              <Input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Your phone number" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password<span className="text-destructive">*</span></label>
              <Input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Create a password" />
            </div>
            <Button className="w-full btn-gradient text-primary-foreground font-semibold py-6 hover:opacity-90 transition-opacity">
              Create Account
            </Button>
          </form>

          <p className="text-xs text-center text-muted-foreground">
            By signing up, you accept our{" "}
            <a href="#" className="text-primary hover:underline">Terms of use</a>,{" "}
            <a href="#" className="text-primary hover:underline">Privacy policy</a>
          </p>

          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
