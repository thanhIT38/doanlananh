import React, { useEffect, useState } from "react";
import "./Contact.css";
import { getAllcontact, updatecontact } from "../../apis/newApi";

const Contact = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const handleInputChange = (event, setterFunction) => {
    setterFunction(event.target.value);
  };
  const handleUpdate = async (index) => {
    const update = await updatecontact(index, {
      address,
      name,
      selectedImage,
    });

    const updatedData = await getAllcontact();
    setSchoolData(updatedData);
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allnewcurent = await getAllcontact();
        setSchoolData(allnewcurent);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // You can send this data to your server or perform other actions
  };

  // ... (your other code)

  return (
    <React.Fragment>
      <div id="contactAdminPanel" className="bg-[#FFFFFF]">
        {/* Section title */}
        <div className="teachers-title mt-4">
          <h3 className="bg-[#79929C] text-white font-medium text-md p-4 mb-3">
            Liên hệ
          </h3>
        </div>

        <div className="contact-inner grid grid-cols-1 sm:grid-cols-2 gap-4 flex items-center">
          {schoolData?.data?.data.map((school, index) => (
            <div
              key={index}
              className="pl-2 py-5 rounded flex justify-center flex-col"
              onClick={() => setSelectedTeacherId(school._id)}
            >
              <picture className="flex justify-center sm:justify-start">
                <img src={school.logo} alt="" />
              </picture>
              <div>
                <h2 className="max-[767px]:text-lg md:text-xl font-semibold mt-4">
                  {school.name}
                </h2>
                <h4 className="max-[767px]:text-sm md:text-md">
                  {school.location}
                </h4>
              </div>
              <hr className="mt-4 mr-4" />
            </div>
          ))}
        </div>

        {/*  Update Contact Area */}
        <div className="updateAdminContactArea flex ml-4 lg:ml-0">
          <div className="mt-10">
            {/* Title */}
            <h3 className="underline font-semibold text-lg mt-4 py-4 ">
              cập nhật liên hệ
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Your form fields go here */}
              <div className="form-group flex my-2 items-center ">
                <label htmlFor="name" className="pr-4 pl-2 lg:pl-0 w-44">
                  Tên:
                </label>
                <input
                  className="outline-none border w-full px-4 mr-2 py-2 bg-[#F3F3F3]"
                  type="text"
                  id="name"
                  placeholder="Tên"
                  name="name"
                  value={name}
                  onChange={(e) => handleInputChange(e, setName)}
                />
              </div>

              <div className="form-group flex my-2 items-center ">
                <label htmlFor="location" className="pr-4 pl-2 lg:pl-0 w-44">
                  Nơi tổ chức:
                </label>
                <input
                  className="outline-none border w-full px-4 mr-2 py-2 bg-[#F3F3F3]"
                  type="text"
                  id="location"
                  placeholder="Tổ chức"
                  name="address"
                  value={address}
                  onChange={(e) => handleInputChange(e, setAddress)}
                />
              </div>

              <div className="form-group my-4">
                <label htmlFor="logo" className="w-44 pr-4 pl-2 lg:pl-0">
                  Logo của tổ chức
                </label>
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              {/* Add more fields as needed */}

              <div className="mt-8 text-center mb-2 text-black">
                <button
                  onClick={() => {
                    handleUpdate(selectedTeacherId);
                  }}
                  type="submit"
                  className="bg-[#c5dfe77a] px-12 py-4"
                >
                  Thay đổi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
