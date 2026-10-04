import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

      <Footer />
    </>
  );
}
