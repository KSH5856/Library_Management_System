import { Menu, MenuProps } from "@/components/menu/menu";

export const Start = () => {
    
    const menuItems: MenuProps = {
        menuItemsArray: [
            { imag: "/vercel.svg", name: "Dashboard", linkToNavigate: '/dashboard' },
            { imag: "/vercel.svg", name: "Books", linkToNavigate: "/books" },
            { imag: "/vercel.svg", name: "Members", linkToNavigate: "/members" },
            { imag: "/vercel.svg", name: "Help", linkToNavigate: "/help" },
        ]
    };
    return (
        <Menu menuItemsArray={menuItems.menuItemsArray} className="bg-blue-400"></Menu>
    )
};