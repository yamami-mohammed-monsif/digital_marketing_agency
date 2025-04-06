import Hero from "@/components/Hero";
import About from "@/components/About";
import BestServices from "@/components/BestServices";

const page = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <BestServices />
    </main>
  );
};

export default page;
