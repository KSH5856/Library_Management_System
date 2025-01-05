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

  const mainBooksHeadData = [
    { name: "", className: "" },
    { name: "ISBN", className: "" },
    { name: "Title", className: "" },
    { name: "Subject", className: "" },
    { name: "Language", className: "" },
    { name: "Note", className: "" },
    { name: "Status", className: "" },
    { name: "Added By", className: "" },
    { name: "Added Date", className: "" },
    { name: "", className: "" },
    { name: "", className: "" },
  ];

  const mainBooksRowData = [
    {
      ISBN: "1",
      Title: "Title",
      Subject: "Subject",
      Language: "Hindi",
      Note: "Notes",
      Status: "Available",
      AddedBy: "KSH",
      Added: "JD",
      Date: "12-03/2024",
    },
    {
      ISBN: "2",
      Title: "Title",
      Subject: "Subject",
      Language: "Hindi",
      Note: "Notes",
      Status: "Available",
      AddedBy: "KSH",
      Added: "JD",
      Date: "09-08-2021",
    },
    {
      ISBN: "3",
      Title: "Title",
      Subject: "Subject",
      Language: "Hindi",
      Note: "Notes",
      Status: "Available",
      AddedBy: "KSH",
      Added: "JD",
      Date: "09-08-2021",
    },
    {
      ISBN: "4",
      Title: "Title",
      Subject: "Subject",
      Language: "Hindi",
      Note: "Notes",
      Status: "Available",
      AddedBy: "KSH",
      Added: "JD",
      Date: "09-08-2021",
    },
    {
      ISBN: "5",
      Title: "Title",
      Subject: "Subject",
      Language: "Hindi",
      Note: "Notes",
      Status: "Available",
      AddedBy: "KSH",
      Added: "JD",
      Date: "09-08-2021",
    },
    {
      ISBN: "6",
      Title: "Title",
      Subject: "Subject",
      Language: "Hindi",
      Note: "Notes",
      Status: "Available",
      AddedBy: "KSH",
      Added: "JD",
      Date: "09-08-2021",
    },
  ];

  return (
    <>
      {/* Page title */}
      <TitleComponent title="Books" className="titleClass " />

      {/* Table */}
      <div className="bookTableContainer">
        <TableComponent
          tableClassName="w-full mb-4 border-separate border-spacing-x-1 ml-4 mt-6"
          tableHeadClassName="bg-blue-900 text-white h-8"
          tableBodyClassName="bg-blue-700 h-16 text-center"
          tableHeadData={allBooksHeadData}
          tableRowData={allBooksRowData}
        />
      </div>

      {/* Horizontal line */}
      <div className="border-b-2 p-2 mx-4 border-gray-500 text-sm"></div>

      {/* filters */}
      <div className="searchBars">
        <div className="searchBarss  ml-2">
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
        <div className="flex justify-end  mr-4 border-black w-2/4 overflow-hidden">
          <div className="flex justify-between">
            <TitleComponent
              title="Search By"
              className="flex w-20 mr-1 items-center justify-end"
            />
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
          <div className="w-1/2 px-2 flex justify-end">
            <input
              className="w-full px-3  border-2 border-gray-400 rounded-2xl"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      {/* Table contents */}
      <table className="w-full mb-4 ml-4 mt-6">
        <thead className="bg-blue-500 text-white h-8">
          <tr>
            {mainBooksHeadData.map((data: any, i: number) => {
              return (
                <th key={i} className={data.className}>
                  {data.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="h-16 text-center">
          {mainBooksRowData.map((data: any, j: number) => {
            return (
              <tr key={j}>
                <td>{data.ISBN}</td>
                <td></td>
                <td>{data.Title}</td>
                <td>{data.Subject}</td>
                <td>{data.Language}</td>
                <td>{data.Note}</td>
                <td>{data.Status}</td>
                <td>{data.AddedBy}</td>
                <td>{data.Added}</td>
                <td>{data.Date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="buttonDiv">
        <button className="ml-10 border-2 rounded-md w-1/3 bg-amber-300">
          Icon
        </button>
        <button className="buttonClass">Edit</button>
        <button className="buttonClass">Issue</button>
      </div>
    </>
  );
};