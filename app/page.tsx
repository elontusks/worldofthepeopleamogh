"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    if (email && email.includes("@")) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Email submitted (UI only):", email);
      setShowSuccess(true);
      setIsSubmitting(false);
    } else {
      setShowError(true);
      setIsSubmitting(false);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-50">
      {/* Map-inspired dot pattern background */}
      <div className="fixed inset-0 -z-10 map-dots opacity-[0.08]" />

      {/* Live pulse indicator - top right */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/95 backdrop-blur-sm rounded-full border border-white/10 shadow-2xl">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse-slow shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
        <span className="text-xs font-mono text-white uppercase tracking-widest">Live</span>
      </div>

      {/* Main Container */}
      <main className="container relative z-10 mx-auto max-w-7xl px-6 py-6 sm:py-16 sm:px-8 lg:px-12">
        {/* Hero Section - Split Layout */}
        <header className="min-h-[90vh] flex items-center">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 w-full items-start">
            {/* Left Side - Branding & Headlines */}
            <div className="-mt-0 sm:-mt-16">
              {/* Logo */}
              <div className="mb-8">
                <img
                  src="/worldofthepeoplelong.PNG"
                  alt="worldofthepeople"
                  className="h-8 w-auto sm:h-10 lg:h-12 max-w-full object-contain"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Main Headline - Bold */}
              <h2 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-black mb-8">
                See what's
                <br />
                <span className="italic">really</span> happening
                <br />
                in your city
              </h2>

              {/* Subheadline */}
              <div className="border-l-4 border-blue-600 pl-6 max-w-md">
                <p className="font-mono text-sm uppercase tracking-wider text-neutral-600 mb-3">
                  The Truth Layer
                </p>
                <p className="text-lg leading-relaxed text-neutral-700">
                  Real people.<br />
                  Real experiences.<br />
                  Real time.
                </p>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="lg:pl-8">
              <Card className="border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]">
                <CardContent className="p-8 sm:p-10">
                  {!showSuccess ? (
                    <>
                      <div className="mb-8">
                        <div className="mb-4 inline-block border-2 border-blue-600 px-3 py-1">
                          <span className="font-mono text-xs uppercase tracking-widest text-blue-600">
                            Early Access
                          </span>
                        </div>
                        <h3 className="font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
                          Be among the first to know
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                          Join the waitlist and discover what people are experiencing where you are.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="h-14 border-2 border-black bg-neutral-50 px-6 text-lg font-mono focus:border-black focus:ring-4 focus:ring-black/10 transition-all"
                            aria-label="Email address"
                          />
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-14 w-full bg-black text-lg font-mono uppercase tracking-wider text-white hover:bg-neutral-800 disabled:bg-neutral-400 transition-colors shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] hover:shadow-[6px_6px_0px_0px_rgba(37,99,235,1)]"
                          >
                            {isSubmitting ? "Joining..." : "Join the Waitlist →"}
                          </Button>
                        </div>

                        <p className="text-center text-sm text-neutral-500">
                          No spam. Unsubscribe anytime.
                        </p>
                      </form>

                      {showError && (
                        <div className="mt-6 border-2 border-blue-600 bg-red-50 p-4 animate-fade-in">
                          <p className="font-mono text-sm text-red-700">
                            Error: Please enter a valid email address
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="py-12 text-center animate-fade-in">
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center border-4 border-black bg-white">
                        <span className="text-4xl">✓</span>
                      </div>
                      <h4 className="mb-3 font-display text-3xl font-bold text-black">
                        You're on the list
                      </h4>
                      <p className="text-lg text-neutral-700">
                        Check your email for confirmation.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </header>

        {/* Pull Quote - Editorial Style */}
        <section className="mx-auto mb-32 max-w-4xl mt-32">
          <div className="border-y-2 border-black py-12">
            <blockquote className="text-center">
              <p className="font-display text-2xl font-medium italic leading-relaxed text-neutral-900 sm:text-3xl lg:text-4xl">
                "Most problems in cities are obvious to the people living with them,
                <br className="hidden sm:block" />
                but <span className="border-b-4 border-blue-600">invisible in aggregate</span>."
              </p>
            </blockquote>
          </div>
        </section>

        {/* Feature Grid - Documentary Style */}
        <section className="mb-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              number="01"
              title="See the truth"
              description="What people are experiencing, where, and when. No filters. No spin. Just reality."
            />
            <FeatureCard
              number="02"
              title="Local first"
              description="Issues in your city, state, country, world. Start where you are, zoom out to anywhere."
            />
            <FeatureCard
              number="03"
              title="Real-time"
              description="See what's happening before institutions or media catch up. Live truth from real people."
            />
          </div>
        </section>


        {/* Footer */}
        <footer className="border-t-2 border-black pt-12 pb-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            {/* Social Media Icons - Left Side */}
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@worldofthepeople"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/worldofthepeople"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-[#E4405F] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@worldofthepeople"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-[#FF0000] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/worldofthepeople"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Footer Info - Right Side */}
            <div className="flex flex-col gap-2 sm:items-end">
              <p className="font-mono text-sm text-neutral-600">
                &copy; 2026 worldofthepeople
              </p>
              <p className="text-sm italic text-neutral-600">
                Building the truth layer for the physical world
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Feature Card Component - Documentary Style
function FeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative bg-white border-2 border-black p-8 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="absolute -top-4 -left-4 bg-blue-600 px-3 py-1">
        <span className="font-mono text-sm font-bold text-white">{number}</span>
      </div>
      <h3 className="mb-3 font-display text-2xl font-bold text-black">
        {title}
      </h3>
      <p className="leading-relaxed text-neutral-700">{description}</p>
    </div>
  );
}
