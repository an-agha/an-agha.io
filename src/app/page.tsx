import Hero from "@/components/landing/Hero";
import Layout from "./layout";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <Layout>
        <Hero />
        <Features />
    </Layout>
  );
}
