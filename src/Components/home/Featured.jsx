import React from 'react'
import labs from '../../Assets/Features/labs.png'
import certificates from '../../Assets/Features/certificates.png'
import caseStudies from '../../Assets/Features/CaseStudies.png'
import learning from '../../Assets/Features/learning.png'

const Featured = () => {
  return (
    <section className='flex flex-col gap-10 py-16'>
       <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-center text-gray-900">
             Our Features
        </h1>
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <img src={labs} alt="" style={{height:"170px"}}  />
          <img src={caseStudies} alt="" style={{height:"170px"}} />
          <img src={certificates} alt="" style={{height:"170px"}} />
          <img src={learning} alt="" style={{height:"170px"}} />

        </div>

    </section>
        
  )
}

export default Featured