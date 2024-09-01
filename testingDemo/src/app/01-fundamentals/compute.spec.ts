import { compute } from "./compute"

describe('Compute', function(){
    it('should return 0 if input is negative', ()=>{
        var result = compute(-1);
        expect(result).toBe(0);
    });
});