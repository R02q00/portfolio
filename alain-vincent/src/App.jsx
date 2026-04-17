import Header from './sections/header';
import Footer from './sections/footer';
import Content from './sections/content';
import './App.css'
import { useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const updateLoading = () => {
    setIsLoading(!isLoading);
  }

  return (
    <div className={`${isLoading ? 'fade' : 'fade show'} min-h-screen flex flex-col `}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App
