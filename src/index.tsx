import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './app.css';
import Container from "./Container";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Pools from "./components/Pools";
import { LanguageProvider } from "./components/LanguageProvider";
import Aquarino from "./components/Aquarino";
import Dolphin from "./components/Dolphin";
import Landscaping from "./components/Landscaping";
import Excavation from "./components/Excavation";
import Blog from "./components/Blog";
import Quote from "./components/Quote";
import Mova from "./components/Mova";
import Experience from "./components/Experience";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Home />
        <Footer />
      </>
    )
  },
  {
    path: '/piscines',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Pools />
        <Footer />
      </>
    )
  },
  {
    path: '/piscines/aquarino',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Aquarino />
        <Footer />
      </>
    )
  },
  {
    path: '/piscines/dolphin',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Dolphin />
        <Footer />
      </>
    )
  },
  {
    path: '/piscines/mova',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Mova />
        <Footer />
      </>
    )
  },
  {
    path: '/amenagements',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Landscaping />
        <Footer />
      </>
    )
  },
  {
    path: '/excavations',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Excavation />
        <Footer />
      </>
    )
  },
  {
    path: '/soumission',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Quote />
        <Footer />
      </>
    )
  },
  {
    path: '/blog',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Blog />
        <Footer />
      </>
    )
  },
  {
    path: '/contact',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Footer />
      </>
    )
  },
  {
    path: '/promotions',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Footer />
      </>
    )
  },
  {
    path: '/galerie',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Footer />
      </>
    )
  },
  {
    path: '/experience-skella',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Header />
        <Experience />
        <Footer />
      </>
    )
  },
])

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <Container>
      <RouterProvider router={router} />
    </Container>
  </LanguageProvider>,
)
