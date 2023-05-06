const express = require('express');
const { 
    createOrder,
    getOrder,
    getOrders,
    deleteOrder,
    updateOrder
} = require('./orderController')
const router = express.Router();

router.get('/', getOrders);

// GET a single order
router.get('/:id', getOrder);

// POST a new order
router.post('/', createOrder);

// DELETE an order
router.delete('/:id', deleteOrder);

// UPDATE an order
router.patch('/:id', updateOrder);

module.exports = router;