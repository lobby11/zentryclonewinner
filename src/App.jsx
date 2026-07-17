// import About from './components/About.jsx'
// import Hero from './components/Hero.jsx'
// import React from 'react'
// import Navbar from './components/Navbar.jsx'
// import Features from './components/Features.jsx'
// import Story from './components/Story.jsx'
//  import Contact from './components/Contact.jsx'
// import Footer from './components/Footer.jsx'
// const App = () => {
//   return (
//     <main className='relative min-h-screen w-screen overflow-x-hidden bg-blue-75 '>
//       <Navbar />
//        <Hero />
//       <About />
//       <Features />
//       <Story />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }

// export default App

import React, { lazy, Suspense } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const Story = lazy(() => import('./components/Story'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;
