import React from "react";
import "./Footer.css";

import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <React.Fragment>
      <div id="footer" className="bg-[#FFFFFF] mt-8 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          <div className="bg-[#EDEDED45] p-4 rounded">
            <picture className="flex justify-center flex-col items-center">
              <img src="/assets/logo.png" alt="" />
            </picture>
            <div>
              <h2 className="max-[767px]:text-lg md:text-xl font-semibold mt-4">
                Trường đại học{" "}
              </h2>
              <h4 className="max-[767px]:text-sm md:text-md">
                Bưu điện: HN, Quận:{" "}
              </h4>
            </div>
            <div>
              <h3 className="text-md max-[767px]:text-sm">Thành lập: 1952 </h3>
              <h3 className="text-md max-[767px]:text-sm">
                Số điện thoại:054684654654
              </h3>
            </div>
          </div>

          <div className="bg-[#EDEDED45] p-4 rounded pt-8">
            <h3 className="text-xl font-semibold pb-4">Liên hệ:</h3>
            <h5>TP:HN </h5>
            <h5 className="py-1">Quận:HN</h5>
            <h5>Email: doan@gmail.com</h5>
            <h5 className="py-1">
              Di động: <span className="number-font">01715672171</span>
            </h5>
            <h5>Trang web: doan</h5>
          </div>

          <div className="bg-[#EDEDED45] p-4 rounded pt-8">
            <div>
              <h3 className="text-xl font-semibold pb-4">
                Các liên kết quan trọng:
              </h3>
              <ul className="pl-4">
                <li className="list-disc underline">
                  <a href="http://www.HN.gov.bd/">Thông tin quốc gia HN</a>
                </li>
                <li className="list-disc underline py-1">
                  <a href="http://dme.gov.bd/">Sở Giáo dụcHN</a>
                </li>
                <li className="list-disc underline">
                  <a href="http://banbeis.gov.bd/">
                    Cục Thông tin và Thống kê Giáo dục HN
                  </a>
                </li>
                <li className="list-disc underline py-1">
                  <a href="https://www.thakurgaon.gov.bd/">
                    Văn phòng Quản trị viên HN
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="mt-2 flex gap-4">
                <li className="p-2 bg-[#F1EFEF] text-black text-2xl">
                  <i>
                    <FaFacebook />
                  </i>
                </li>
                <li className="p-2 bg-[#F1EFEF] text-black text-2xl">
                  <i>
                    <AiFillTwitterSquare />
                  </i>
                </li>
                <li className="p-2 bg-[#F1EFEF] text-black text-2xl">
                  <i>
                    <FaYoutube />
                  </i>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#EDEDED45] p-4 rounded pt-8">
            <div>
              <h3 className="text-xl font-semibold pb-4">Liên kết bảng:</h3>
              <ul className="pl-4">
                <li className="gạch chân underline đĩa">
                  <a href="http://bmeb.gov.bd/">Hội đồng Giáo dụcHN của HN</a>
                </li>
                <li className="list-disc underline py-1">
                  <a href="http://www.educationboard.gov.bd/">
                    Ủy ban Giáo dục Quốc gia
                  </a>
                </li>
                <li className="gạch chân underline đĩa">
                  <a href="http://www.nctb.gov.bd/">
                    Hội đồng Sách giáo khoa và Chương trình giảng dạy Quốc gia
                  </a>
                </li>
                <li className="list-disc underline py-1">
                  <a href="https://moedu.gov.bd/">Bộ Giáo dục</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
