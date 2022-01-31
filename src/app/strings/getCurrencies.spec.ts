import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('it should include all 3 currencies', () => {
       const array = ['USD', 'GBP', 'EUR'] 
        expect(getCurrencies()).toEqual(array);
    });
});