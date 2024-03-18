import { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";



export interface HamburgerProps {
    onClick: () => void;

    isInitiallyOpen?: boolean;
}

export function Hamburger(props: HamburgerProps) {
    const { onClick, isInitiallyOpen } = props;
    const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

    const handleClick = () => {
        setIsOpen((prev: any) => !prev);
        onClick(  );
    };

    return (<div>
        <button
            onClick={handleClick}
            type="button"
            className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer`}
        >
            <div
                className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                }`}
            />
            <div
                className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'translate-x-full bg-transparent' : 'translate-x-0'
                }`}
            />
            <div
                className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'rotate-[-45deg]' : 'rotate-0'
                }`}
            />
            
        </button>
        {isOpen && <SideBar setIsOpen={setIsOpen}/>}</div>
    );
}

export function SideBar({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }){
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setIsOpen]);
    return  <div ref={sidebarRef}
    className={`fixed top-16 left-0 h-full w-60 bg-gray-800 text-white p-4 transition-all ease-in-out duration-300  `}
  >
    <h2 className="text-xl font-bold mb-4">Sidebar</h2>
    <ul>
      <li className="py-2">Menu Item 1</li>
      <li className="py-2">Menu Item 2</li>
      <li className="py-2">Menu Item 3</li>
    </ul>

   
  </div>
}