import { useState, useEffect } from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import BookCall from './pages/BookCall';

function AppContent() {
  const { setActivePage } = useApp();
  const [page, setPage] = useState('home');

  const navigate = (p: string) => {
    setPage(p);
    setActivePage(p);
  };

  useEffect(() => {
    setActivePage(page);
  }, [page, setActivePage]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'about': return <About />;
      case 'portfolio': return <Portfolio />;
      case 'services': return <Services />;
      case 'products': return <Products />;
      case 'testimonials': return <Testimonials />;
      case 'contact': return <Contact />;
      case 'book-call': return <BookCall />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 app-bg">
      <Navbar onNavigate={navigate} />
      <main key={page} className="animate-fade-in">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
