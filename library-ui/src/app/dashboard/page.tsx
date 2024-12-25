"use client"
import { Menu, MenuProps } from "@/components/menu/menu";
import { TableComponent } from "@/components/table/table";
import { useState } from "react";
import './dashboard.css';

const DashboardPage = () => {

    const menuItems: MenuProps = {
        menuItemsArray: [
            { imag: "/vercel.svg", name: "General" }
        ]
    };
    const [showContent, setShowContent] = useState(false);
    const [date, setDate] = useState<any>();
    const allBooksHeadData = [
        { name: "All Books", className: "" }
    ];
    const allBooksRowData = [
        { name: 13, className: "" }
    ];
    const currentStatusHeadData = [
        { name: "Issued Books", className: "bg-purple-900 text-white" },
        { name: "Received Books", className: "bg-green-900 text-white" },
        { name: "Overdue", className: "bg-orange-500 text-white" },
        { name: "Lost", className: "bg-red-900 text-white" },
        { name: "Lost(Cleared)", className: "bg-gray-900 text-white" }
    ];
    const currentStatusRowData = [
        { name: 4, className: "w-32 bg-purple-400 text-white" },
        { name: "Received Books", className: "w-32 bg-green-400 text-white" },
        { name: "Overdue", className: "w-32 bg-orange-300 text-white" },
        { name: "Lost", className: "w-32 bg-red-400 text-white" },
        { name: "Lost(Cleared)", className: "w-32 bg-gray-400 text-white" }
    ];
    const membersHeadData = [
        { name: "Members", className: "bg-blue-900 text-white" },
        { name: "Pending", className: "bg-gray-900 text-white" },
        { name: "Cleared Payments", className: "bg-green-900 text-white" }
    ];
    const membersRowData = [
        { name: 13, className: "bg-blue-400 text-white" },
        { name: 13, className: "bg-gray-400 text-white" },
        { name: 13, className: "bg-green-400 text-white" }
    ];
    const dateWiseHeadData = [
        { name: "Issued Books", className: "bg-purple-900 text-white" },
        { name: "Received Books", className: "bg-green-900 text-white" },
        { name: "Overdue", className: "bg-orange-500 text-white" },
        { name: "Lost", className: "bg-red-900 text-white" },
        { name: "Lost(Cleared)", className: "bg-gray-900 text-white" },
    ];
    const dateWiseRowData = [
        { name: 4, className: "w-32 bg-purple-400 text-white" },
        { name: "Received Books", className: "w-32 bg-green-400 text-white" },
        { name: "Overdue", className: "w-32 bg-orange-300 text-white" },
        { name: "Lost", className: "w-32 bg-red-400 text-white" },
        { name: "Lost(Cleared)", className: "w-32 bg-gray-400 text-white" },
    ];

    return (
        <div className="ml-52">
            <div onClick={() => setShowContent(!showContent)}>
                <Menu menuItemsArray={menuItems.menuItemsArray} className="bg-blue-200" />
            </div>
            {showContent &&
                <div className='ml-52'>
                    <div className="dashboard">Dashboard</div>
                    <div className='dateContainer'>
                        <input type="date" className='date' onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className='tableContainer'>
                        <div className='my-4 text-2xl'>Current Library Status</div>
                        <TableComponent
                            tableClassName="w-full mb-4 border-separate border-spacing-x-1"
                            tableHeadClassName="bg-blue-900 text-white h-8"
                            tableBodyClassName="bg-blue-700 h-16 text-center"
                            tableHeadData={allBooksHeadData}
                            tableRowData={allBooksRowData}
                        />
                        <TableComponent
                            tableClassName="w-full mb-4 border-separate border-spacing-x-1 border-spacing-y-0"
                            tableHeadClassName="h-8"
                            tableBodyClassName="h-16 text-center"
                            tableHeadData={currentStatusHeadData}
                            tableRowData={currentStatusRowData}
                        />
                        <TableComponent
                            tableClassName="w-full border-separate border-spacing-x-1 border-spacing-y-0"
                            tableHeadClassName="h-8"
                            tableBodyClassName="text-center h-16"
                            tableHeadData={membersHeadData}
                            tableRowData={membersRowData}
                        />
                    </div>
                    {date && <div className='ml-10 mt-4'>
                        <div className='my-4'>{`Your status on ${date} :`}
                        </div>
                        <TableComponent
                            tableClassName="w-full mb-4 border-separate border-spacing-x-1 border-spacing-y-0"
                            tableHeadClassName="h-8"
                            tableBodyClassName="text-center h-16"
                            tableHeadData={dateWiseHeadData}
                            tableRowData={dateWiseRowData}
                        />
                    </div>}
                </div>
            }
        </div>
    )
};
export default DashboardPage;