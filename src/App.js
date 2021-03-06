import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Series from './Pages/Series';
import Movies from './Pages/Movies';
import MyList from './Pages/MyList';
import NewAndPopular from './Pages/NewAndPopular';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/MyList" element={<MyList />} />
        <Route path="/NewAndPopular" element={<NewAndPopular />} />
      </Routes>
    </div>
  );
}

export default App;
