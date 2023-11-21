import React, { useEffect, useState } from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { AiFillEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RxCross2 } from "react-icons/rx";
import { createnoiquy, getAllnoiquy } from "../../apis/newApi";

const ClassRoutine = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isCreate, setIsCreate] = useState(false);
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = async () => {
    try {
      const data = { selectedDate, name, selectedImage };
      const response = await createnoiquy(data);
      const updatedData = await getAllnoiquy();
      setData(updatedData);
      setModalOpen(false);
    } catch (error) {
      console.error("Error creating noiquy:", error);
    }
  };

  // Seleceted Date

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!data.length) {
          const allnewcurent = await getAllnoiquy();
          setData(allnewcurent);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (id) => {};

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  // Modal popup For add Events

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Selected Image from Desktop

  return (
    <React.Fragment>
      <div id="classRoutine" className="my-4">
        {/* Section Title */}
        <div className="teachers-title mt-4">
          <h3 className="bg-[#79929C] text-white font-medium text-md p-4 mb-3">
            Nội quy lớp học
          </h3>
        </div>

        <div className="border vertical-scrollMain bg-[#DBE8E960]">
          <table className="border-collapse w-full vertical-scroll">
            <thead>
              <tr className="bg-[#BBCDCD60]">
                <th className="p-2 text-start w-3/12">Ngày phát hành</th>
                <th className="p-2 text-start w-5/12">Chú ý</th>
                <th className="p-2 text-start w-2/12">Xem [PDF]</th>
                <th className="p-2 text-start w-2/12">Tải xuống [PDF]</th>
                <th className="p-2 text-start w-1/12">Chỉnh sửa</th>
                <th className="p-2 text-start w-1/12">Xóa</th>
              </tr>
            </thead>

            <tbody>
              {data?.data?.data.map((row) => (
                <tr key={row.id} className="border-b">
                  <td className="p-2">
                    <div className="flex items-center pt-2">
                      <i>
                        <BsFillCalendarDateFill />
                      </i>
                      <span className="py-2">{row.date}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" cursor-pointer text-end mt-4 text-white">
          <a
            href="##"
            onClick={() => {
              handleModalOpen();
              setIsCreate(true);
            }}
            className="bg-[#244c63ad] px-4 my-2 w-44 py-2 border"
          >
            Tạo mới
          </a>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal shadow absolute top-10  bg-[#FFFFFF]  border p-14 max-w-96 ">
            <div className="modal-content">
              <span
                className="close cursor-pointer border bg-[#111] px-4 text-end py-1 text-white absolute right-2 top-2"
                onClick={handleModalClose}
              >
                <a href="##">
                  <i className=" py-8 text-2xl ">
                    <RxCross2 />
                  </i>
                </a>
              </span>
              {/* form content goes here */}
              <div className="mt-10">
                <form>
                  <div className="form-group flex flex-wrap my-2 items-center ">
                    <label htmlFor="title" className="pr-4 w-44">
                      Nội quy lớp học
                    </label>
                    <input
                      className="outline-none px-4 py-2 bg-[#F3F3F3]"
                      type="text"
                      id="title"
                      name="title"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Nội quy lớp học "
                    />
                  </div>
                  <div className="form-group flex flex-wrap my-2 items-center">
                    <label htmlFor="date" className="pr-4 w-44">
                      Ngày phát hành
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="outline-none px-4 py-2 bg-[#F3F3F3]"
                    />
                  </div>

                  <div className="form-group my-4">
                    <label htmlFor="image" className="pr-4 w-32">
                      Nội quy lớp học :
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      accept="image/*,.pdf, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                      selected={selectedImage}
                      onChange={handleFileChange}
                    />
                  </div>

                  {/* Add More Content Button */}
                  <div className="text-center mt-14 text-black">
                    <button
                      onClick={() => {
                        if (isCreate) {
                          handleCreate();
                        }
                      }}
                      type="submit"
                      className="bg-[#c5dfe77a] px-12 py-4"
                    >
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && <div className="overlay"></div>}
    </React.Fragment>
  );
};

export default ClassRoutine;
