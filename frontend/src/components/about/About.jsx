import React, { useEffect, useState } from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import { getmuctieu } from "../apis/LoiNoiApi";
import { getAllteacher } from "../apis/newApi";

const About = () => {
  const [profiles, setprofiles] = useState([]);
  const fetchData = async () => {
    try {
      const about = await getmuctieu();
      setprofiles(about);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <div id="about" className="mt-5">
        <div className="about-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          <div className="about-inner grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 col-span-2 ">
            <div className="bg-[#FFFFFF90] my-3">
              <div className="about-title bg-[#79929C] pl-4 py-4 text-white text-lg">
                <h3>Giới thiệu về Trường</h3>
              </div>
              <div className="about-description p-4">
                {profiles?.data?.data.map((item) => {
                  return <p>{item.content}</p>;
                })}
              </div>

              <div className="about-title bg-[#79929C] mt-4 pl-4 py-4 text-white text-lg">
                <h3>Mục đích và mục tiêu của tổ chức</h3>
              </div>
              <div className="about-description p-4">
                {profiles?.data?.data.map((item) => {
                  return <p>{item.content}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
