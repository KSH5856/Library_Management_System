"use client"
import { Menu, MenuProps } from "@/components/menu/menu";
import { useState } from "react";

const DashboardPage = () => {

    const menuItems: MenuProps = {
        menuItemsArray: [
            { imag: "/vercel.svg", name: "General" }
        ]
    };
    const [showContent, setShowContent] = useState(false);
    const [date, setDate] = useState<any>();
    return (
        <div className="ml-52">
            <div onClick={() => setShowContent(!showContent)}>
                <Menu menuItemsArray={menuItems.menuItemsArray} className="bg-blue-200" />
            </div>
            {showContent &&
                <div className='ml-52'>
                    {/* Dashboard */}
                    <div className="border-b-2 p-2  border-gray-500 font-bold text-xl flex justify-start">Dashboard</div>
                    {/* Image input  */}
                    <div className='mt-10 mx-6 border-b-2 pb-4  border-gray-500 '>
                        <input type="date" className='bg-gray-300 w-72 py-1 px-2' onChange={(e) => setDate(e.target.value)} />
                    </div>

                    {/* First set of tables */}
                    <div className='ml-10 mx-6 mt-4 border-b-2 border-gray-600 pb-2'>
                        <div className='my-4 text-2xl'>Current Library Status</div>
                        {/* Table 1 */}
                        <table className='w-full mb-4 border-separate border-spacing-x-1'>
                            <thead className=' bg-blue-900 text-white h-8'>
                                <tr>
                                    <th>All Books</th>
                                </tr>
                            </thead>
                            <tbody className='bg-blue-700 h-16 text-center'>
                                <tr>
                                    <td>13</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* table 2 */}
                        <table className='w-full mb-4 border-separate border-spacing-x-1 border-spacing-y-0'>
                            <thead className='h-8'>
                                <tr className=''>
                                    <th className='bg-purple-900 text-white'>Issued Books</th>
                                    <th className='bg-green-900 text-white'>Received Books</th>
                                    <th className='bg-orange-500 text-white'>Overdue</th>
                                    <th className='bg-red-900 text-white'>Lost</th>
                                    <th className='bg-gray-900 text-white'>Lost(Cleared)</th>
                                </tr>
                            </thead>
                            <tbody className=' text-center h-16 ' >
                                <tr >
                                    <td className='w-32 bg-purple-400 text-white'>4</td>
                                    <td className='w-32 bg-green-400 text-white'>Received Books</td>
                                    <td className='w-32 bg-orange-300 text-white'>Overdue</td>
                                    <td className='w-32 bg-red-400 text-white'>Lost</td>
                                    <td className='w-32 bg-gray-400 text-white'>Lost(Cleared)</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* table 3 */}
                        <table className='w-full border-separate border-spacing-x-1 border-spacing-y-0 '>
                            <thead className='h-8'>
                                <tr>
                                    <th className='bg-blue-900 text-white'>Members</th>
                                    <th className='bg-gray-900 text-white'>Pending Payments</th>
                                    <th className='bg-green-900 text-white'>Cleared Payments</th>
                                </tr>
                            </thead>
                            <tbody className='text-center h-16'>
                                <tr>
                                    <td className='bg-blue-400 text-white'>13</td>
                                    <td className='bg-gray-400 text-white'>13</td>
                                    <td className='bg-green-400 text-white'>13</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Current day status table */}
                    {date && <div className='ml-10 mt-4'>
                        <div className='my-4'>{`Your status on ${date} :`}</div>
                        <table className='w-full mb-4 border-separate border-spacing-x-1 border-spacing-y-0'>
                            <thead className='h-8'>
                                <tr className=''>
                                    <th className='bg-purple-900 text-white'>Issued Books</th>
                                    <th className='bg-green-900 text-white'>Received Books</th>
                                    <th className='bg-orange-500 text-white'>Overdue</th>
                                    <th className='bg-red-900 text-white'>Lost</th>
                                    <th className='bg-gray-900 text-white'>Lost(Cleared)</th>
                                </tr>
                            </thead>
                            <tbody className=' text-center h-16 ' >
                                <tr >
                                    <td className='w-32 bg-purple-400 text-white'>4</td>
                                    <td className='w-32 bg-green-400 text-white'>Received Books</td>
                                    <td className='w-32 bg-orange-300 text-white'>Overdue</td>
                                    <td className='w-32 bg-red-400 text-white'>Lost</td>
                                    <td className='w-32 bg-gray-400 text-white'>Lost(Cleared)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>}
                </div>
            }
        </div>
    )
};
export default DashboardPage;