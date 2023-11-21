import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiDownArrow } from 'react-icons/bi'

const Navbar = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeSidebar = () => {
    setMenuVisible(false);
    setDropdownVisible(false);
  };

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleIconClick = (linkName) => {
    setActiveLink(linkName);
  }

  const location = useLocation()


  return (

    <React.Fragment>
      <div id="navbar" >

        {/* Hamburger Icon */}
        <div className={`menu-icon ${menuVisible ? 'cross' : ''}`} onClick={toggleMenu}>
          {menuVisible ? <FiX /> : <FiMenu />} {/* Use the icons */}
        </div>

        {/* Main Navigation Menu */}
        <nav className={`sticky-navbar ${menuVisible ? 'visible' : ''} main-menu`}>

          <ul className='flex justify-around items-center'>
            <li className={`relative ${location.pathname === '/' ? 'selected' : ''}`}>
            <NavLink to="/">Trang chủ</NavLink>
              <span></span>
            </li>


            <li className={`relative ${location.pathname === '/administration' ? 'selected' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>

              <a href="##" >Hành chính</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide1">
                 <Link to="/administration/management-committee">Ủy ban quản lý</Link>
                 <Link to="/administration/president-message">Thông điệp của Chủ tịch nước</Link>
                <Link to="/administration/principal-message">Thông điệp của Hiệu trưởng</Link>
                 <Link to="/administration/teachers">Giáo viên</Link>
                 <Link to="/administration/workers">Nhân viên</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a href="##" >Học thuật</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide2">
                  <Link to="/academics/class-routine">Nội quy lớp học</Link>
                  <Link to="/academics/exam-routine">Nội quy thi</Link>
                 <Link to="/academics/notice">Thông báo</Link>
                  <Link to="/academics/syllabus">Giáo trình</Link>
                 <Link to="/academics/calendar">Lịch học thuật</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a href="##" >Khóa học</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide3">
                <Link to="/schoolfellow/scout-guide">Hướng dẫn Hướng đạo Nam và Nữ</Link>
                  <Link to="/schoolfellow/debate-competition">Cuộc thi tranh luận</Link>
                  <Link to="/schoolfellow/play">Hành động</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
             <a href="##" >Tuyển sinh</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide4">
                 <Link to="/admissions/admission-notice">Thông báo tuyển sinh</Link>
                  <Link to="/admissions/admission-exam-syllabus">Giáo trình thi tuyển sinh</Link>
                  <Link to="/admissions/fill-admission-form">Điền vào mẫu đơn nhập học</Link>
                  <Link to="/admissions/admit-card">Thẻ chấp nhận</Link>
                  <Link to="/admissions/list-of-selected-students-seeking-admission">Danh sách sinh viên được chọn muốn nhập học</Link>
                  <Link to="/admissions/list-of-selected-students-waiting-admission">Danh sách sinh viên đang chờ nhập học</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <a href="##" >Kết quả</a>
              { dropdownVisible && (
                <div className="dropdown-content dropdownWide5">
                  <Link to="/results/school-result">Kết quả học tập</Link>
                  <Link to="/results/others-result">Khác</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${location.pathname === '/students' ? 'đã chọn' : ''}`}>
<NavLink to="/students">Học sinh</NavLink>
              <span></span>
            </li>

            <li className={`tương đối ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
          <a href="##" >Thư viện</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide6">
                  <Link to="/gallery/events">Liên kết</Link>
                  <Link to="/gallery/album">Album</Link>
                </div>
              )}
              <span></span>
            </li>

           <li className={`relative ${location.pathname === '/contact' ? 'đã chọn' : ''}`}>
     <NavLink to="/contact">Liên hệ</NavLink>
              <span></span>
            </li>
            <li>
              <NavLink className='text-xl' to="/notifications"><IoMdNotificationsOutline /></NavLink>
            </li>
          </ul>
        </nav>{/* Menu điều hướng thanh bên */}
        <nav className={`thanh bên ${menuVisible ? 'hiển thị' : ''}`}>
          <div className="sidebar-header">
            <div className="close-icon" onClick={closeSidebar}>
              <FiX />
            </div>
          </div>

          <ul>
         
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};
export default Navbar;