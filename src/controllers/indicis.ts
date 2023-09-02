/*************************
 * CONTROLLERS PRINCIPAIS
 *************************/

import express from 'express';

//EXEMPLO ORM
import { User } from '../models/demo';

const controlador = ( req: express.Request, res: express.Response )=>
{
	const {} = req.body;
	const {} = req.params;
	const {} = req.query;

	( async ()=>
	{
		res.send( '<h1> boilerplate </h1><link href="/">main</link>' );
	}
	)();
};

const generico = ( req: express.Request, res: express.Response )=>
{
	res.setHeader( "Content-Type" , "text/plain").status(200).send('outros metodos...');
};

export { controlador, generico };
