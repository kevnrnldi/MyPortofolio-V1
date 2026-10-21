import Image from "next/image";
import "./globals.css";
import Hero from "../components/hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import NavDock from "@/components/NavDock";
import { FamilyButton } from "@/components/ui/FamilyButton";
import { SmoothCursor } from "@/components/ui/SmoothCursor";
import { CustomAudioPlayer } from "@/components/ui/MusicPlayerExample";
import { AudioProvider } from "@/components/ui/AudioProvider";

export default function Home() {
  return (
    <AudioProvider>
      <main
        className="relative cursor-none  justify-center items-center  
      sm:px-10 px-5 bg-black-100 
      flex flex-col overflow-clip min-h-screen mx-auto w-full  "
      >
        <SmoothCursor />
        <div className="fixed bottom-6 right-6 z-50">
          <FamilyButton>
            <CustomAudioPlayer />
          </FamilyButton>
        </div>

        <div className="max-w-7xl w-full">
          {/* <FloatingNav navItems={navItems} /> */}
          <NavDock />
          <Hero />
          <Grid />
          <RecentProjects />
          {/* <Clients /> */}
          {/* <Experience /> */}
          <Approach />
          <Footer />
        </div>
      </main>
    </AudioProvider>
  );
}
