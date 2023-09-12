import weatherReducer from '../redux/weather/weatherSlice';

describe('weatherSlice', () => {
  it('should have initial state', () => {
    const expectedInitialState = {
      data: null,
      loading: false,
      error: null,
    };

    const initialState = weatherReducer(undefined, {});

    expect(initialState).toEqual(expectedInitialState);
  });
});
