import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';


const AdmissionForm = () => {



  const [formData, setFormData] = useState({
    studentNameEn: '',
    studentNameBn: '',
    emergencyMobile: '',
    birthDate: '',
    nationalId: '',
    grade: '',
    gender: '',
    religion: '',
    academicInstitution: '',
    institutionAddress: '',
    previousClass: '',
    fatherNameEn: '',
    motherNameEn: '',
    fatherNameBn: '',
    motherNameBn: '',
    fatherMobile: '',
    motherMobile: '',
    fatherProfession: '',
    motherProfession: '',
    fatherEmail: '',
    motherEmail: '',
    fatherNID: '',
    motherNID: '',
    guardianInfo: '',
    presentAddress: '',
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here

    setTimeout(() => {
      toast.success('Form submitted successfully!', {
        position: 'top-right',
        autoClose: 3000, // You can adjust the time the message is displayed
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 1000);

    console.log(formData);
  };

  return (
    <React.Fragment>
      <div id="fillAdmissionForm">

        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2'>Điền vào mẫu đơn nhập học</h3>
          <p className='text-md font-medium mt-2'>home / admissions / <span className='text-red-800'> fill-admission-form</span></p>
        </div>

        {/* ----------- Admission Form ----------- */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center ">Hình thức tuyển sinh</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              {/* Student Information */}
              <div>
<label className="block text-sm font-medium text-gray-700">Tên học sinh (Viết bằng tiếng Việt nam)</label>
                <input

                  type="text"
                  name="studentNameBn"
                  value={formData.studentNameBn}
                  onChange={handleChange}
                  className="outline-none mt-1 p-2 w-full border "
placeholder="tên sinh viên"
                  required
                />
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Điện thoại di động của sinh viên (Nhập bằng tiếng Anh)</label>
                <input

                  type="text"
                  name="emergencyMobile"
                  value={formData.emergencyMobile}
                  onChange={handleChange}
                  className="outline-none mt-1 p-2 w-full border "
placeholder="điện thoại di động của sinh viên"
                />
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Ngày sinh</label>
                <input
                  type="text"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
giữ chỗ="ngày sinh"
                  required
                />
                {/* <DatePicker
                  name="birthDate"
                  selected={formData.birthDate}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="জন্ম তারিখ"
                  required
                /> */}
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Viết bằng tiếng Anh</label>
                <input
                  type="text"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="Đăng ký khai sinh/Số chứng minh nhân dân"
                />
              </div>

              <div>
<label className="block text-sm font-medium text-gray-700">Lớp màu xám</label>
                <select
                  name="gender"
                  value={formData.grade}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                >
                <option value="">-Chọn-</option>
<option value="1">đầu tiên</option>
<option value="2">Thứ hai</option>
<option value="3">Thứ ba</option>
<option value="4">Thứ tư</option>
<option value="5">Thứ năm</option>
<option value="6">Thứ sáu</option>
<option value="7">Thứ bảy</option>
<option value="8">Thứ tám</option>
<option value="9">Thêm</option>
<option value="10">thứ mười</option>
                </select>
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Giới tính</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                >
                 <option value="">-Chọn-</option>
<option value="male">Nam</option>
<option value="female">Nữ</option>
                </select>
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">tôn giáo</label>
                <select
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                >
               <option value="">-Chọn-</option>
<option value="islam">Hồi giáo</option>
<option value="đạo Hindu">Ấn Độ giáo</option>
{/* Thêm nhiều lựa chọn tôn giáo hơn */}
                </select>
              </div>
              <div className="col-span-2">
<label className="block text-sm font-medium text-gray-700">Tên cơ sở giáo dục trước đây</label>
                <input
                  type="text"
                  name="academicInstitution"
                  value={formData.academicInstitution}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="Nhập bằng tiếng Việt"
                />
              </div>


              {/* Guardian Information */}
              <div className="col-span-2">
<label className="block text-sm font-medium text-gray-700">Viết bằng tiếng Anh</label>
                <input
                  type="text"
                  name="fatherNameEn"
                  value={formData.fatherNameEn}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="Tên của Cha (Bằng CHỮ CÁI)"
                />
              </div>
              <div className="col-span-2">
<label className="block text-sm font-medium text-gray-700">Viết bằng tiếng Anh</label>
                <input
                  type="text"
                  name="motherNameEn"
                  value={formData.motherNameEn}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="Tên mẹ (Bằng CHỮ CÁI)"
                />
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Tên của Cha (Viết bằng tiếng Việt nam)</label>
                <input
                  type="text"
                  name="fatherNameBn"
                  value={formData.fatherNameBn}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="tên cha"
                />
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Tên mẹ (Viết bằng tiếng Việt nam)</label>
                <input
                  type="text"
                  name="motherNameBn"
                  value={formData.motherNameBn}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="tên mẹ"
                />
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Số điện thoại di động của Cha</label>
                <input
                  type="text"
                  name="fatherMobile"
                  value={formData.fatherMobile}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="Nhập bằng tiếng Anh"
                />
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Số điện thoại di động của mẹ</label>
                <input
                  type="text"
                  name="motherMobile"
                  value={formData.motherMobile}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="Nhập bằng tiếng Anh"
                />
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Nghề nghiệp của cha</label>
                <select
                  name="fatherProfession"
                  value={formData.fatherProfession}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                >
                 <option value="">-Chọn-</option>
<option value="option1">Công việc</option>
<option value="option2">Bác sĩ</option>
<option value="option3">Giáo viên</option>
<option value="option4">Kỹ sư</option>
<option value="option5">Thương mại</option>
<option value="option6">Bác sĩ</option>
<option value="option7">Công nhân nông nghiệp</option>
<option value="option8">Nhân viên cảnh sát</option>
<option value="option9">Thêm</option>
<option value="option10">Nhà khoa học</option>
<option value="option10">Khác</option>
                </select>
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Nghề nghiệp của mẹ</label>
                <select
                  name="motherProfession"
                  value={formData.motherProfession}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                >
                 <option value="">-Chọn-</option>
<option value="option1">Công việc</option>
<option value="option2">Bác sĩ</option>
<option value="option3">Giáo viên</option>
<option value="option4">Kỹ sư</option>
<option value="option5">Thương mại</option>
<option value="option6">Bác sĩ</option>
<option value="option7">Công nhân nông nghiệp</option>
<option value="option8">Nhân viên cảnh sát</option>
<option value="option9">Thêm</option>
<option value="option10">Nhà khoa học</option>
<option value="option10">Khác</option>
                </select>
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Email của Cha</label>
                <input
                  type="text"
                  name="fatherEmail"
                  value={formData.fatherEmail}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="Nhập bằng tiếng Anh"
                />
              </div>
              
              <div>
<label className="block text-sm font-medium text-gray-700">Viết bằng tiếng Anh</label>
                <input
                  type="text"
                  name="fatherNID"
                  value={formData.fatherNID}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="NID của cha"
                />
              </div>
              <div>
<label className="block text-sm font-medium text-gray-700">Viết bằng tiếng Anh</label>
                <input
                  type="text"
                  name="motherNID"
                  value={formData.motherNID}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="NID của mẹ"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
Thông tin về người giám hộ hợp pháp (Bấm vào đây nếu có)
                </label>
                <input
                  type="text"
                  name="guardianInfo"
                  value={formData.guardianInfo}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
placeholder="Địa chỉ sinh viên"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
               Địa chỉ hiện tại (bằng tiếng Anh)
                </label>
                <input
                  type="text"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border "
                  placeholder="Present Address (In English)"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-[#A2B7B7] text-white font-medium py-2 px-14"
              >
                Submit
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>

        {/* Admission Rules */}
        <div className='border p-8 flex flex-col justify-center item-center bg-[#F5F5F5] my-14  text-lg'>
<h2 className='font-semibold mb-3'>Cách điền biểu mẫu trực tuyến:</h2>
          <p>
<span className='number-font'>1</span>. Bây giờ bạn có thể nhận Thẻ nhập học của mình theo cách rất dễ dàng và sáng tạo. Trước tiên, hãy điền chính xác các thông tin cần thiết được đề cập trong biểu mẫu và gửi biểu mẫu bằng cách tải lên một bức ảnh cỡ hộ chiếu. Tất cả thông tin trong mẫu phải được điền bằng tiếng Anh. <br /> <br />

          2. Nếu biểu mẫu được gửi chính xác, quá trình đăng ký của bạn sẽ được hoàn tất và bạn sẽ nhận được số tham chiếu/giới thiệu. Điều quan trọng là phải nhớ con số này, nhưng tốt nhất là bạn nên viết nó ra. Điều quan trọng cần nhớ là bạn phải hoàn tất Quy trình thanh toán để nhận Thẻ thừa nhận cho đến khi quá trình Đăng ký hoàn tất và Số tham chiếu/Giới thiệu của bạn rất quan trọng đối với quy trình này. <br /> <br />

3. Bạn phải nộp phí biểu mẫu thông qua Mobile Banking của DBBL. Bạn phải gửi 200 taka cho lớp 2 hoặc 300 taka cho đến lớp 3 (tùy theo yêu cầu nào đối với bạn) từ tài khoản DBBL của chính bạn hoặc của người khác vào số ID người xuất hóa đơn 2086. Sau khi gửi tiền thành công, bạn sẽ nhận được Số TrxID mà bạn cần ghi nhớ và sau này sẽ được yêu cầu tải xuống Thẻ thừa nhận. Chi tiết về Thanh toán DBBL được thể hiện qua hình ảnh. <br /> <br />

4. Để tải xuống Thẻ Chấp nhận, bạn phải nhấp vào liên kết Thẻ Chấp nhận và cung cấp Số Tham chiếu/Giới thiệu và Số TrxID của bạn, và bạn có thể in thư này rất dễ dàng. Nếu Thẻ thừa nhận bị mất vì bất kỳ lý do gì, bạn có thể đến tùy chọn này và in lại Thẻ thừa nhận của mình. <br /> <br />

</p>
        </div>


      </div>
    </React.Fragment>

  );
};

export default AdmissionForm;
