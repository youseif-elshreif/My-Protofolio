"use client";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Experience from "../../components/Experience/Experience";
import ContactMe from "../../components/ContactMe/ContactMe";
import { NavProvider, useNav } from "../../context/NavContext";
import CodePatternBackground from "../../components/CodePatternBackground/CodePatternBackground";
function HomeContent() {
  const { sectionsRef } = useNav();

  const sections = [
    { id: 0, title: "ABOUT", mt: false, ele: <Hero /> },
    { id: 1, title: "SKILLS", ele: <Skills /> },
    { id: 2, title: "PROJECTS", ele: <Projects /> },
    { id: 3, title: "EXPERIENCE", ele: <Experience /> },
  ];

  return (
    <>
      <CodePatternBackground />

      <Nav />
      <main className=" pt-[85px] pb-[50px] relative">
        {sections.map((sec, index) => (
          <SectionContainer
            ref={sectionsRef}
            key={sec.id}
            num={index}
            title={sec.title}
            id={sec.id.toString()}
            mt={sec.mt}
          >
            {sec.ele}
          </SectionContainer>
        ))}
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <NavProvider>
      <HomeContent />
    </NavProvider>
  );
}
