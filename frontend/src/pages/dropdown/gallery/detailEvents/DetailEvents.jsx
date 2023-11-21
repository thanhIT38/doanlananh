import React from 'react'
import './DetailEvents.css'

const DetailEvents = () => {

  const eventsDataDetails = [
    {
      id: 1,
      title: 'শিক্ষা উৎসব প্রতিযোগিতা',
      date: '১২ ডিসেম্বর ২০২২',
      imageSrc: '/assets/events.jpg',
      description: "Đây là một hội chợ giáo dục nơi học sinh tham gia vào các cuộc thi. Các cuộc thi được tổ chức ở nhiều lĩnh vực học thuật khác nhau như khiêu vũ, ca hát, hùng biện, triển lãm giáo dục, đọc sách tiếng Anh, thi toán, v.v. Sự nhiệt tình và quyết tâm tham gia cuộc thi của các em học sinh ngày càng cao. Những học sinh chiến thắng cuộc thi sẽ được trao các giải thưởng đặc biệt giúp họ nhận được sự giúp đỡ và hỗ trợ mà họ cần. Cuộc thi này được tổ chức nhằm tổ chức các hội chợ giáo dục nhằm nâng cao kỹ năng xã hội và học tập của sinh viên. Tình cảm, sự tôn trọng và sự cảm thông lẫn nhau được bồi đắp giữa các em học sinh tham gia ngày hội này. Shiksha Utsav được tổ chức hàng năm và đã trở thành một phần quan trọng của Shiksha Mela. Học sinh tham gia cuộc thi này có thể thể hiện kỹ năng và thế mạnh học tập của mình và phát huy thành công của mình. Các sinh viên tham gia cuộc thi này được khuyến khích gắn kết và hợp tác. Ngày hội giáo dục hàng năm thể hiện sự nhiệt tình, quan tâm, giao lưu giữa các sinh viên và nâng cao tài năng của các em.",
    },
  ];


  return (
    <React.Fragment>
      <div id="detailEvents" className='mt-4'>
        <div className="detailEvents-title">
          <h3 className='bg-[#79929C] text-white font-medium text-md p-4'>sự kiện</h3>
        </div>
        {eventsDataDetails.map(event => (
          <div key={event.id} className='bg-[#FFFFFF]'>
            <picture>
              <img src={event.imageSrc} alt='' />
            </picture>
            <h3 className='p-4 text-md font-medium'>{event.title}</h3>
            <p className='number-font font-normal py-2 px-4'>{event.date}</p>
            <p className='text-md number-font font-normal py-2 px-4 shadow'>{event.description}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default DetailEvents