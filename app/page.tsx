import Hero from "@/components/Hero";
import About from "@/components/About";
import BestServices from "@/components/BestServices";
import RecentWork from "@/components/RecentWork";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <BestServices />
      <RecentWork />
      <Testimonials />
    </main>
  );
};

export default page;
