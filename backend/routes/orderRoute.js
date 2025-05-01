import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const oredrRouter = express.Router()


// -------------------admin features 

oredrRouter.post('/list', adminAuth, allOrders)
oredrRouter.post('/status', adminAuth, updateStatus)


// ---------------------payment features 

oredrRouter.post('/place', authUser, placeOrder)
oredrRouter.post('/stripe', authUser, placeOrderStripe)
oredrRouter.post('/razorpay', authUser, placeOrderRazorpay)


// -------------------user features 


oredrRouter.post('/userOrders', authUser, userOrders)

export default oredrRouter