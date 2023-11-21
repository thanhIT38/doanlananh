import React from 'react'

const NoticeDetails = () => {

  const notices = [
    {
      description: 'Chương trình nhân dịp kỷ niệm  HN',
    },
  ]

  return (
    <React.Fragment>
      <div className="noticeDetails">
        {/* Title */}
        {notices.map((notice, index) => (
          <div className='bg-[#F1EFEF] flex m-2 cursor-pointer items-center' key={index}>

            <div className='items-center   py-2 notice-desc'>
              <h4 className='font-medium'>{notice.description}</h4>
            </div>
          </div>
        ))}

        <iframe
        title="PDF Viewer"
        src="https://www.africau.edu/images/default/sample.pdf"  
        width="100%"
        height="800" // Set the desired height
        frameBorder="0"
        scrolling="auto"
      ></iframe>

      </div>
    </React.Fragment>
  )
}

export default NoticeDetails
