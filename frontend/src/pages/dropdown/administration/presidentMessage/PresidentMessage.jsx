import React from 'react'

const PresidentMessage = () => {
  const presidentData = [
    {
      name: 'Nguyễn tuấn thành',
      designation: 'Chủ tịch tổ chức',
      title: 'Tuyên bố của Tổng thống:',
      image: '/assets/profile.jpg',
      description: 'Các em học sinh, phụ huynh và giáo viên thân mến, tôi rất vui và tự hào khi nói rằng chúng ta là một phần của đại gia đình trường học này. Trường học của chúng tôi được biết đến như một trung tâm học tập và văn hóa phong phú. Chúng tôi có thể tiếp tục tiến bộ trên con đường này chỉ với sự giúp đỡ của bạn. Tôi yêu cầu tất cả các bạn hãy duy trì sự tự lực và niềm tự hào về bản thân. Chúc các bạn luôn chăm chỉ, cống hiến và nhiệt tình. Chúng ta chỉ có thể bắt đầu cuộc hành trình này với bạn khi tất cả chúng ta cùng nhìn về một hướng. Cùng nhau, chúng ta sẵn sàng cho những ngày sắp tới với tư cách là một xã hội có giáo dục và nhận thức về văn hóa. Cảm ơn bạn, [người đứng đầu tổ chức]'
    },
  ]


  return (
    <React.Fragment>
      <div id="presidentMessage">
        <div className="pages-title  bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2'>Tuyên bố của Tổng thống</h3>
          <p className='text-md font-medium mt-2'>home / administration / <span className='text-red-800'> management-committee</span></p>
        </div>

        <div className='teachers-card grid  gap-3'>
          {presidentData.map((teacher, index) => (
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
                <h6>Trường đại học , </h6>
              </div>
            </div>
          ))}
        </div>

      </div>
    </React.Fragment>
  )
}

export default PresidentMessage