import { TableComponent } from "@/components/table/table";
import { TitleComponent } from "@/components/title/title";
import "./book.css";

export const Books = () => {
  const allBooksHeadData = [
    { name: "All Books", className: "" },
    { name: "Available", className: "" },
    { name: "Issued", className: "" },
    { name: "Reserved", className: "" },
    { name: "Lost", className: "" },
    { name: "Lost (Cleared)", className: "" },
  ];
  const allBooksRowData = [
    { name: 13, className: "w-32 bg-blue-700 text-white" },
    { name: 9, className: "w-32 bg-green-400 text-white" },
    { name: 4, className: "w-32 bg-purple-400 text-white" },
    { name: 0, className: "w-32 bg-gray-400 text-white" },
    { name: 0, className: "w-32 bg-red-400 text-white" },
    { name: 0, className: "w-32 bg-gray-400 text-white" },
  ];

  return (
    <>
      <TitleComponent
        title="Books"
        className="border-b-2 p-2 border-gray-500 font-bold text-xl flex justify-start"
      />
      <div className="bookTableContainer">
        <TableComponent
          tableClassName="w-full mb-4 border-separate border-spacing-x-1"
          tableHeadClassName="bg-blue-900 text-white h-8"
          tableBodyClassName="bg-blue-700 h-16 text-center"
          tableHeadData={allBooksHeadData}
          tableRowData={allBooksRowData}
        />
      </div>
      <div className="border-b-2 p-2 border-gray-500"></div>
      <div className="searchBars">
        <div className="">
          <select className="selectClasss">
            <option value={"kashish"} className="border-2 border-black">
              All Subjects
            </option>
            <option value={"kashish"} className="border-2 border-black">
              Jaydeep
            </option>
            <option value={"kashish"} className="border-2 border-black">
              DJ
            </option>
          </select>
          <select className="selectClasss">
            <option value={"kashish"} className="border-2 border-black">
              Categories
            </option>
            <option value={"kashish"} className="border-2 border-black">
              Jaydeep
            </option>
            <option value={"kashish"} className="border-2 border-black">
              DJ
            </option>
          </select>
        </div>
        <div className="flex">
          <TitleComponent title="Search By" className="" />
          <select className="selectClasss">
            <option value={"kashish"} className="border-2 border-black">
              Categories
            </option>
            <option value={"kashish"} className="border-2 border-black">
              Jaydeep
            </option>
            <option value={"kashish"} className="border-2 border-black">
              DJ
            </option>
          </select>
          <input type="text" placeholder="Enter your name" />
        </div>
      </div>
    </>
  );
};