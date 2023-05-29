import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Countries from '../components/countries/Countries';
import store from '../redux/store';

describe('Countries Component', () => {
  test('renders loading message when cities are loading', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Countries />
        </BrowserRouter>
      </Provider>,
    );

    const container = screen.getByText(/loading/i);
    expect(container).toBeInTheDocument();
  });
});
