import Faq from "@/components/Faq";
import Founders from "@/components/Founders";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Stats from "@/components/Stats";
import Trusted from "@/components/Trusted";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <Projects />
      <Founders />
      <Stats />
      <Faq />
    </div>
  );
};

export default Home;
