import Hero from "@/components/landing/Hero";
import Layout from "./layout";
import Features from "@/components/landing/Features";
import About from "@/components/landing/About";
import WhyUs from "@/components/landing/WhyUs";
import Modules from "@/components/landing/Modules";
import Architecture from "@/components/landing/Architecture";

export default function Home() {
  return (
    <Layout>
        <Hero />
        <Features />
        <About />
        <WhyUs />
        <Modules />
        <Architecture />
    </Layout>
  );
}
