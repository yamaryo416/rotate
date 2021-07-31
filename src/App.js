import logo from './logo.svg';
import './App.css';
import Deg from './Deg'
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const time = new Date();

  return (
    <div className="App">
      <ChakraProvider>
        <Deg />
      </ChakraProvider>
    </div>
  );
}

export default App;
