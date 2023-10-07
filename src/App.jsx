import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
