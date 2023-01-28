//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchList from './components/SearchList';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/"><SearchList /></Route>
      <Route  path="/:route/:id" render={(routeProps) => <SearchList {...routeProps} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
