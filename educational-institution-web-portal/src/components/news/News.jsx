import React, { useEffect, useRef } from "react";
import "./News.css";
import { NavLink } from "react-router-dom";
import { getAllnew } from "../apis/newApi";

const News = () => {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseOut = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <React.Fragment>
      <div id="news" className="bg-[#FFFFFF] flex w-full my-2 items-center">
        <div className="news-header">
          <h4 className="bg-[#79929C] text-white p-2 mr-1 flex">
            <span className="hidden md:block gulo">Tin Hot</span>
          </h4>
        </div>
        {/* eslint-disable-next-line */}
        <marquee
          ref={marqueeRef}
          behavior="scroll"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          direction="left"
        >
          <div className="flex">
            <li className="mx-2 list-square">
              <a href="##" className="">
                Chương trình nhân dịp kỷ niệm HN
              </a>
            </li>
            <li className="mx-2">
              <a href="##" className="list-">
                Về việc bổ nhiệm bảy giáo viên mới trong trường.
              </a>
            </li>
            <li className="mx-2">
              <a href="##" className="list-">
                Bài thi tuyển sinh-2023 Bằng khen và Tổng quát.
              </a>
            </li>
          </div>
        </marquee>
        <NavLink
          to="/academics/notice"
          className="bg-[#79929C] p-2 text-white flex underline"
        >
          tất cả{" "}
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default News;
