import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ExperienceSticky from "@/components/sections/ExperienceSticky";
import HorizontalStory from "@/components/sections/HorizontalStory";
import Menu from "@/components/sections/Menu";
import SpaceGallery from "@/components/sections/SpaceGallery";
import Visit from "@/components/sections/Visit";
import Reservations from "@/components/sections/Reservations";
import Footer from "@/components/sections/Footer";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSticky />
        <HorizontalStory />
        <Menu />
        <SpaceGallery />
        <Visit />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}
