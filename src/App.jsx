import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Projects from "./components/Projects";
import "./App.css";
import Education from "./components/Education";
import { Technologies } from "./components/Technologies";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden text-stone-500 antialiased">
        <div className="fixed inset-0 -z-10">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
        </div>
      </div>
      <div className=" ">
        <Navbar />
      </div>
      <div className=" h-1/2  mt-15 mb-2 ">
        <Hero></Hero>
      </div>
      <div className="mt-50">
        <Technologies></Technologies>
      </div>

      <div className="mt-30">
        <Projects />
      </div>

      <div className="mt-30">
        <Experience />
      </div>
      <div className="mt-30 mb-20">
        <Education />
        </div>

      {/* <div className="mt-30 mb-20">
        <ContactMe />
      </div> */}
    </>
  );
}

export default App;
