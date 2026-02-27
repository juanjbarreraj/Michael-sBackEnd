const { Router } = require('express');
const controller = require('./controller');

const router = Router ();

router.get('/', controller.getLibrary);
router.get('/:id', controller.getLibraryById);
router.post('/', controller.addBook);
router.put('/', controller.updateLibrary);

module.exports = router;

//test