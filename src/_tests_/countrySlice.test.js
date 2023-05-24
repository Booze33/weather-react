import countryReducer, { setFilter } from '../redux/country/countrySlice';

describe('countrySlice', () => {
  it('should set filter', () => {
    const initialState = {
      data: [],
      status: 'idle',
      error: null,
      filter: '',
    };

    const filter = 'New York';
    const nextState = countryReducer(initialState, setFilter(filter));

    expect(nextState.filter).toEqual(filter);
  });
});
