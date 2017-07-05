var expect = require('expect');
var server = require('../server');

describe('Array Sum', ()=> {
	it('should exist', ()=>{
		var arr = [1];
		var arraySum = server.SumArray(arr);

		expect(arraySum).toExist();
	});
	it('should return a number', ()=>{
		var arr = [1, 2,3, 4,5,7];
		var arraySum = server.SumArray(arr);

		expect(arraySum).toBeA('number');
	});
	it('should return the value of the array', ()=>{
		var arr = [1, 2,3, 4,5,7];
		var arraySum = server.SumArray(arr);

		expect(arraySum).toBe(22);
	});
});

describe('Array AVg', ()=> {
	it('should return the average value of the array', ()=>{
		var arr = [1, 2, 3, 4, 5, 6];
		var arrayCal = server.AverageArray(arr);

		expect(arrayCal).toBe(3.5);
	});
});

describe('Array Min', ()=> {
	it('should return the minimum value of the array', ()=>{
		var arr = [1, 2, 3, 4, 5, 6];
		var arrayCal = server.MinArray(arr);

		expect(arrayCal).toBe(1);
	});
});

describe('Array Max', ()=> {
	it('should return the maximum value of the array', ()=>{
		var arr = [1, 2, 3, 4, 5, 6];
		var arrayCal = server.MaxArray(arr);

		expect(arrayCal).toBe(6);
	});
});

describe('Array Uniq', ()=> {
	it('should return a unique array', ()=>{
		var arr = [1, 2, 3, 4, 3,2,4,3,1,2,3,4,8,5,5, 6];
		var arrayCal = server.UniqArray(arr);
		var result = [1, 2, 3, 4, 4, 8, 5, 6];
		expect(arrayCal).toEqual(result);
	});
});