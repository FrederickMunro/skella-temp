import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './app.css';
import Container from "./Container";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
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
