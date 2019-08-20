import { logger } from './modules/logger';

export class App {
	constructor(text) {
		this.log(text);
	}
	log(text) {
		console.log( logger(text) );
	}
}