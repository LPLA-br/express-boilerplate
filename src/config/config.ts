/*****************************
 * Configuração do express
 *****************************/

import express from 'express';
import path from 'path';

/*outros middlewares como: cookie-parser, cookie-session ...
 https://expressjs.com/en/resources/middleware.html
*/

const app = express();
const PORTA = 8080;

//rotas apenas para GET
import { router } from '../routes/index';

//utilizando rota
app.use( '/', router );

// tratamento de url do express
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// páginas html estáticas. descomente para servir arquivos e páginas.
app.use( express.static( path.join(__dirname, '../public') ) );

// definindo motor de rederização das views
app.set( 'views', path.join( __dirname, '../views' ));
app.set( 'view engine', 'pug');

export { app, PORTA }
