import React, { useEffect, useState } from "react";
import { getAllnhanvien } from "../../../../components/apis/newApi";

const Workers = () => {
  const [principalData, setprincipalData] = useState([]);
  const fetchData = async () => {
    try {
      const about = await getAllnhanvien();
      setprincipalData(about);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div id="workers">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2">
            chính thức
          </h3>
          <p className="text-md font-medium mt-2">
            home / administration /{" "}
            <span className="text-red-800"> management-committee</span>
          </p>
        </div>

        <div className="teachers-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {principalData?.data?.data.map((worker, index) => (
            <div
              key={index}
              className="teachers-card p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center"
            >
              <div className="teachers-card-img my-4">
                <picture>
                  <img src={worker.image} alt="profile" />
                </picture>
              </div>
              <div className="teachers-card-identity">
                <h4 className="font-medium text-md">Họ tên:{worker.name}</h4>
                <h5>Chức vụ {worker.chucvu}</h5>
                <h6>Trường đại học , HN</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Workers;
