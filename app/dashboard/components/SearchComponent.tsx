import { Icon } from "@iconify/react";
import React from "react";
import { debounce } from "lodash";
interface Props {
  onSearch: (e: string) => void;
}

export default function SearchComponent(props: Props) {
  const debounceSearch = React.useRef(
    debounce(async (word: string) => {
      await props.onSearch(word);
    }, 1000)
  ).current;

  return (
    <div>
      <div className="flex rounded-lg border border-slate-300 w-[400px] ">
        <input
          type="search"
          className="w-full border-none my-2 bg-none px-4 py-0 pl-10 text-xs placeholder-gray-400   text-dark  focus:outline-none focus:border-none"
          placeholder="Search for anything"
          onChange={(event) => {
            debounceSearch(event.target.value);
          }}
          required
        />
        <div className=" bg-primary rounded-r-lg  pointer-events-none flex items-center justify-center py-2 px-3 ">
          <Icon
            icon="ant-design:search-outlined"
            className="text-white"
            width={20}
          />
        </div>
      </div>
    </div>
  );
}
