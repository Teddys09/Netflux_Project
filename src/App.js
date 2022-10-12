import Home from './Pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Series from './Pages/Series';
import Movies from './Pages/Movies';
import MyList from './Pages/MyList';
import NewAndPopular from './Pages/NewAndPopular';
import { Provider } from 'react-redux';
import { store } from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/MyList" element={<MyList />} />
          <Route path="/NewAndPopular" element={<NewAndPopular />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
