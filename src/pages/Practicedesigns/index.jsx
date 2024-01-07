import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const PracticedesignsPage = () => {
  return (
    <>
      <div className="bg-green-A700 flex sm:flex-col md:flex-col flex-row font-whyteinktrap gap-[37px] items-start mx-auto md:pr-10 sm:pr-5 pr-[157px] w-full">
        <div className="h-[720px] relative w-[84%] md:w-full">
          <div className="absolute bottom-[34%] h-[189px] md:h-[200px] right-[0] w-[96%] md:w-full">
            <div className="absolute bg-black-900 bottom-[0] h-[151px] right-[0] w-[96%]"></div>
            <div className="absolute inset-x-[0] mx-auto pb-11 pt-10 sm:px-5 px-8 top-[0] w-[822px] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-end m-auto outline outline-[4px] outline-black-900 pb-11 pt-10 sm:px-5 px-8 w-auto">
                <Text
                  className="md:text-5xl text-8xl text-black-900 text-center tracking-[-2.88px] w-auto"
                  size="txtWhyteInktrapBold96"
                >
                  Practice designs
                </Text>
              </div>
              <div className="absolute bg-white-A700 bottom-1/4 h-[22px] outline outline-[2px] outline-black-900 right-[18%] w-[22px]"></div>
              <div className="absolute bg-white-A700 h-[22px] outline outline-[2px] outline-black-900 right-[18%] top-[23%] w-[22px]"></div>
              <Sidebar className="!sticky !w-[22px] bg-white-A700 flex h-screen md:hidden justify-start my-auto outline outline-[2px] outline-black-900 overflow-auto top-[0]">
                <div className="bg-white-A700 h-[22px] outline outline-[2px] outline-black-900 w-[22px]"></div>
                <div className="bg-white-A700 h-[22px] mt-[133px] outline outline-[2px] outline-black-900 w-[22px]"></div>
              </Sidebar>
            </div>
          </div>
          <Img
            className="absolute h-[720px] inset-y-[0] left-[0] my-auto object-cover"
            src="images/img_vector.png"
            alt="vector"
          />
          <Img
            className="absolute h-[90px] right-[23%] top-[13%] w-[90px]"
            src="images/img_commonicon16pen.svg"
            alt="commonicon16pen"
          />
        </div>
        <div className="md:mt-0 mt-[457px] pb-[7.5px] pt-2.5 sm:px-5 px-[25px] relative w-[136px]">
          <div className="bg-red-A100 border-4 border-black-900 border-solid h-4 ml-auto mt-auto w-3/4"></div>
          <Img
            className="absolute h-[54px] left-[40%] top-[16%] w-[46px]"
            src="images/img_cursor.svg"
            alt="cursor"
          />
        </div>
      </div>
    </>
  );
};

export default PracticedesignsPage;
