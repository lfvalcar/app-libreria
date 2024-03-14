import React from "react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./Icons/SearchIcon";

export default function InputDefault() {
  return (
    <div className="rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      <Input
        className="hidden md:flex"
        classNames={{
          base: "max-w-full sm:max-w-[18rem] h-10",
          input: "text-small focus:outline-none border-transparent focus:border-transparent focus:ring-0",
          inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        size="sm"
        isClearable={false}
        endContent={
          <div className="mr-3 cursor-pointer">
            <SearchIcon size={20} strokeWidth={1} />
          </div>
        }
        type="search"
      />
    </div>
  );
}
