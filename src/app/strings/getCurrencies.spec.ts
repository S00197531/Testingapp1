import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('it should include all 3 currencies', () => {

        expect(getCurrencies()).toEqual(['USD', 'GBP', 'EUR']);
    });
});