const assert = require('chai').assert;
const logger = require('./logger');

describe('#logger', ()=>{
	it('loads',()=>{
		assert.exists(logger());
	});
});