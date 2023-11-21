import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getLoinoi, getmuctieu, updateLoinoi } from "../../apis/LoiNoiApi";

const AimAndObjective = () => {
  const [text, setText] = useState("");
  const [aimAndObjective, setAimAndObjective] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respon = await getmuctieu();
        setAimAndObjective(respon);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect once on mount

  const handleChange = (value) => {
    setText(value);
  };
  const handleUpdate = async (id) => {
    const respons = await updateLoinoi(id, text);
    const newres = await getLoinoi();
    setAimAndObjective(newres);
  };

  return (
    <React.Fragment>
      <div id="aboutUs" className="bg-[#FFFFFF80] ">
        <div className="aboutUS-title">
          <h3 className="bg-[#79929C] text-white font-medium text-md mt-4 py-4 pl-4">
            Tổ chức
          </h3>
          {aimAndObjective?.data?.data.map((item, index) => (
            <>
              <li className="py-2 list-none mx-2" key={index}>
                <div className="currentNewsList my-2 flex justify-between flex-wrap">
                  <p>{item.content}</p>
                  <button className="bg-[#CE5A67] text-white px-4 mt-2 py-1">
                    Xóa bỏ
                  </button>
                </div>
              </li>
              <div className="my-4 flex flex-col mt-8">
                <h4 className="font-semibold text-lg underline">Tạo mới</h4>

                {/* Text Area to add news */}
                <div className=" my-10 ">
                  <ReactQuill
                    className="h-44"
                    value={text}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-4 text-black">
                  <button
                    onClick={() => {
                      handleUpdate(item._id);
                    }}
                    type="submit"
                    className="bg-[#c5dfe77a] px-6 py-2 mb-2"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AimAndObjective;
