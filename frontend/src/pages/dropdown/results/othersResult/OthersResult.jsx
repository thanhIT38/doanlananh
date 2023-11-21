import React from 'react'

const OthersResult = () => {
  return (
<React.Fragment>
      <div id="othersResult">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2'>khác</h3>
          <p className='text-md font-medium mt-2'>home / results / <span className='text-red-800'> others-result</span></p>
        </div>

        <div className='border p-8 flex flex-col justify-center item-center bg-[#FF8080] my-14 text-white text-center text-lg font-medium'>
        <p>Chúng tôi đang nâng cấp trang này, hãy theo dõi tiến trình của chúng tôi.</p>
        </div>
      </div>
    </React.Fragment>  )
}

export default OthersResult