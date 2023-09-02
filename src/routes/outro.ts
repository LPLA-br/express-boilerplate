import express from 'express';

const outro = express.Router();

router.get('/boilerplate', (req, res, next)=>
{
	res.send('<h1> BOILERPLATE </h1>');
});

export { outro };
