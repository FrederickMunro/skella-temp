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
])

createRoot(document.getElementById('root')!).render(
  <Container>
    <RouterProvider router={router} />
  </Container>,
)
