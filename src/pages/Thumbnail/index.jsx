import React from "react";

import { Img, Text } from "components";

const ThumbnailPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-whyteinktrap items-center justify-end mx-auto pt-[50px] w-full">
        <div className="flex flex-col justify-end w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-[516px] md:px-5 w-[57%] md:w-full">
            <Img
              className="h-[81px] md:h-auto sm:mt-0 mt-[9px] object-cover"
              src="images/img_illo.png"
              alt="illo"
            />
            <div className="bg-deep_orange-600 border-4 border-black-900 border-solid flex flex-col items-start justify-start mb-7 pb-[7.5px] pt-2.5 sm:px-5 px-[25px] w-auto">
              <Img
                className="h-2.5 w-[15px]"
                src="images/img_arrowup.svg"
                alt="arrowup"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[49px] items-start justify-start md:ml-[0] ml-[35px] mr-[83px] mt-[113px] md:px-5 w-[91%] md:w-full">
            <div className="h-[221px] md:h-[251px] relative w-[83%] md:w-full">
              <div className="absolute bg-black-900 bottom-[0] h-[184px] right-[0] w-[96%]"></div>
              <div className="absolute inset-x-[0] mx-auto pb-12 pt-11 sm:px-5 px-8 top-[0] w-[885px] md:w-full">
                <div className="bg-amber-A400 flex flex-col items-center justify-end m-auto outline outline-[4px] outline-black-900 pb-12 pt-11 sm:px-5 px-8 w-auto">
                  <Text
                    className="md:text-5xl text-[132px] text-black-900 text-center tracking-[-3.96px] w-auto"
                    size="txtWhyteInktrapBold132"
                  >
                    Figma basics
                  </Text>
                </div>
                <div className="absolute bg-white-A700 bottom-[23%] h-[22px] outline outline-[2px] outline-black-900 right-[15%] w-[22px]"></div>
                <div className="absolute bg-white-A700 bottom-[23%] h-[22px] left-[15%] outline outline-[2px] outline-black-900 w-[22px]"></div>
                <div className="absolute bg-white-A700 h-[22px] outline outline-[2px] outline-black-900 right-[15%] top-[21%] w-[22px]"></div>
                <div className="absolute bg-white-A700 h-[22px] left-[15%] outline outline-[2px] outline-black-900 top-[21%] w-[22px]"></div>
              </div>
            </div>
            <div className="md:mt-0 mt-[72px] pb-[7.5px] pt-2.5 sm:px-5 px-[25px] relative w-[136px]">
              <div className="bg-deep_purple-A200 border-4 border-black-900 border-solid h-4 ml-auto mt-auto w-3/4"></div>
              <Img
                className="absolute h-[54px] left-[40%] top-[16%] w-[46px]"
                src="images/img_save.svg"
                alt="save"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[351px] items-start justify-end md:ml-[0] ml-[265px] mt-[91px] md:px-5 w-[78%] md:w-full">
            <div className="bg-indigo-A400 border-4 border-black-900 border-solid flex flex-col items-start justify-start mb-[116px] pb-[7.5px] pt-2.5 sm:px-5 px-[25px] w-auto">
              <Img
                className="h-2 w-4"
                src="images/img_save_indigo_a400.svg"
                alt="save_One"
              />
            </div>
            <Img
              className="h-[180px] md:h-auto object-cover"
              src="images/img_illo_black_900.png"
              alt="illo_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbnailPage;
