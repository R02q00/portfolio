import Header from './sections/header';
import Footer from './sections/footer';
import Content from './sections/content';
import './App.css'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col '>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App
