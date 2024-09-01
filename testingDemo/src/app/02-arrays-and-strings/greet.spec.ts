import { greet } from "./greet";

describe('greet',()=>{

    describe('Greet', function(){
        it('Should return Welcome Aritana if input is Aritana',()=>{
            let result = greet('Aritana');
            expect(result).toContain('Aritana');
        });
    });

});