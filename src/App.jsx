import './App.css'
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex h-screen'>
      <Menu />
        <div className="flex flex-col flex-1">
          <Header />
          <Main />
          <Footer />
        </div>
    </div>
  )
}

export default App;
