import { TraversalStore } from '../../src/Store';

const mockFetch = jest.fn(() => Promise.resolve({ ok: false } as Response));
window.fetch = mockFetch;

describe('TraversalStore', () => {
  describe('with token factory', () => {
    let token = 'mybearertoken';
    const tokenFactory = () => Promise.resolve(token);
    let store: TraversalStore;

    beforeEach(() => {
      mockFetch.mockClear();
      store = new TraversalStore(
        'http://engine.test',
        'http://hra.test',
        [],
        tokenFactory
      );
    });

    test('should get token from factory when making engine requests', async () => {
      await store.traversalService.get('mytraversalid');

      expect(fetch).toHaveBeenCalledWith(
        expect.stringMatching(/^http:\/\/engine.test/),
        {
          headers: expect.objectContaining({
            Authorization: 'Bearer mybearertoken',
          }),
        }
      );
    });

    test('should get token from factory when making HRA requests', async () => {
      await store.hraService?.getHealthRisk('mytraversalid', [], []);

      expect(fetch).toHaveBeenCalledWith(
        expect.stringMatching(/^http:\/\/hra.test/),
        {
          headers: expect.objectContaining({
            Authorization: 'Bearer mybearertoken',
          }),
        }
      );
    });

    test('when token is updated, should use new token', async () => {
      await store.traversalService.get('mytraversalid');
      mockFetch.mockClear();
      token = 'mynewbearertoken';
      await store.traversalService.get('mytraversalid');

      expect(fetch).toHaveBeenCalledWith(
        expect.stringMatching(/^http:\/\/engine.test/),
        {
          headers: expect.objectContaining({
            Authorization: 'Bearer mynewbearertoken',
          }),
        }
      );
    });
  });
});
