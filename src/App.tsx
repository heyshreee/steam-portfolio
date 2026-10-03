import React from 'react';
import { SideNav } from './components/navigation/SideNav';
import { Header } from './components/navigation/Header';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Contact } from './components/contact/Contact';
import { ExampleBanner } from './components/utils/ExampleBanner';

export const App: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-zinc-50 min-h-screen selection:bg-indigo-500 selection:text-white">
      <div className="grid grid-cols-[54px_1fr] min-h-screen">
        {/* Left Sticky Vertical SideNav */}
        <SideNav />

        {/* Main Content Area */}
        <main className="min-w-0 overflow-x-hidden">
          <ExampleBanner />
          <Header />

          <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-24 md:space-y-32 pb-24">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;