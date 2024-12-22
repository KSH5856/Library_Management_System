import { Menu, MenuProps } from "@/components/menu/menu";

const BookPage = () => {

    const menuItems: MenuProps = {
        menuItemsArray: [
            { imag: "/vercel.svg", name: "Books" },
            { imag: "/vercel.svg", name: "Add Book" },
            { imag: "/vercel.svg", name: "Issue Book" },
            { imag: "/vercel.svg", name: "Return Book" },
        ]
    };
    return (
        <div className="ml-52">
            <Menu menuItemsArray={menuItems.menuItemsArray} className="bg-blue-200" />
        </div>
    )
};
export default BookPage;