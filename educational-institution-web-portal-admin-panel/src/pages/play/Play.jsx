import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Play = () => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  const play = [];

  return (
    <React.Fragment>
      <div id="aboutUs" className="bg-[#FFFFFF80] ">
        <div className="aboutUS-title">
          <h3 className="bg-[#79929C] text-white font-medium text-md mt-4 py-4 pl-4">
            Các hoạt động
          </h3>
          {play.map((text, index) => (
            <li className="py-2 list-none mx-2" key={index}>
              <div className="currentNewsList my-2 flex justify-between flex-wrap">
                <p>{text}</p>
                <button className="bg-[#CE5A67] text-white px-4 mt-2 py-1">
                  Xóa
                </button>
              </div>
            </li>
          ))}

          <div className="my-4 flex flex-col mt-8 lg:ml-0 ml-2">
            <h4 className="font-semibold text-lg underline">Tạo mới</h4>

            {/* Text Area to add news */}
            <div className=" my-10 ">
              <ReactQuill
                className="h-44"
                value={text}
                onChange={handleChange}
              />
            </div>

            <div className="mt-14 lg:mt-4 text-blac ml-2">
              <button type="submit" className="bg-[#c5dfe77a] px-6 py-2 mb-2">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Play;
