import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: "2023-Current",
        title: 'Apex Cloud Development [Internship]',
        details: 'As an Associate Software Engineer at Apex Cloud Development since May 2023, I have been actively involved in developing a transformative technology aimed at enhancing operations and service within the Bar and Restaurant Industry. Our cutting-edge platform revolutionizes how businesses communicate with employees, manage systems and operations, and provide real-time information to customers. Throughout this internship, I have gained hands-on experience working remotely with a diverse technology stack, including React, Vue, Django, Java for Android, Swift for iOS, and PostgresSQL. This experience is fostering my growth as a versatile software engineer capable of delivering solutions across different platforms. '
    },
    {
        year: "2016-Current",
        title: 'Real Estate',
        details: 'Property ownership / management'
    },
    {
        year: "2009-2023",
        title: 'Wesselmann Dry Cleaners',
        details: 'As the Operational Manager at Wesselmann Cleaners for over 14 years, I have overseen a full-service dry cleaning business offering an array of services from commercial and retail dry cleaning to wholesale services, and managed convenient pickup and delivery options. My responsibilities included securing contracts with esteemed institutions like the Air Force and ROTC, demonstrating our adaptability to unique requirements and commitment to high-quality service. I prioritized building robust relationships, optimizing operations, and ensuring customer satisfaction, all of which contributed to the growth and standing of Wesselmann Cleaners. This managerial experience refined my skills in contract negotiation, operations management, and customer service, applicable to various aspects of software engineering.'
    },
    {
        year: "2009-2023",
        title: 'BridalKare Gown Preservation',
        details: 'As the Operational Manager at BridalKare Gown Preservation from 2009 to 2023, I specialized in the meticulous cleaning and preservation of wedding gowns, including antique and historical pieces, catering to a diverse clientele from brides to museums and collectors. I established an extensive network of wholesalers throughout the United States, facilitating a seamless logistics process from gown reception to professional packaging and delivery. With a focus on quality, attention to detail, and understanding of the sentimental value attached to these pieces, I successfully built a reputation for excellence in gown preservation. This experience honed my skills in supply chain management, detail-oriented tasks, and digital marketing, all valuable in problem-solving and management aspects of software engineering.'
    },
    {
        year: "2009-2023",
        title: 'CRDN of WNY Textiles & Electronic Restoration',
        details: "As the Operational Manager at CRDN of WNY - Textiles and Electronics from 2009 to 2023, I specialized in providing comprehensive restoration services for items damaged by fire, water, or smoke. Our team handled a broad array of items, from clothing and bedding to electronics, restoring them to their pre-loss condition."
    }
]

const Work = () => {
    return (
        <div id='work' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#0015be]'>
                Experience
            </h1>
            {data.map((item, idx)=>(
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.details} />
            ))}
        </div>
    )
}

export default Work
