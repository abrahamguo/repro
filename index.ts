class Console {
	log(str: unknown) {
		// ?
	}
}

const console = new Console();

Promise.resolve().then(console.log);
