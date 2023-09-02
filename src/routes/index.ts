/*********************************
 * Boilerplate para novo projetos
 * express
 *********************************/

import express from 'express';

//controladores para ação principal da rota
import { controlador, generico } from '../controllers/indicis';

//rotas doutros arquivos
import { outro } from './outro';

// middleware para requisições especificas
import { hexGen } from '../middlewares/mid';

const router = express.Router();
router.use( outro );

router.get('/', hexGen, ( req: express.Request, res: express.Response, next: express.NextFunction )=>
{
	res.render( 'index', { template: 'dados' } );
});

router.get( '/controlador', controlador );

router.post( '', generico );
router.delete( '', generico );
router.put( '', generico );
router.patch( '', generico );

export { router };
