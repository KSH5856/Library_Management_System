import { Menu, MenuProps } from "@/components/menu/menu";


const DashboardPage = () => {
    const menuItems : MenuProps = {
        menuItemsArray : [{imag : "/vercel.svg" , name : "General"}]
    };
    return (
        <div className="flex flex-col w-40 justify-center bg-blue-100">
            <Menu  menuItemsArray = {menuItems.menuItemsArray}/> 
        </div>
    )
};
export default DashboardPage;