import { useState } from 'react';
import useDarkSide from './useDarkSide.js';

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        <>
            <div className="flex flex-row justify-between toggle">
            <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input type="checkbox" onChange={toggleDarkMode} name="dark-mode" id="dark-toggle"  className="checkbox hidden" checked={darkSide} />
                        <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
                        <div className={`dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition ${darkSide ? 'translate-x-full' : ''}`}></div>
                    </div>
                <div className="ml-3 dark:text-white text-gray-900 font-medium">
                    Dark Mode
                </div>
            </label>
            </div>    
        
        </>
    );
}