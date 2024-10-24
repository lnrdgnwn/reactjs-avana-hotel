import { useContext } from "react";
import { RoomContext } from '../context/RoomProvider';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { BsChevronDown } from "react-icons/bs";

const list = [
    { name: '0 Kid' },
    { name: '1 Kid' },
    { name: '2 Kids' },
    { name: '3 Kids' },
    { name: '4 Kids' }
];

function KidsDropdown() {
    const { kids, setKids } = useContext(RoomContext);
    return (
        <Menu as='div' className='w-full h-full bg-white relative'>
            <MenuButton className='w-full h-full flex items-center justify-between px-8 '>
                {kids === '0 Kid' ? 'No Kids' : kids}
                <BsChevronDown className="text-accent-hover text-base" />
            </MenuButton>
            <MenuItems as='ul' className='flex flex-col z-40 bg-white absolute w-full'>
                {list.map((li, index) => {
                    return <MenuItem as='li' onClick={() => setKids(li.name)} className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer' key={index}>{li.name}</MenuItem>
                })}
            </MenuItems>
        </Menu>
    );
}

export default KidsDropdown;