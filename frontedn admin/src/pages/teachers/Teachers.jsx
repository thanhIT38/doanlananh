import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  createteacher,
  deleteteacher,
  getAllteacher,
  updateteacher,
} from "../../apis/newApi";

const Teachers = () => {
  // State variables for each input field
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showquanly, setShowquanly] = useState([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState(null);
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  // Event handler for input changes
  const handleInputChange = (event, setterFunction) => {
    setterFunction(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allnewcurent = await getAllteacher();
        setShowquanly(allnewcurent);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async (index) => {
    const update = await updateteacher(index, {
      phoneNumber,
      position,
      selectedImage,
      name,
    });
    const updatedData = await getAllteacher();
    setShowquanly(updatedData);
    setModalOpen(false);
  };

  const handleRemove = async (index) => {
    await deleteteacher(index);
    const ud = getAllteacher();
    setShowquanly(ud.data);
  };

  // Modal popup For add Events
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleCreate = async () => {
    const data = { name, position, phoneNumber, selectedImage };
    const respon = await createteacher(data);
    const ud = getAllteacher();
    setShowquanly(ud);
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

  return (
    <div>
      {isModalOpen && <div className="overlay"></div>}
      <div id="teachers">
        <div className="teachers-title mt-4">
          <h3 className="bg-[#79929C] text-white font-medium text-md p-4">
            Giáo viên
          </h3>
        </div>

        <div className="teachers-card grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {showquanly?.data?.data.map((teacher, index) => (
            <div
              key={index}
              className="teachers-card p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center"
            >
              <div className="teachers-card-img my-4">
                <picture>
                  <img src={teacher.image} alt="profile" />
                </picture>
              </div>
              <div className="teachers-card-identity">
                <h4 className="font-medium text-md">{teacher.name}</h4>
                <h5>Chức vụ :{teacher.chucvu}</h5>
                <h5>Điện thoại di động: {teacher.phone}</h5>
                <div className="flex justify-between mt-3">
                  <button
                    className="bg-[#244c63ad] text-white px-4 py-1"
                    onClick={() => {
                      handleModalOpen();
                      setSelectedTeacherId(teacher._id);
                      setIsUpdate(true);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="bg-[#CE5A67] text-white px-4 py-1"
                    onClick={() => handleRemove(teacher._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Content Button */}
        <div className="mb-4 cursor-pointer text-end mt-4 text-white">
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
                  {/* Name input */}
                  <div className="form-group flex flex-wrap my-2 items-center">
                    <label htmlFor="name" className="pr-4 w-32">
                      Name
                    </label>
                    <input
                      className="outline-none px-4 py-2 bg-[#F3F3F3]"
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => handleInputChange(e, setName)}
                    />
                  </div>

                  {/* Position input */}
                  <div className="form-group flex flex-wrap my-2 items-center">
                    <label htmlFor="position" className="pr-4 w-32">
                      Chức vụ:
                    </label>
                    <input
                      className="outline-none px-4 py-2 bg-[#F3F3F3]"
                      type="text"
                      id="position"
                      name="position"
                      placeholder="Chức vụ"
                      value={position}
                      onChange={(e) => handleInputChange(e, setPosition)}
                    />
                  </div>

                  {/* Phone number input */}
                  <div className="form-group flex flex-wrap my-2 items-center">
                    <label htmlFor="phoneNumber" className="pr-4 w-32">
                      Số điện thoại:
                    </label>
                    <input
                      className="outline-none px-4 py-2 bg-[#F3F3F3]"
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Số điện thoại"
                      value={phoneNumber}
                      onChange={(e) => handleInputChange(e, setPhoneNumber)}
                    />
                  </div>

                  {/* Image input */}
                  <div className="form-group my-4">
                    <label htmlFor="image" className="pr-4 w-32">
                      Hình ảnh
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>

                  {/* Submit button */}
                  <div className="text-center mt-14 text-black">
                    <button
                      onClick={() => {
                        if (isCreate) {
                          handleCreate();
                        }
                        if (isUpdate) {
                          handleUpdate(selectedTeacherId);
                        }
                      }}
                      type="button"
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
    </div>
  );
};

export default Teachers;
