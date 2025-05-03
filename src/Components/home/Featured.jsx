import React from 'react'
import certificates from '../../Assets/Features/certificates.png'
import caseStudies from '../../Assets/Features/CaseStudies.png'
import learning from '../../Assets/Features/learning.png'
import teacher from '../../Assets/Features/teacher.png'

const Featured = () => {
  return (
    <section className='flex flex-col gap-10 py-16'>
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-center text-gray-900">
        Our Features
      </h1>
      <div className='flex justify-center items-center gap-20 flex-wrap'>
        <div className='flex flex-col gap-2 justify-center items-center h-[170px] w-[170px] border-[0.2rem] border-black rounded-full p-5'>
          <img src='https://IPA-Images.b-cdn.net/Assets/Features/teacher.png' alt="" style={{ height: "65px" }} />
          <p className='font-bold text-center text-[18px]'>Expert Faculty</p>
        </div>
        <img src='https://IPA-Images.b-cdn.net/Assets/Features/CaseStudies.png' alt="" style={{ height: "170px" }} />
        <img src='https://IPA-Images.b-cdn.net/Assets/Features/certificates.png' alt="" style={{ height: "170px" }} />
        <img src='https://IPA-Images.b-cdn.net/Assets/Features/learning.png' alt="" style={{ height: "170px" }} />
      </div>
    </section>
  )
}

export default Featured