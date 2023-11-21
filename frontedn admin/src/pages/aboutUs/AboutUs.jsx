import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getLoinoi, updateLoinoi } from "../../apis/LoiNoiApi";

const AboutUs = () => {
  const [text, setText] = useState("");
  const [allAbout, setAllAbout] = useState([]);
  const handleUpdate = async (id) => {
    const respons = await updateLoinoi(id, text);
    const newres = await getLoinoi();
    setAllAbout(newres);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLoinoi();
        setAllAbout(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error if needed
      }
    };

    fetchData();
  }, []);

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <React.Fragment>
      <div id="aboutUs" className="bg-[#FFFFFF80] ">
        <div className="aboutUS-title">
          <h3 className="bg-[#79929C] text-white font-medium text-md mt-4 py-4 pl-4">
            Lời nói của chúng tôi
          </h3>
          {allAbout?.data?.data?.map((item, index) => (
            <>
              <li className="py-2 list-none mx-2" key={index}>
                <div className="currentNewsList my-2 flex justify-between flex-wrap">
                  <p>{item.content}</p>
                  <button
                    // onClick={() => handleDelete(item._id)} // Pass the item ID for deletion
                    className="bg-[#CE5A67] text-white px-4 mt-2 py-1"
                  >
                    Xóa bỏ
                  </button>
                </div>
              </li>
              <div className="my-4 flex flex-col mt-8">
                <h4 className="font-semibold text-lg underline">
                  Cập nhật lại liên hệ
                </h4>

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
                      // Pass the current item's ID for updating
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

export default AboutUs;
