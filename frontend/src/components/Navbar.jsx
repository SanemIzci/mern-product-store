import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";  
import { LuSun } from "react-icons/lu";  
import React from 'react';


const Navbar = () => {
	const [darkMode, setDarkMode] = React.useState(true);

	const toggleColorMode = () => setDarkMode(!darkMode);

	return (
		<div className="max-w-screen-xl mx-auto px-4">
			<div className="flex h-16 items-center justify-around flex-col sm:flex-row dark:bg-black text:white">
				<h1 className="text-center text-2xl sm:text-4xl font-bold uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
					<Link to="/">Product Store 🛒</Link>
				</h1>
				<div className="flex space-x-2 items-center">
					<Link to="/create">
						<button className="p-2 bg-blue-500 text-white rounded-md">
							<span className="text-xl">+</span>
						</button>
					</Link>
					<button onClick={toggleColorMode} className="p-2">
						{darkMode ? <LuSun size={20} /> : <IoMoon size={20} />}
					</button>
				</div>
			</div>
		</div>
	);
}; 


export default Navbar;

