import { setInputValue } from '../../src/actions/actionCreators';

describe('should import all the action creators', () => {
  describe('#setInputValue', () => {
    test('should return action object with "ON_INPUT_CHANGE" for type and input argument for payload', () => {
      const result = setInputValue('caribbean queen');

      const expectedResult = {
        type: 'ON_INPUT_CHANGE',
        payload: 'caribbean queen'
      };

      expect(result).toEqual(expectedResult);
    });
  });
});