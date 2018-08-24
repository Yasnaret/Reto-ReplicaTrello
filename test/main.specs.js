global.assert=require('chai').assert;
const addList=require('../src/js/main');
const saveTitleList=require('../src/js/main');
const createAnotherList=require('../src/js/main');

describe('main',()=>{
    it('deberia ser una funcion',()=>{
        assert.isFunction(addList)
    
    });
    it('deberia ser una funcion',()=>{
        assert.isFunction(saveTitleList)
    });
    it('deberia ser una funcion',()=>{
        assert.isFunction(createAnotherList)
        
    });
});
