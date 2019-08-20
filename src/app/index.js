import msgDef, { logger } from './modules/logger';

export class App {
	
	constructor(text) {
		this.log(this.check(text));
	}
	
	log(text) {
		console.log( logger(text) );
	}
	
	check(text) {
		return (text === undefined || text === '')
			? msgDef : text;
	}
}