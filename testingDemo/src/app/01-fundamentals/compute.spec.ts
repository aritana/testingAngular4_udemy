import { compute } from "./compute"

describe('Função Compute', function(){
    it('should return 0 if input is negative', ()=>{
        var resultado = compute(-1);
        expect(resultado).toBe(0);
    });
});