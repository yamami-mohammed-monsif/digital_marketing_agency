import Hero from "@/components/Hero";
import About from "@/components/About";
import BestServices from "@/components/BestServices";
import RecentWork from "@/components/RecentWork";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const page = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <BestServices />
      <RecentWork />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default page;
