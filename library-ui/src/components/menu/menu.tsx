import Image from "next/image"
import Link from "next/link"
import './menu.css'

export type MenuDetails = {
    imag: string,
    name: string,
    linkToNavigate?: string
};

export type MenuProps = {
    menuItemsArray: MenuDetails[],
    className?: string
};

export const Menu = ({ menuItemsArray: menuItems, className }: MenuProps) => {
    return (
        <div className={`section ${className}`}>
            {menuItems.map((menuItem: any, index: number) => {
                return (
                    <div className="sec" key={index}>
                        <Image src={menuItem.imag} width={20} height={20} alt="This is missing"></Image>
                        {menuItem.linkToNavigate
                            ? <Link href={menuItem.linkToNavigate}><div>{menuItem.name}</div></Link>
                            : <div>{menuItem.name}</div>}
                    </div>)
            })}
        </div>
    )
};