import React from "react";
import { FaReact } from 'react-icons/fa';

const ProjectItem = ({ img, title, tools, description, url }) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <img src={img} alt="/" className="rounded-xl group-hover:opacity-10"/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                    {title}
                </h3>
                <p className="pb-2 pt-2 text-white text-center">{description}</p>
                <p className="pb-4 text-white text-center">
                    {tools.join(', ')}
                </p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center justify-center text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                        <FaReact size={20} className="mr-2"/> Source Code
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ProjectItem





// import React from "react";

// const ProjectItem = ({ img, title }) => {
//     return (
//         <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
//             <img src={img} alt="/" className="rounded-xl group-hover:opacity-10"/>
//             <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//                 <h3 className="text-2xl font-bold text-white tracking-wider text-center">
//                     {title}
//                 </h3>
//                 <p className="pb-4 pt-2 text-white text-center">React JS</p>
//                 <a href="">
//                     <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">More Info</p>
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default ProjectItem;
