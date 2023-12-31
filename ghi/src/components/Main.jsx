import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGitlab, FaGithub, FaFileDownload } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai"

const Main = () => {
    return (
        <div id="main" className="flex items-center justify-center bg-fixed bg-cover h-screen"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
                backgroundSize: window.innerWidth <= 768 ? 'cover' : 'cover',
            }}>
            <div className="p-10 bg-white/70 rounded-lg shadow-2xl w-5/6 md:w-1/2 lg:w-1/3">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 mb-4">Hi, I'm Chris Zambito</h1>
                <h2 className="flex sm:text-3xl text-2xl mb-4 text-gray-800">
                    {/* I'm a */}
                    <TypeAnimation
                        sequence={[
                            "💻 I'm a Software Engineer 💻",
                            2000,
                            "👾 I'm a Gamer 👾",
                            2000,
                            "💻 I'm a Developer 💻",
                            2000,
                            "☕️ I'm a Coffee Fanatic ☕️",
                            2000,
                            "🖥️ I'm a Coder 🖥️",
                            2000,
                            "🔥I'm a Full Stack Developer🔥",
                            2000,
                            "🍺 I love craft beer 🍻",
                            2000,
                            "😺🐶 I have four furbabies 🐶😸",
                            2000,
                        ]}
                        wrapper="div"
                        speed={50}
                        style={{ fontSize: "1em", paddingLeft: "5px" }}
                        repeat={Infinity}
                    />
                </h2>
                <div className="flex justify-around pt-6 mb-4 max-w-[300px] w-full text-gray-600 hover:text-gray-900">
                    <a href="https://gitlab.com/c.r.zambito" target="_blank" rel="noreferrer">
                        <FaGitlab className="cursor-pointer" size={30} />
                    </a>
                    <a href="https://github.com/chriszmx" target="_blank" rel="noreferrer">
                        <FaGithub className="cursor-pointer" size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/chris-zambito/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="cursor-pointer" size={30} />
                    </a>
                </div>
                <div className="flex justify-around mt-4">
                    <button className="py-2 px-4 bg-blue-600 text-white rounded-lg focus:outline-none focus:shadow-outline">
                        <a href="#contact" className="text-white">
                            <AiOutlineMail />
                            <span>Contact Me</span>
                        </a>
                    </button>
                    <button className="py-2 px-4 ml-4 bg-green-600 text-white rounded-lg focus:outline-none focus:shadow-outline">
                        <a href="/ChrisZambitoResume.docx.pdf" target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-1">
                            <FaFileDownload />
                            <span>Resume</span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;





// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import { FaLinkedin, FaGitlab, FaGithub, FaFileDownload } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai"

// const Main = () => {
//     return (
//         <div id="main" className="flex items-center justify-center bg-fixed bg-cover h-screen"
//             style={{
//                 backgroundImage: "url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
//                 backgroundSize: window.innerWidth <= 768 ? 'contain' : 'cover',
//             }}>
//             <div className="p-10 bg-white/70 rounded-lg shadow-2xl w-5/6 md:w-1/2 lg:w-1/3">
//                 <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 mb-4">Hi, I'm Chris Zambito</h1>
//                 <h2 className="flex sm:text-3xl text-2xl mb-4 text-gray-800">
//                     {/* I'm a */}
//                     <TypeAnimation
//                         sequence={[
//                             "💻 I'm a Software Engineer 💻",
//                             2000,
//                             "👾 I'm a Gamer 👾",
//                             2000,
//                             "💻 I'm a Developer 💻",
//                             2000,
//                             "☕️ I'm a Coffee Fanatic ☕️",
//                             2000,
//                             "🖥️ I'm a Coder 🖥️",
//                             2000,
//                             "🔥I'm a Full Stack Developer🔥",
//                             2000,
//                             "🍺 I love craft beer 🍻",
//                             2000,
//                             "😺🐶 I have four furbabies 🐶😸",
//                             2000,
//                         ]}
//                         wrapper="div"
//                         speed={50}
//                         style={{ fontSize: "1em", paddingLeft: "5px" }}
//                         repeat={Infinity}
//                     />
//                 </h2>
//                 <div className="flex justify-around pt-6 mb-4 max-w-[300px] w-full text-gray-600 hover:text-gray-900">
//                     <a href="https://gitlab.com/c.r.zambito" target="_blank" rel="noreferrer">
//                         <FaGitlab className="cursor-pointer" size={30} />
//                     </a>
//                     <a href="https://github.com/chriszmx" target="_blank" rel="noreferrer">
//                         <FaGithub className="cursor-pointer" size={30} />
//                     </a>
//                     <a href="https://www.linkedin.com/in/chris-zambito/" target="_blank" rel="noreferrer">
//                         <FaLinkedin className="cursor-pointer" size={30} />
//                     </a>
//                 </div>
//                 <div className="flex justify-around mt-4">
//                     <button className="py-2 px-4 bg-blue-600 text-white rounded-lg focus:outline-none focus:shadow-outline">
//                         <a href="mailto:c.r.zambito@gmail.com" className="text-white">
//                             <AiOutlineMail />
//                             <span>Contact Me</span>
//                         </a>
//                     </button>
//                     <button className="py-2 px-4 ml-4 bg-green-600 text-white rounded-lg focus:outline-none focus:shadow-outline">
//                         <a href="/ChrisZambitoResume.docx.pdf" target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-1">
//                             <FaFileDownload />
//                             <span>Resume</span>
//                         </a>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Main;
