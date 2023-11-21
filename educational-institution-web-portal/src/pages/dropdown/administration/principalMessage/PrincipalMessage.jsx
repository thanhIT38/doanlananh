import React from 'react'

const PrincipalMessage = () => {
  const principalData = [
    {
      name: 'Hiệu trưởng',
      designation: 'hiệu trưởng',
      title: 'Lời nhắn của hiệu trưởng;',
      image: '/assets/profile.jpg',
      description: "Kính gửi các Học sinh,\nPhụ huynh và Giáo viên, tôi vui mừng và tự hào thông báo rằng chúng ta là một phần của gia đình trường học này. Trường học của chúng tôi được biết đến như một trung tâm học tập và văn hóa phong phú. Chúng tôi có thể tiếp tục tiến bộ trên con đường này chỉ với sự giúp đỡ của bạn. Tôi yêu cầu tất cả các bạn hãy duy trì sự tự lực và niềm tự hào về bản thân. Chúc các bạn luôn chăm chỉ, cống hiến và nhiệt tình. Chúng ta chỉ có thể bắt đầu cuộc hành trình này với bạn khi tất cả chúng ta cùng nhìn về một hướng. Cùng nhau, chúng ta sẵn sàng cho những ngày sắp tới với tư cách là một xã hội có giáo dục và nhận thức về văn hóa. Cảm ơn bạn, [người đứng đầu tổ chức]"
    },
  ]


  return (
    <React.Fragment>
      <div id="principalMessage">

        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2'>Lời nhắn của hiệu trưởng</h3>
          <p className='text-md font-medium mt-2'>home / administration / <span className='text-red-800'> management-committee</span></p>
        </div>

        <div className='teachers-card'>
          {principalData.map((teacher, index) => (
            <div key={index} className="p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center">
              <div className='teachers-card-img my-4'>
                <picture>
                  <img src={teacher.image} alt="profile" />
                </picture>
              </div>
              <div className="teachers-card-identity">
                <h4 className='font-medium text-lg'>{teacher.name}</h4>
                <h5>{teacher.designation}</h5>
                <h5 className='mt-6 text-md font-semibold'>{teacher.title}</h5>
                <h6>{teacher.description}</h6>
                <br />
                <h6>Trường đại học</h6>
              </div>
            </div>
          ))}
        </div>

      </div>
    </React.Fragment>
  )
}

export default PrincipalMessage