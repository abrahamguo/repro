import fastifyStatic from '@fastify/static';
import fastify from 'fastify';

console.log(
	await fastify()
		.setErrorHandler(() => `hello`)
		.register(fastifyStatic, { root: import.meta.dirname, index: false })
		.get(`/default`, () => {
			throw 43;
		})
		.inject({ path: `/` })
);
