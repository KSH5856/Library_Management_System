import Image from "next/image"
import Link from "next/link"
import './menu.css'

export type menuDetails = {imag:string , name:string};
export type MenuProps = {
    menuItemsArray: menuDetails[]
};

export const Menu = ({ menuItemsArray: menuItems }: MenuProps) => {
    return (
        <>
            <div className="flex h-96">
                <div className="section">
                    {menuItems.map((menuItem: menuDetails , index : number) => {
                        console.log(menuItem)
                        return (
                        <div className="sec" key={index}>
                            <Image src={menuItem.imag} width={20} height={20} alt="This is missing"></Image>
                            <Link href={"/dashboard"}><h1>{menuItem.name}</h1></Link>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
};