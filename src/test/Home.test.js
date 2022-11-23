import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Pages/Home';
import { Provider } from 'react-redux';
import { createStore } from '../utils/store';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import { useDispatch } from 'react-redux';
import { addMedia } from '../utils/store';
import { BrowserRouter } from 'react-router-dom';

window.URL.createObjectURL = jest.fn();

const latestMovies = rest.get(
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
  (req, res, ctx) => {
    return res(ctx.json({ results: [] }));
  }
);
const latestSeries = rest.get(
  `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
  (req, res, ctx) => {
    return res(ctx.json({ results: [] }));
  }
);
const popularMovies = rest.get(
  `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
  (req, res, ctx) => {
    return res(ctx.json({ results: [] }));
  }
);
const popularSeries = rest.get(
  `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
  (req, res, ctx) => {
    return res(ctx.json({ results: [] }));
  }
);
const topRatedMovies = rest.get(
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
  (req, res, ctx) => {
    return res(ctx.json({ results: [] }));
  }
);
const topRatedSeries = rest.get(
  `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
  (req, res, ctx) => {
    return res(ctx.json({ results: [] }));
  }
);
const mostPopular = rest.get(
  `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
  (req, res, ctx) => {
    return res(ctx.json({ results: [] }));
  }
);
const upcomingMovies = rest.get(
  `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
  (req, res, ctx) => {
    return res(ctx.json({ results: [] }));
  }
);

// const fetchImages = rest.get(
//   `https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg`,
//   (req, res, ctx) => {
//     return res(ctx.json({ results: [] }));
//   }
// );

// fetchImages using URL.createObjectURL to create a blob URL for the image
const fetchImages = rest.get(
  `https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg`,
  (req, res, ctx) => {
    const blob = new Blob([''], { type: 'image/jpeg' });
    const url = URL.createObjectURL(blob);
    return res(ctx.set('Content-Type', 'image/jpeg'), ctx.body(url));
  }
);

const handler = [
  latestMovies,
  latestSeries,
  popularMovies,
  popularSeries,
  topRatedMovies,
  topRatedSeries,
  mostPopular,
  upcomingMovies,
  fetchImages,
];
const server = new setupServer(...handler);

beforeAll(() => server.listen());
//afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const view = render(
  <Provider store={createStore()}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);

describe('Home pages tests', () => {
  test('Home page renders', async () => {
    await waitFor(() => {
      // expect see Latest Movies
      expect(screen.getByText('Latest Movies')).toBeInTheDocument();
    });
    expect(view).toBeTruthy();
    expect(screen.getByText('Latest Movies')).toBeInTheDocument();
    expect(screen.getByText('Top Rated Movies')).toBeInTheDocument();
    // check if the store is empty
  });

  test('redux store should have the good shape', () => {
    const store = createStore();
    const { getState } = store;
    expect(getState()).toEqual({
      movies: [],
      series: [],
      moviesAndSeries: [],
      userList: [],
    });
  });
});
