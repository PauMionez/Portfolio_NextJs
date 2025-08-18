import Image from "next/image";
import BasicInfo from "../content/basicInfo";
import HackatonButton from "../content/hackatonButton";
import AboutMe from "../content/aboutme";
import Experience from "../content/experience";
import TeckStack from "../content/teckStack";
import Contact from "../content/connect";

export default function Home() {
  return (
    <div>
      <div className=" max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <BasicInfo />
          <HackatonButton />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
          <AboutMe />
          <Experience />
          <TeckStack />
          <Contact />
        </section>
      </div>
      <footer className="max-w-4xl mx-auto px-4 py-8 border-t border-border mt-12">
        <div className="flex justify-between items-center">
          <p className="text-sm text-foreground/70">
            @ 2025 Pau Mionez. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
