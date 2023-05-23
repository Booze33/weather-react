import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Countries from './components/countries/Countries';
import Weather from './components/weather/Weather';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
