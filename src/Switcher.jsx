import { useState } from 'react';
import useDarkSide from './useDarkSide.js';

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = () => {
        setTheme(colorTheme);
        setDarkSide(!darkSide);
    };

   
 
    return (
        <>
            <div className="flex fixed right-0 flex-row toggle px-2 py-2">
            <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input type="checkbox" onChange={toggleDarkMode} name="dark-mode" id="dark-toggle"  className="checkbox hidden" checked={darkSide} />
                        <div className="block border-[1px] dark:border-ocean-50 border-ocean-950 w-14 h-8 rounded-full"></div>
                        <div className={`dot absolute left-1 top-1 dark:bg-ocean-50 bg-ocean-950 w-6 h-6 rounded-full transition ${darkSide ? 'translate-x-full' : ''}`}></div>
                    </div>
                {/* {<div className="ml-3 dark:text-ocean-50 text-ocean-950 font-medium">
                    Dark Mode
                </div>} */}
            </label>
            </div>    
        
        </>
    );
}