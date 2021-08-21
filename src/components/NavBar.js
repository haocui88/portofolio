import React from 'react'
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import '../assets/home.css';
const NavBar = () => {
    return (
        <header className="bg-transparent bg-red-600">
            <div className="contianer mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact
                                    activeClassName="text-black" 
                                    className="cursive inline-flex items-center py-6 px-3 ml-4 mr-4 text-white hover:text-yellow-400 text-6xl font-bold tracking-widest">
                        Hao
                    </NavLink>
                    <NavLink to="/post"
                            className="cursive inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-400 hover:bg-red-700 text-2xl"
                            activeClassName="text-green-400 bg-red-700">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                            className="cursive inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-400 hover:bg-red-700 text-2xl"
                            activeClassName="text-green-400 bg-red-700">
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                            className="cursive inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-400 hover:bg-red-700 text-2xl"
                            activeClassName="text-green-400 bg-red-700">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6 mr-8">
                    <SocialIcon url="https://www.linkedin.com/in/hao-cui-44924173/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="https://github.com/haocui88" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="https://www.reddit.com/user/Puzzleheaded-Vast992" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>                  
                </div>
            </div>
        </header>
    )
}

export default NavBar
