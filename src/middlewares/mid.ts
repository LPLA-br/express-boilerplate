import express from 'express';

const hexGen = ( req: express.Request, res: express.Response, next: express.NextFunction ) =>
{
	let id = '';
	const nums = [ '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f' ];
	const min = 0;
	const max = 15;

	for ( let i = 0; i < max; i++ )
	{
		id += nums[ Math.floor( Math.random() * ( max - min + 1 ) + min ) ];
	}

	console.log( `middleware template ${id}` );
	
	next();
};

const log = ( req: express.Request, res: express.Response, next: express.NextFunction ) =>
{
	console.log( `REQUISIÇÃO de ${req.ip} do recurso ${req.path} de método ${req.method} - ${t.toString()}` );
	next();
};

export { hexGen, log };
