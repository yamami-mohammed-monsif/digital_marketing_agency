import Hero from "@/components/Hero";
import About from "@/components/About";
import BestServices from "@/components/BestServices";
import RecentWork from "@/components/RecentWork";

const page = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <BestServices />
      <RecentWork />
    </main>
  );
};

export default page;
