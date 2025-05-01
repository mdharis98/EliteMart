import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl textc pt-8 border-t'>
        <Title text1={'About'} text2={'Us'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic officia facilis, consectetur sapiente nulla dicta in nesciunt a deleniti, laboriosam magni odit ab distinctio quidem velit vel reprehenderit quibusdam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam recusandae neque amet repudiandae. Quae totam debitis facilis soluta distinctio labore iusto in esse eveniet, molestias ipsa eos placeat blanditiis.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos commodi ea amet culpa nam voluptate. Maxime modi ipsum repellat quis quam obcaecati, eius pariatur fugit corrupti error. Neque, quod esse.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'Why'} text2={'Choose Us'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores laborum incidunt numquam sapiente velit tempore hic dolore consectetur aspernatur inventore, corrupti, culpa facere reprehenderit eum aut libero, vero distinctio rerum.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, sequi dolorem odio voluptas cupiditate aspernatur minus voluptatem nam totam eligendi quasi nemo! Sint laborum in, voluptas quia corrupti cum numquam?</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente similique inventore quidem praesentium dolor. Quibusdam cumque dolores aliquid, in labore vitae odit quidem aspernatur praesentium et rerum quos eligendi velit.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
