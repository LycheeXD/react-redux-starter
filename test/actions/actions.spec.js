import { ON_INPUT_CHANGE } from '../../src/actions/actions';

describe('should import all action types', () => {
  test('should import ON_INPUT_CHANGE', () => {
    expect(ON_INPUT_CHANGE).toBe('ON_INPUT_CHANGE');
  });
});