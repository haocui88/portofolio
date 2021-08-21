import React, { useState } from 'react';
import fall from '../img/autumn.jpg';
import spring from '../img/spring.jpg';
import 'react-dragswitch/dist/index.css'
import { DragSwitch } from 'react-dragswitch';
import '../assets/home.css';
const Home = () => {
    const [checked, setChecked] = useState(false)
    let image='';
    let text='';

    checked ? image = spring : image = fall
    checked ? text = "spring" : text = "fall"

    return (
        <>
            <div className="flex justify-end bg-red-600">
                <div className="mr-10">
                    <label>
                        <DragSwitch offColor='rgb(255,160,0)' checked={checked} onChange={(e) => {
                            setChecked(e)
                        }}/>
                        <span className="cursive 2xl relative font-bold">Change Season! </span>
                    </label>
                </div>
            </div>
            <main>
                <img src={image} alt='fall leaves' className="absolute object-cover w-full h-full"/>
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                                    <h1 className="cursive text-8xl text-black-400 font-bold leading-none lg:leading-snug home-name bg-transparent bg-opacity-40">Hello {text}! I'am Hao.</h1>
                </section>     
            </main>
        </>

    )
}

export default Home
