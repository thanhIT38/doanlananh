import React, { useState } from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom";
import { TbBuildingBank, TbLogout2 } from "react-icons/tb";
import { BsCaretDownFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const [isAdminDropdownOpen1, setIsAdminDropdownOpen1] = useState(false);
  const [isAdminDropdownOpen2, setAdminDropdownOpen2] = useState(false);
  const [isAdminDropdownOpen3, setAdminDropdownOpen3] = useState(false);
  const [isAdminDropdownOpen4, setAdminDropdownOpen4] = useState(false);
  const [isAdminDropdownOpen5, setAdminDropdownOpen5] = useState(false);
  const [isAdminDropdownOpen6, setAdminDropdownOpen6] = useState(false);
  const [isAdminDropdownOpen7, setAdminDropdownOpen7] = useState(false);

  const toggleAdminDropdown = () => {
    setIsAdminDropdownOpen(!isAdminDropdownOpen);
  };

  const toggleAdminDropdown1 = () => {
    setIsAdminDropdownOpen1(!isAdminDropdownOpen1);
  };

  const toggleAdminDropdown2 = () => {
    setAdminDropdownOpen2(!isAdminDropdownOpen2);
  };

  const toggleAdminDropdown3 = () => {
    setAdminDropdownOpen3(!isAdminDropdownOpen3);
  };

  const toggleAdminDropdown4 = () => {
    setAdminDropdownOpen4(!isAdminDropdownOpen4);
  };

  const toggleAdminDropdown5 = () => {
    setAdminDropdownOpen5(!isAdminDropdownOpen5);
  };

  const toggleAdminDropdown6 = () => {
    setAdminDropdownOpen6(!isAdminDropdownOpen6);
  };

  const toggleAdminDropdown7 = () => {
    setAdminDropdownOpen7(!isAdminDropdownOpen7);
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // New Side bar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const removeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <React.Fragment>
      {/* Large Device Sidebar */}
      <div
        id="adminSidebar"
        className="adminSidebar hidden lg:block relative mr-5 shadow mt-2"
      >
        <div className="p-8 top-34">
          {/* 1st Sidebar Nav Item */}
          <div
            onClick={toggleAdminDropdown}
            className={`adminNavbar-link ${
              isAdminDropdownOpen ? "active" : ""
            } px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Trang đầu tiên
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li className="mb-1 ml-4">
                  <Link to="/news">Tin tức khẩn cấp</Link>
                </li>
                <li onClick={removeSidebar} className="mb-1 ml-4">
                  <Link to="/about-us">Lời nói của chúng tôi</Link>
                </li>
                <li onClick={removeSidebar} className="mb-1 ml-4">
                  <Link to="/aim-objective">Mục tiêu</Link>
                </li>
              </ul>
            </div>
          )}

          {/* 2nd Sidebar Nav Item */}
          <div
            onClick={toggleAdminDropdown1}
            className={`adminNavbar-link ${
              isAdminDropdownOpen1 ? "active" : ""
            } mt-1 px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Hành chính
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen1 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li className=" mb-1 ml-4">
                  <Link to="/management-committee"> quản lý</Link>
                </li>
                <li className=" mb-1 ml-4">
                  <Link to="/president-message">Tổ chức</Link>
                </li>
                <li className=" mb-1 ml-4">
                  <Link to="/principal-message">Hiệu trưởng</Link>
                </li>
                <li className=" mb-1 ml-4">
                  <Link to="/teachers">Giáo viên</Link>
                </li>
                <li className=" mb-1 ml-4">
                  <Link to="/workers">Nhân viên văn phòng</Link>
                </li>
              </ul>
            </div>
          )}

          {/* 3rd Sidebar Nav Item */}
          <div
            onClick={toggleAdminDropdown2}
            className={`adminNavbar-link ${
              isAdminDropdownOpen2 ? "active" : ""
            } mt-1 px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Học thuật
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen2 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li className=" mb-1 ml-4">
                  <Link to="/class-routine">Nội quy lớp học</Link>
                </li>
                <li className=" mb-1 ml-4">
                  <Link to="/exam-routine">Thử nghiệm thói quen</Link>
                </li>
                <li className=" mb-1 ml-4">
                  <Link to="/notice">Để ý</Link>
                </li>
                <li className=" mb-1 ml-4">
                  <Link to="/syllabus">giáo trình</Link>
                </li>
              </ul>
            </div>
          )}

          {/* 4rd Sidebar Nav Item */}

          {/* 5th Sidebar Nav Item */}
          <div
            onClick={toggleAdminDropdown3}
            className={`adminNavbar-link ${
              isAdminDropdownOpen3 ? "active" : ""
            } mt-1  px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Nhận vào
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen3 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li className=" mb-1 ml-4">
                  <Link to="/admission-notice">Tuyển vào</Link>
                </li>
                <li className=" mb-1 ml-4">
                  <Link to="/admission-exam-syllabus">
                    Bài kiểm tra đầu vào
                  </Link>
                </li>
                <li className=" mb-1 ml-4">
                  <Link to="/list-of-selected-students-seeking-admission">
                    Nhận vào
                  </Link>
                </li>
                <li className=" mb-1 ml-4">
                  <Link to="/list-of-selected-students-waiting-admission">
                    Đang chờ
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* 6th Sidebar Nav Item */}
          <div
            onClick={toggleAdminDropdown4}
            className={`adminNavbar-link ${
              isAdminDropdownOpen4 ? "active" : ""
            } mt-1 px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Kết quả
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen4 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li className=" mb-1 ml-4">
                  <Link to="/school-result">Kết quả trường học</Link>
                </li>
              </ul>
            </div>
          )}

          {/* 7th Sidebar Nav Item */}
          <div
            onClick={toggleAdminDropdown5}
            className={`adminNavbar-link ${
              isAdminDropdownOpen5 ? "active" : ""
            } mt-1 px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Phòng trưng bày
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen5 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li className=" mb-1 ml-4">
                  <Link to="/events">Sự kiện</Link>
                </li>
              </ul>
            </div>
          )}

          {/* 8th Sidebar Nav Item */}
          <div
            onClick={toggleAdminDropdown6}
            className={`adminNavbar-link ${
              isAdminDropdownOpen6 ? "active" : ""
            } mt-1 px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Giao tiếp
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen6 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li className=" mb-1 ml-4">
                  <Link to="/contact">Giao tiếp</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Logout Icon */}
          <div className="absolute bottom-4 left-4 mt-4 text-center">
            <ul>
              <li className="flex">
                <a href="##" className="flex items-center">
                  <i className="pr-2 text-2xl">
                    <TbLogout2 />
                  </i>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Responsive Sidebar */}
      <div className="adminResponsiveSidebar block lg:hidden">
        <div className={`menu-bar ${isSidebarOpen ? "open" : ""}`}>
          <div className="menu-icon" onClick={toggleSidebar}>
            <div
              className={`menu-icon ${menuVisible ? "cross" : ""}`}
              onClick={toggleMenu}
            >
              {menuVisible ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </div>

        <div
          className={`sidebar ${
            isSidebarOpen ? "open" : ""
          } ml-2 p-5 pt-14  mt-2`}
        >
          {/* Dropdown Sidebar Menu 1 */}
          <div
            onClick={toggleAdminDropdown}
            className={`adminNavbar-link ${
              isAdminDropdownOpen ? "active" : ""
            } px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <button className="close-button" onClick={toggleSidebar}>
              <span>
                <FiX />
              </span>
            </button>
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>
              Trang đầu tiên
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li onClick={removeSidebar} className="mb-1 ml-4">
                  <Link to="/news">tin tức khẩn cấp</Link>
                </li>
                <li onClick={removeSidebar} className="mb-1 ml-4">
                  <Link to="/about-us"></Link>
                </li>
                <li onClick={removeSidebar} className="mb-1 ml-4">
                  <Link to="/aim-objective">Mục tiêu</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Dropdown Sidebar Menu 2 */}
          <div
            onClick={toggleAdminDropdown1}
            className={`adminNavbar-link ${
              isAdminDropdownOpen1 ? "active" : ""
            } px-4 mt-1 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Hành chính
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen1 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/management-committee"> quản lý</Link>
                </li>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/teachers">Giáo viên</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Dropdown Sidebar Menu 3 */}
          <div
            onClick={toggleAdminDropdown2}
            className={`adminNavbar-link ${
              isAdminDropdownOpen2 ? "active" : ""
            } mt-1 px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Học thuật
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen2 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/class-routine">Nội quy lớp học</Link>
                </li>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/exam-routine">Thử nghiệm thói quen</Link>
                </li>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/notice">Để ý</Link>
                </li>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/syllabus">giáo trình</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Dropdown Sidebar Menu 4 */}
          <div
            onClick={toggleAdminDropdown7}
            className={`adminNavbar-link ${
              isAdminDropdownOpen7 ? "active" : ""
            } mt-1 px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              সহপাঠ
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen7 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/debate-competition">Tranh luận</Link>
                </li>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/play">Hoạt động</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Dropdown Sidebar Menu 5 */}
          <div
            onClick={toggleAdminDropdown3}
            className={`adminNavbar-link ${
              isAdminDropdownOpen3 ? "active" : ""
            } mt-1  px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              ভর্তি
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen3 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/admission-notice">Tuyển vào</Link>
                </li>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/admission-exam-syllabus">
                    Bài kiểm tra đầu vào
                  </Link>
                </li>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/list-of-selected-students-seeking-admission">
                    Nhận vào
                  </Link>
                </li>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/list-of-selected-students-waiting-admission">
                    Đang chờ
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Dropdown Sidebar Menu 6 */}
          <div
            onClick={toggleAdminDropdown4}
            className={`adminNavbar-link ${
              isAdminDropdownOpen4 ? "active" : ""
            } mt-1 px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Kết quả
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen4 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/school-result">Kết quả trường học</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Dropdown Sidebar Menu 7 */}
          <div
            onClick={toggleAdminDropdown5}
            className={`adminNavbar-link ${
              isAdminDropdownOpen5 ? "active" : ""
            } mt-1 px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Phòng trưng bày
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen5 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li onClick={removeSidebar} className=" mb-1 ml-4">
                  <Link to="/events">Sự kiện</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Dropdown Sidebar Menu 8 */}
          <div
            onClick={toggleAdminDropdown6}
            className={`adminNavbar-link ${
              isAdminDropdownOpen6 ? "active" : ""
            } mt-1 px-4 py-2 flex justify-between flex cursor-pointer items-center`}
          >
            <div className="flex items-center">
              <i className="pr-2">
                <TbBuildingBank />
              </i>{" "}
              Giao tiếp
            </div>
            <i className="pl-12">
              <BsCaretDownFill />
            </i>
          </div>
          {isAdminDropdownOpen6 && (
            <div className="dropdown-menu border p-2">
              <ul>
                <li onClick={removeSidebar} className="mb-1 ml-4">
                  <Link to="/contact">Giao tiếp</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Logout Button */}
          <div className="absolute bottom-4 left-4 mt-4 text-center">
            <ul>
              <li className="flex">
                <a href="##" className="flex items-center">
                  <i className="pr-2 text-2xl">
                    <TbLogout2 />
                  </i>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
