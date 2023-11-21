import React, { useEffect, useState } from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { AiFillEye } from "react-icons/ai";

import Modal from "react-modal";
import { getAllnoiquy } from "../../../../components/apis/newApi";

const ClassRoutine = () => {
  const [tableRows, settableRows] = useState([]);
  const fetchData = async () => {
    try {
      const about = await getAllnoiquy();
      settableRows(about);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Table Row

  // Modal
  const [isPdfModalOpen, setPdfModalOpen] = useState(false);

  // Function to open the PDF modal
  const openPdfModal = () => {
    setPdfModalOpen(true);
  };

  // Function to close the PDF modal
  const closePdfModal = () => {
    setPdfModalOpen(false);
  };

  return (
    <React.Fragment>
      <div id="classRoutine">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2">
            Nội quy lớp học
          </h3>
          <p className="text-md font-medium mt-2">
            home / academics /{" "}
            <span className="text-red-800"> class-routine</span>
          </p>
        </div>

        <div className="border vertical-scrollMain bg-[#DBE8E960]">
          <table className="border-collapse w-full vertical-scroll">
            <thead>
              <tr className="bg-[#BBCDCD60] ">
                <th className="p-2 text-start w-3/12">Ngày phát hành</th>
                <th className="p-2 text-start w-5/12">Chú ý</th>
                <th className="p-2 text-start w-2/12">Tài liệu</th>
                <th className="p-2 text-start w-2/12">Tải xuống</th>
              </tr>
            </thead>

            <tbody>
              {tableRows?.data?.data.map((row, index) => (
                <tr key={index} className="border-b">
                  <div className="flex items-center pt-2">
                    <td className="p-2">
                      <i>
                        <BsFillCalendarDateFill />
                      </i>
                    </td>
                    <td className="py-2">{row.date}</td>
                  </div>
                  <td className="p-2">{row.content}</td>
                  <td className="p-2">
                    <a
                      href={`#view-link-${index}`}
                      onClick={openPdfModal}
                      className="flex items-center"
                    >
                      {" "}
                      <i className="pr-1">
                        <AiFillEye />
                      </i>{" "}
                      View
                    </a>
                  </td>
                  <td className="p-2">
                    <a
                      href={`#download-link-${index}`}
                      className="py-2 flex items-center"
                    >
                      <i className="pr-1">
                        <PiDownloadSimpleBold />
                      </i>{" "}
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal
            isOpen={isPdfModalOpen}
            onRequestClose={closePdfModal}
            contentLabel="PDF Viewer"
          >
            <button
              onClick={closePdfModal}
              className="flex flex-end right-2 top-2"
            >
              Close
            </button>
            <iframe
              src="https://www.africau.edu/images/default/sample.pdf"
              title="PDF Viewer"
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="auto"
            ></iframe>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClassRoutine;
