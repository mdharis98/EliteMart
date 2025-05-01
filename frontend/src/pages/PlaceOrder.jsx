import React, { useContext, useState } from 'react'
import axios from 'axios'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext)


  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipCode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value 

    setFormData(data => ({...data, [name]:[value]}))
  }

  const onSubmitHandler = async (event) =>{
    event.preventDefault()
    
    try {
      let oredrItems = []
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if (cartItems[items][item] > 0 ) {
            const itemInfo = structuredClone(products.find(product =>product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              oredrItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: oredrItems,
        amount: getCartAmount() + delivery_fee
      }

      switch(method){

        // ---------------API call for COD order---------

        case 'cod':{
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers:{token}})
          
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          }else{
            toast.error(response.data.message)
          }
          break;
        }
        default:
          break;
      }
      

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }



  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t:'>
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'Delivery'} text2={'Information'} />
        </div>

        {/* ----------------------left side for information input-------------------------------  */}

        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} placeholder='Last Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} placeholder='Email Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" />
        <input required onChange={onChangeHandler} name='street' value={formData.street} placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name='city' value={formData.city} placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
          <input required onChange={onChangeHandler} name='state' value={formData.state} placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name='zipCode' value={formData.zipCode} placeholder='Zip Code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" />
          <input required onChange={onChangeHandler} name='country' value={formData.country} placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} placeholder='Mobile No.' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" />
      </div>

      {/* -----------------------------right side ---------------------- */}

      <div className="mt-8 min-w-80">
        <CartTotal />

        <div className="mt-12">
        <Title text1={'Payment'} text2={'Method'} />


          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Cash On Delivery</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button type='submit' className='bg-red-600 text-white px-16 py-3 text-sm'>Place Order</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
