import React, { useEffect, useState } from "react";
import "./Teachers.css";
import { NavLink } from "react-router-dom";
import { getAllteacher } from "../apis/newApi";

const Teachers = () => {
  const [teacher, setteacher] = useState([]);
  const fetchData = async () => {
    try {
      const about = await getAllteacher();
      setteacher(about);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div id="teachers">
        <div className="teachers-title mt-5">
          <h3 className="bg-[#79929C] text-white font-medium text-md p-4">
            giáo viên của chúng tôi
          </h3>
        </div>
        <div className="teachers-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {teacher?.data?.data.map((teacher, index) => (
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
                <h4 className="font-medium text-md">Họ tên :{teacher.name}</h4>
                <h5>Chức vụ: {teacher.chucvu}</h5>
                <h6>Trường đại học HN</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="my-8 text-end">
          <NavLink
            to="/administration/teachers"
            className="py-2 px-5 text-sm underline text-white font-medium bg-[#79929c]"
          >
            Tất cả giáo viên
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Teachers;
