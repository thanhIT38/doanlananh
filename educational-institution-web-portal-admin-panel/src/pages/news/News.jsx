import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createNew, createNewpdf, getAllnew } from "../../apis/newApi";

const News = () => {
  const [filepdf, setFilePdf] = useState(null);
  const [titlePdf, setTitlePdf] = useState("");
  const [showTitle, setShowTitle] = useState([]);
  const [title, setTitle] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePdf(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleChangeTitle = (e) => {
    setTitlePdf(e.target.value);
  };

  const handleCreateNewCurrent = async () => {
    try {
      const data = { title };
      const newCurrent = await createNew(data);
      // Update showTitle after creating newCurrent
      const updatedData = await getAllnew();
      setShowTitle(updatedData);
    } catch (error) {
      console.error("Error creating new:", error);
    }
  };

  const handleNewPdf = async () => {
    try {
      const data = { titlePdf, filepdf };
      await createNewpdf(data);
    } catch (error) {
      console.error("Error creating new PDF:", error);
    }
  };

  const handleChange = (value) => {
    setTitle(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allnewcurent = await getAllnew();
        setShowTitle(allnewcurent);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <React.Fragment>
      <div id="NewsAdminPanel" className="bg-[#FFFFFF]">
        <div className="teachers-title">
          <h3 className="bg-[#79929C] text-white font-medium text-md mt-4 py-4 pl-4">
            tin tức khẩn cấp
          </h3>
        </div>

        {/* Current Important News Area */}
        <h4 className="font-medium text-lg mt-8 underline pl-4">
          Tin tức hiện tại:
        </h4>
        {console.log(showTitle)}
        <div className="currentNews pl-4">
          {showTitle?.data?.data.map((item, index) => (
            <li className="list-none mx-2" key={index}>
              <div className="currentNewsList my-2 flex justify-between flex-wrap">
                <a href="##">{item.title}</a>
                <button className="bg-[#CE5A67] text-white px-4 py-1">
                  Xóa bỏ
                </button>
              </div>
            </li>
          ))}
        </div>

        {/* Add New Important News Area */}
        <div className="addNewNews flex flex-col pl-4 lg:pl-0">
          <h4 className="font-medium text-lg mt-8 py-4 underline">
            Kết nối TIN TứC Khẩn Cấp mới:
          </h4>

          {/* Text Area to add news */}
          <div>
            <ReactQuill
              className="h-44"
              value={title}
              onChange={handleChange}
            />
          </div>

          <div className="mt-20 text-black">
            <button
              onClick={handleCreateNewCurrent}
              type="submit"
              className="bg-[#c5dfe77a] px-6 py-2 mb-2"
            >
              Kết nối
            </button>
          </div>
        </div>

        {/* Add PDF Area */}
        <div className="mt-10 flex flex-col pl-4 lg:pl-0">
          <h4 className="font-medium text-lg py-4 underline">Kết nối PDF:</h4>

          <div className="form-group flex flex-wrap my-2 items-center ">
            <label htmlFor="title" className="pr-4 w-32">
              Tin tức về tin tức:
            </label>
            <input
              className="outline-none px-4 py-2 bg-[#F3F3F3]"
              type="text"
              id="title"
              value={titlePdf}
              onChange={(e) => {
                handleChangeTitle(e);
              }}
              name="title"
              placeholder="Tiêu đề tin tức"
            />
          </div>

          <div className="form-group my-4">
            <label htmlFor="image" className="pr-4 w-32">
              PDF của tin tức:
            </label>
            <input
              src={filepdf}
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="mt-8 text-black">
            <button
              onClick={handleNewPdf}
              className="bg-[#c5dfe77a] px-6 py-2 mb-2"
            >
              Kết nối
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default News;
