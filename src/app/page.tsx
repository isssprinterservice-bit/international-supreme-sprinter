import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <HowItWorks />
      </main>
    </>
  );
}
