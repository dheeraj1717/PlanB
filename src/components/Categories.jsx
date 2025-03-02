import React from "react";
import categoriesData from "../constants/CategoriesData.json";

function Categories() {
  return (
    <div className="flex justify-center mt-10 sm:mt-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
        {categoriesData.map((category, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center rounded-[24px] w-[300px] sm:w-[350px] xl:w-[390px] 2xl:w-[428px] pb-8"
            style={{ boxShadow: "0px 12px 24px 0px #00000012" }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-[230px] sm:h-[325px] object-cover rounded-t-[24px]"
            />
            <span className="mt-2 text-[24px] md:text-[40px] font-bold">{category.name}</span>
            <button className="text-[#167989] rounded-[25px] w-[100px] h-[40px] md:w-[154px] md:h-[60px] border-[3px] md:border-[5px] border-[#167989] cursor-pointer">See More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
