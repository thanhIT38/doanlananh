import React from 'react'

const SchoolResult = () => {
  return (
    <React.Fragment>
      <div id="schoolResult">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2'>kết quả học tập</h3>
          <p className='text-md font-medium mt-2'>home / results / <span className='text-red-800'> school-result</span></p>
        </div>


        <div className="max-w-md mx-auto p-4 bg-white my-8 shadow-lg">
          <form>
            <div className="mb-4">
              <label htmlFor="simpleInput" className="block text-sm font-medium text-gray-600">
                Roll:
              </label>
              <input
                type="text"
                id="simpleInput"
                name="simpleInput"
                className="mt-1 p-2 block w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                placeholder="Enter your Roll here"
              />
            </div>

            <div className="mb-4">
                <label htmlFor="dropdown1" className="block text-sm font-medium text-gray-600">
                  Section:
                </label>
                <select
                  id="dropdown1"
                  name="dropdown1"
                  className="mt-1 p-2 block w-full border outline-none shadow-sm  focus:border-indigo-500 sm:text-sm" placeholder='Select Term'
                >
                  <option value="option1">Choose Option</option>
                  <option value="option1">Science</option>
                  <option value="option2">Arts</option>
                  <option value="option3">Commerce</option>
                  <option value="option1">None</option>
                </select>
              </div>

            <div className="mb-4">
              <label htmlFor="dropdown1" className="block text-sm font-medium text-gray-600">
                Term:
              </label>
              <select
                id="dropdown1"
                name="dropdown1"
                className="mt-1 p-2 block w-full border outline-none shadow-sm  focus:border-indigo-500 sm:text-sm" placeholder='Select Term'
              >
                <option value="option1">Choose Option</option>
                <option value="option1">Half Yearly Examination</option>
                <option value="option2">Final Examination</option>
                <option value="option3">Pre-Test Examination</option>
                <option value="option3">Test Examination</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="yearDropdown" className="block text-sm font-medium text-gray-600">
                Session (2008-2024)
              </label>
              <select
                id="yearDropdown"
                name="yearDropdown"
                className="mt-1 p-2 block w-full border outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {Array.from({ length: 17 }, (_, index) => {
                  const year = 2008 + index;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-1 border border-transparent font-medium text-white  bg-[#79929C] hover:bg-[#B5C8C8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>



      </div>
    </React.Fragment>
  )
}

export default SchoolResult