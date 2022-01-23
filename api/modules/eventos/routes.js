const router = require('express-promise-router')();
const ctr = require('./controller');

router.get('/indexEventos', ctr.index);
router.get('/editEvento/:eve_codigo', ctr.edit);
router.post('/updateEvento', ctr.update);
router.post('/saveEvento', ctr.save);
router.get('/deleteEvento/:eve_codigo', ctr.delete);
router.post('/getPromotersForAdd/', ctr.getPromotersForAdd);
router.get('/getPromotersList/:eve_codigo', ctr.getPromotersList);
router.post('/addPromoter', ctr.addPromoter);
router.post('/excluirPromoter', ctr.excluirPromoter);
router.post('/adicionarProduto', ctr.adicionarProduto);
router.get('/getProdutosLotes/:eve_codigo', ctr.getProdutosLotes);
router.get('/removerProduto/:eve_codigo/:epr_codigo', ctr.removerProduto);
router.get('/addLoteToProduto/:epr_codigo', ctr.addLoteToProduto);
router.post('/addCategoriaPrecoToLote', ctr.addCategoriaPrecoToLote);
router.post('/removeCategoriaPrecoFromLote', ctr.removeCategoriaPrecoFromLote);

module.exports = router;