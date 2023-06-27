import React, { useState } from 'react';
import profilePic from '../assets/profile.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Collapsible from 'react-collapsible';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe = () => {
    const skills = {
        programming: [
        { name: "Python", value: "95" },
        { name: "JavaScript", value: "90" },
        { name: "Java", value: "80" },
        ],
        frontEnd: [
        { name: "React", value: "95" },
        { name: "Vue", value: "85" },
        { name: "Angular", value: "75" },
        ],
        backEnd: [
        { name: "Django", value: "90" },
        { name: "Flask", value: "80" },
        { name: "Express", value: "75" },
        ],
        databases: [
        { name: "SQL", value: "90" },
        { name: "MongoDB", value: "80" },
        { name: "Firebase", value: "75" },
        ],
        design: [
        { name: "Figma", value: "90" },
        { name: "Sketch", value: "80" },
        { name: "Adobe XD", value: "75" },
        ],
    };

    const [activeIndex, setActiveIndex] = useState(0);

    const Skill = ({ skill }) => (
        <div className="my-2 text-white">
        <div className="flex justify-between">
            <span className='text-white'>{skill.name}</span>
            <span className='text-white'>{skill.value}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full mt-1">
            <div className="h-1 rounded-full bg-green-500" style={{ width: `${skill.value}%` }}></div>
        </div>
        </div>
    );

    return (
        <div className="min-h-screen flex md:items-center bg-gradient-to-r from-black to-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 py-5">
            <div className="w-full md:w-1/3 xl:w-1/4 items-center text-center md:text-left">
            <h1 className="text-5xl text-white font-semibold">About Me</h1>
            <img className="w-48 h-48 mt-10 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white shadow-lg" src={profilePic} alt="Profile" />
            <div className="text-lg md:text-2xl text-white font-semibold py-5">
                <h2 className="text-3xl font-bold leading-none">Chris Zambito</h2>

                <div className="text-lg md:text-2xl text-white font-semibold py-5">

                    <div className="py-2 text-gray-200 text-center md:text-left">
                        <p className="flex items-center justify-center md:justify-start">
                            <FaMapMarkerAlt className="mr-2" />
                            <a className="text-sm md:text-base" href="https://www.google.com/maps/search/?api=1&query=Buffalo,NY" target="_blank" rel="noopener noreferrer">
                                Buffalo, NY
                            </a>
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <FaEnvelope className="mr-2" />
                            <a className="text-sm md:text-base" href="mailto:c.r.zambito@gmail.com">
                                Email: c.r.zambito@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <FaPhone className="mr-2" />
                            <a className="text-sm md:text-base" href="tel:716-698-8355">
                                Phone: 716-698-8355
                            </a>
                        </p>
                    </div>
                </div>

            </div>
            </div>
            <div className="w-full md:w-2/3 xl:w-3/4 p-8 mt-2 md:mt-10">
            <h1 className="font-bold text-4xl md:text-5xl text-white mb-5">Skills</h1>
            <div className="space-y-4">
                {Object.keys(skills).map((category, i) => (
                <Collapsible key={i} trigger={<span style={{color: 'red'}}> {category.toUpperCase()}</span>} open={i === activeIndex} onOpening={() => setActiveIndex(i)} onClosing={() => setActiveIndex(-1)}>
                    {skills[category].map((skill, j) => <Skill key={j} skill={skill} />)}
                </Collapsible>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}

export default AboutMe;
