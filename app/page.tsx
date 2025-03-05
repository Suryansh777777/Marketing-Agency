import Founders from "@/components/Founders";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Trusted from "@/components/Trusted";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <Projects />
      <Founders />
    </div>
  );
};

export default Home;
