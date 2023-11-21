import React, { useState } from "react";
import "../banner/Banner.css";
import { NavLink } from "react-router-dom";

const NoticeBoard = () => {
  const notices = [
    {
      date: "Ngày 3 tháng 11",
      description: "Chương trình nhân dịp Lễ kỷ niệm HN",
      year: "২০২৩",
    },
    {
      date: "Ngày 3 tháng 11",
      description: "Chương trình nhân dịp Lễ kỷ niệm HN",
      year: "২০২৩",
    },
    {
      date: "Ngày 3 tháng 11",
      description: "Chương trình nhân dịp Lễ kỷ niệm HN",
      year: "২০২৩",
    },
  ];

  return (
    <React.Fragment>
      <div className="relative pb-12 sm:pb-16 md:pb-16 lg:pb-16 bg-[#FFFFFF] banner-right mt-4 sm:mt-0 shadow-lg">
        <h2 className="bg-[#79929C] text-center mb-2 py-4 text-white text-md shadow-lg">
          Bảng ghi chú
        </h2>

        <div className="banner-rightNotice max-h-72 sm:max-h-72 md:max-h-72 lg:max-h-44 xl:max-h-72">
          {notices.map((notice, index) => (
            <div
              className="bg-[#F1EFEF] flex m-2 cursor-pointer items-center"
              key={index}
            >
              <div className="notice-date flex items-center justify-center py-2 flex-col text-center text-white bg-[#79929C]">
                <h5 className="border-b number-font">{notice.date}</h5>
                <h5 className="number-font">{notice.year}</h5>
              </div>
              <div className="items-center notice-desc flex px-4 py-2">
                <h4>{notice.description}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 absolute bottom-1 right-0 mb-3 mr-2 text-end">
          <NavLink
            to="/academics/notice"
            className="py-2 px-5 text-sm  underline text-white font-medium bg-[#79929c]"
          >
            Tất cả các thông báo
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoticeBoard;
