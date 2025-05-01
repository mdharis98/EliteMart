import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'Contact'} text2={'Us'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>676463 George Pool <br />Street 40U, Bodapest, Hungry</p>
          <p className='text-gray-500'>Tel: (463) 647-7363 <br />Email:conatct@elitemart.com</p>
          <div className="font-semibold text-xl text-gray-600 flex items-center gap-2">
            Careers at
            <img className="h-6" src={assets.logo_png} alt="logo" />
          </div>

          <p className='text-gray-500'>Learn more about Elitemart team and job Openings.</p>
          <button className='border border-gray-600 px-8 py-4 text-sm-center hover:bg-red-600 hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
