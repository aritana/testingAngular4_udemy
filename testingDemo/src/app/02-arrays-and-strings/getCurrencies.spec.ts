import { getCurrencies } from "./getCurrencies";

describe('GetCurrencies', () => {
    it('should return the supported currences', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});