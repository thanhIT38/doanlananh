import React from 'react';
import './Contact.css'

const Contact = () => {

  return (
    <React.Fragment>
      <div id="contact">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2'>Liên hệ</h3>
          <p className='text-md font-medium mt-2'>home / <span className='text-red-800'> contact</span></p>
        </div>

        <div className="contact-inner grid grid-cols-1 sm:grid-cols-2 gap-4 flex items-center">
          <div className="bg-[#FFFFFF] pl-8 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-14 p-4 rounded flex justify-center flex-col">
            <picture className='flex justify-center sm:justify-start'>
              <img src="/assets/logo.png" alt="" />
            </picture>
            <div>
              <h2 className='max-[767px]:text-lg md:text-xl font-semibold mt-4'>Trường đại học </h2>
              <h4 className='max-[767px]:text-sm md:text-md'>Bưu điện: HN, Quận: </h4>
            </div>
            <hr className='mt-4 mr-4' />
            <div>
              <h3 className='text-md max-[767px]:text-sm'>Thành lập: 1952  </h3>
              <h3 className='text-md max-[767px]:text-sm'>Số điện thoại:054684654654</h3>
            </div>

            <hr className='mt-4 mr-4' />
            <h5 className=' pt-4'>TP:HN </h5>
<h5 className='py-1'> Quận:HN</h5>
<h5>Email: danarhut@gmail.com</h5>
<h5 className='py-1'>Di động: <span className='number-font'>01715672171</span></h5>
<h5>Trang web: dhafm.edu.bd</h5>
          </div>
          <div className='bg-[#FFFFFF] contact-map'>
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64454.92001022029!2d88.47133635267274!3d25.90487231882091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4c78eebb3154f%3A0x9f7f1e031fd1fb1a!2sDanarhat%20Madrasah%20Playground!5e0!3m2!1sen!2sbd!4v1697629193272!5m2!1sen!2sbd"
              title="Danarhut Ansariya FazilHNh,HN"
            ></iframe>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact