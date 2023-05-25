import Home from './components/Internal';
import TypeContextProvider from './context/Type';
import './App.css';
import Header from './components/Heading Element';

function App() {
  return (
    <TypeContextProvider value={{}}>
      <Header/>
      <Home/>
    </TypeContextProvider>
  );
}

export default App;