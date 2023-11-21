import React, { useState } from "react";
import "./Events.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RxCross2 } from "react-icons/rx";

const Events = () => {
  const eventsData = [];

  const handleUpdate = (index) => {};

  const handleRemove = (index) => {
    console.log("Remove clicked for index:", index);
  };

  // Modal popup For add Events
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Selected Image from Desktop
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Seleceted Date
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <React.Fragment>
      <div className="detailEvents-title mt-4">
        <h3 className="bg-[#79929C] text-white font-medium text-md p-4 mb-2">
          sự kiện
        </h3>
      </div>
      <div className="mb-4 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {eventsData.map((event) => (
          <div key={event.id} className="events-inner mt-2 shadow bg-[#FAFAFA]">
            <picture>
              <img src={event.imageSrc} alt="events" />
            </picture>
            <h3 className="p-4 text-md font-medium">{event.title}</h3>
            <p className="number-font font-normal py-2 px-4">{event.date}</p>
            <div className="py-4 text-end pr-2">
              <a
                href="##"
                className="px-4 text-sm py-1 underline text-white font-medium bg-[#B4B4B3]"
              >
                chi tiết
              </a>
            </div>
            <div className="flex mt-3 justify-end flex-wrap">
              <button
                className="bg-[#EBE4D1] mr-2 text-black px-6 mb-2 py-1"
                onClick={() => {
                  handleUpdate();
                  handleModalOpen();
                }}
              >
                Cập nhật
              </button>
              <button
                className="bg-[#CE5A67] mr-2 text-white px-6 mb-2 py-1"
                onClick={() => handleRemove()}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Content Button */}
      <div className="mb-4 cursor-pointer text-end mt-4 text-white">
        <a
          href="##"
          onClick={handleModalOpen}
          className="bg-[#244c63ad] px-4 my-2 w-44 py-2 border"
        >
          Tạo mới{" "}
        </a>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal shadow absolute top-10  bg-[#FFFFFF]  border p-14 max-w-96">
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
                    <label htmlFor="title" className="pr-4 w-32">
                      Tên của sự kiện:
                    </label>
                    <input
                      className="outline-none px-4 py-2 bg-[#F3F3F3]"
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Tên của sự kiện"
                    />
                  </div>
                  <div className="form-group flex flex-wrap my-2 items-center ">
                    <label htmlFor="title" className="pr-4 w-32">
                      Về sự kiện:
                    </label>
                    <input
                      className="outline-none  px-4 py-2 bg-[#F3F3F3]"
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Về sự kiện"
                    />
                  </div>

                  <div className="form-group flex flex-wrap my-2 items-center">
                    <label htmlFor="date" className="pr-4 w-32">
                      Ngày:
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Ngày"
                      className="outline-none px-4 py-2 bg-[#F3F3F3]"
                    />
                  </div>
                  <div className="form-group my-4">
                    <label htmlFor="image" className="pr-4 w-32">
                      URL
                    </label>
                    <input
                      src={selectedImage}
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="text-center mt-14 text-black">
                    <button type="submit" className="bg-[#c5dfe77a] px-12 py-4">
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

export default Events;
