import React, { useEffect, useState } from 'react';
import hill1 from "../../assets/hill1.png";
import hill2 from "../../assets/hill2.png";
import hill3 from "../../assets/hill3.png";
import hill4 from "../../assets/hill4.png";
import hill5 from "../../assets/hill5.png";
import leaf from "../../assets/leaf.png";
import plant from "../../assets/plant.png";
import tree from "../../assets/tree.png";


export default function Home() {
    const [scrollY, setScrollY] = useState(0);
    

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden bg-gray-100">
            {/* Parallax elements */}
            <img className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ top: `${scrollY * 1.5}px` }} src={hill1} alt="hill1"/>
            <img className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={hill2} alt="hill2"/>
            <img className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={hill3} alt="hill3"/>
            <img className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ left: `${scrollY * -1.5}px` }} src={hill4} alt="hill4"/>
            <img className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ left: `${scrollY * 1.5}px` }} src={hill5} alt="hill5"/>
            <img className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={tree} alt="tree"/>
            <img className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ left: `${scrollY * 1.5}px` }} src={leaf} alt="leaf"/>
            <img className="absolute w-full inset-0 h-full object-cover pointer-events-none" style={{ bottom: `${scrollY * 1.5}px` }} src={plant} alt="plant"/>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center pointer-events-none">
                <h2 className="text-7xl font-bold text-white pointer-events-none " style={{ transform: `translateY(${scrollY * 1}px)` }} >Animation Website</h2>
            </div>
        </div>
    );
}
