import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { AboutSection } from "@/components/home/about-section";
import { BlogSection } from "@/components/home/blog-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <AboutSection />
      <BlogSection />
      <CTASection />
    </div>
  );
}
