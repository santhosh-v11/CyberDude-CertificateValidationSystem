import React from 'react'
import candidateData from '../../assets/Data'
const Projects = () => {
  return (
    <>
    <div className='bg-[#170F0F] min-h-3/6 w-full md:w-3/4 mx-auto mt-10 rounded-2xl p-6 '>
        <h2 className='text-white text-2xl font-bold'>Key Projects Developed</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4  mt-4'>
           { candidateData[0].projects.map((project)=>(
                <div key={project.id} className='bg-[#2A2A2A] rounded-lg p-4 space-y-3'>
                    <div className='mx-auto w-48 h-48 bg-gray-400 rounded-2xl'>
                        {/* Placeholder for project image */}
                    </div>
                    <h3 className='text-white  text-2xl font-semibold'>{project.title}</h3>
                    <p className='text-white '>{project.desc}</p>
                    <a href={project.link} target="_blank" className='text-secondary font-semibold mt-2 inline-block'>View Project<i className="fa-solid fa-arrow-up-right-from-square ml-2"></i></a>
                </div>
            ))
           }
        </div>
    </div>
    </>
  )
}

export default Projects