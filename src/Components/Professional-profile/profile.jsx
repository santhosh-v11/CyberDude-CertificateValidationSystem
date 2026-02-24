import React from 'react'
import candidateData from '../../assets/Data'

const profile = () => {
  return (
    <>
    <main className='bg-[#170F0F]  min-h-3/6 w-full md:w-3/4 mx-auto mt-10 rounded-2xl p-6'>
    <h2 className='text-white text-2xl font-bold'>Professional Profile</h2>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
        {/* social media links secttion */}
        <div className='w-full  '>
            <div className=' bg-secondary rounded-lg p-2 px-4 mt-4 flex items-center gap-4 sm:w-full  '>
                <i className="fa-brands fa-github  text-4xl"></i>
                <div>
                    <p className='font-light text-white'>GitHub Profile</p>
                    <a href={candidateData[0].gitLink} target="_blank" className='text-white'>{candidateData[0].gitLink}</a>
                </div>
            </div>
            <div className='bg-secondary rounded-lg p-2 px-4 mt-4 flex items-center gap-4 w-full  '>
                <i className="fa-brands fa-linkedin  text-4xl"></i>
                <div>
                    <p className='font-light text-white'>LinkedIn Profile</p>
                    <a href={candidateData[0].linkedIn} className='text-white'>{candidateData[0].linkedIn}</a>
                </div>
            </div>
        </div>
        {/* tech stack section */}
        <div className='rounded-lg p px-4 mt-4 w-full  '>
            <h3 className='text-white font-semibold text-lg'>Technical Skills</h3>
            <div className='flex flex-wrap gap-2 mt-2 justify-start'>
                {candidateData[0].techStack.map((tech,index)=>(
                    <span key={index} className='bg-[#2A2A2A] text-orange-500 cursor-pointer px-3 py-1 rounded-full text-sm'>{tech}</span>
                ))}
            </div>
        </div>
    
            
        {/* recommendation-card */}
            <div className='mx-auto'>
                <div className='rounded-2xl bg-green-200 mt-4 p-4 space-y-2 w-70 h-40 flex flex-col justify-center'>
                    <p className='text-green-800 font-bold text-2xl uppercase '>Recommendation</p>
                    <div>
                        <p className='text-lg text-green-800 font-semibold '>{candidateData[0].recommendation} </p>
                        <p className='text-green-700'>Elligible for FullTime position.</p>
                    </div>
                </div>
            </div>

         {/* attendance-card */}
         <div className='mx-auto '>
                <div className='rounded-2xl bg-green-200 mt-4 p-4 space-y-2 w-70 h-40 flex flex-col justify-center'>
                    <p className='text-green-800 font-bold text-2xl uppercase '>Attendance</p>
                    <div>
                        <p className='text-lg text-green-800 font-semibold '>{candidateData[0].attendance} </p>
                        <p className='text-green-700'>Excellent attendance record.</p>
                    </div>
                </div>
            </div>

       
    </div>
    </main>
    </>
  )}

export default profile