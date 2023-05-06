const mongoose = require('mongoose');
const Order = require('../models/Orders');

// get all orders
const getOrders = async (req, res) => {
    const orders = await Order.find({}).sort({createdAt: -1})
    res.status(200).json(orders)
}

// get a single order
const getOrder = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such order'})
    }

    const order = await Order.findById(id)

    if (!order) {
        return res.status(404).json({error: 'No such order'})
    }
    
    res.status(200).json(order)
}

// create new order
const createOrder = async (req, res) => {
    const {orderer, restaurant, food, total_price, card_name, card_date, card_code} = req.body;
    
    // add doc to DB
    try {
        const order = await Order.create({orderer, restaurant, food, total_price, card_name, card_date, card_code})
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete an order
const deleteOrder = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such order'})
    }

    const order = await Order.findOneAndDelete({_id: id})

    if (!order) {
        return res.status(404).json({error: 'No such order'})
    }
    
    res.status(200).json(order)
}

// update an order
const updateOrder = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such order'})
    }

    const order = await Order.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!order) {
        return res.status(404).json({error: 'No such order'})
    }

    res.status(200).json(order);
}

module.exports = {
    createOrder,
    getOrder,
    getOrders,
    deleteOrder,
    updateOrder
}