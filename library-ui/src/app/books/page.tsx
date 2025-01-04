"use client";
import { Menu, MenuProps } from "@/components/menu/menu";
import { AddBooks } from "@/lib/books/addBooks/addBooks";
import { Books } from "@/lib/books/books/book";
import { IssueBooks } from "@/lib/books/issueBooks/issueBook";
import { ReturnBooks } from "@/lib/books/returnBooks/returnBook";
import { useState } from "react";

export type BookActions = "book" | "issueBook" | "addBook" | "returnBook";

const BookPage = () => {
    const menuItems: MenuProps = {
        menuItemsArray: [
            { imag: "/vercel.svg", name: "Books" },
            { imag: "/vercel.svg", name: "Add Book" },
            { imag: "/vercel.svg", name: "Issue Book" },
            { imag: "/vercel.svg", name: "Return Book" },
        ],
    };
    const [selectedAction, setSelectedAction] = useState<BookActions>();
    const onMenuSelect = (action: any) => {
        switch (action.name) {
            case "Books":
                setSelectedAction("book");
                break;
            case "Add Book":
                setSelectedAction("addBook");
                break;
            case "Issue Book":
                setSelectedAction("issueBook");
                break;
            case "Return Book":
                setSelectedAction("returnBook");
                break;
        }
    };

    return (
        <div className="ml-52">
            <Menu menuItemsArray={menuItems.menuItemsArray} captureMenuItem={onMenuSelect} className="bg-blue-200" />
            {selectedAction === "book" && <div className="ml-56"><Books /></div>}
            {selectedAction === "addBook" && <div className="ml-56"><AddBooks /></div>}
            {selectedAction === "issueBook" && <div className="ml-56"><IssueBooks /></div>}
            {selectedAction === "returnBook" && <div className="ml-56"><ReturnBooks /></div>}
        </div>
    )
};
export default BookPage;