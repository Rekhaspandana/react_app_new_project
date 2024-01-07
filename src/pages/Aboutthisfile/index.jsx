import React from "react";

import { Text } from "components";

const AboutthisfilePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-whyte gap-6 items-start justify-center mx-auto p-24 md:px-10 sm:px-5 w-full">
        <Text
          className="mt-[103px] md:text-5xl text-7xl text-black-900 tracking-[-2.16px]"
          size="txtWhyteBold72"
        >
          Meet Figma, in 3 minutes
        </Text>
        <Text
          className="leading-[150.00%] mb-[97px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.91px] w-4/5 sm:w-full"
          size="txtWhyteRegular48"
        >
          This space is for learning the basics of Figma, and to practice on
          some sample designs.{" "}
        </Text>
      </div>
    </>
  );
};

export default AboutthisfilePage;
