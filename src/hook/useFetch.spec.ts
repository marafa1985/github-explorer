import { renderHook, act } from '@testing-library/react';
import { useFetch } from './useFetch';

export type FetchedData = {
  username: string;
};
describe('useDataApi', () => {
  const unMockedFetch = global.fetch;

  afterEach(() => {
    global.fetch = unMockedFetch;
  });
  it('should return data with a successful request', async () => {
    const res = new Response();
    res.json = jest.fn().mockResolvedValue({ username: 'test' });

    global.fetch = () => Promise.resolve(res);
    const { result } = renderHook(() => useFetch<FetchedData>());

    await act(async () => {
      result.current.setApiUrl('test.com');
    });

    expect(result.current.data).toEqual({ username: 'test' });
  });

  it('should return data error a successful request', async () => {
    global.fetch = jest.fn().mockRejectedValue('error');
    const { result } = renderHook(() => useFetch<FetchedData>());

    await act(async () => {
      result.current.setApiUrl('test.com');
    });

    expect(result.current.hasError).toBeTruthy();
  });
});
