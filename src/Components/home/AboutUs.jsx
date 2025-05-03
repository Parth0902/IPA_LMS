
import React from 'react'
import { Link } from 'react-router-dom'
// import images from "../../Assets/images.png";
import images from '../../Assets/aboutUs.png';

const AboutUs = () => {
  return (
    <section class="text-gray-600 body-font px-16 bg-slate-100">
      <div class="container mx-auto flex px-5 pt-24 pb-12 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About IPA
          </h1>
          <p class="mb-2 leading-relaxed text-justify"> IPA is the largest Indian professional body for Foot care specialist where our goal is to promote awareness of Diabetic and non diabetic Foot Care and Prevention. The Indian Podiatry Association (IPA) is a dynamic and dedicated non-profit organization focused on improving foot care and wound healing across India and globally. Established with the goal of enhancing the quality of life for patients suffering from diabetic and non-diabetic foot wounds, IPA brings together healthcare professionals from various disciplines, including podiatrists, surgeons, physiotherapists, and other allied healthcare providers. The association serves as a hub for research, education, and advocacy in foot care, providing essential resources and training for medical practitioners.</p>
          <p class="mb-2 leading-relaxed text-justify">At IPA, the mission is simple yet powerful: “I Prevent Amputation.” Through education, advocacy, and
            collaboration, IPA is driving a paradigm shift in foot and wound care, ensuring that fewer people face the
            life-altering consequences of amputations and empowering healthcare professionals to provide better,
            more effective care.</p>
          <p class="mb-2 leading-relaxed text-justify">With its expanding reach, IPA remains committed to its mission of saving limbs and lives, one step at a time.
          </p>

          <div class="flex justify-center mt-10">
            {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
            <Link
              to = 'https://www.ipafootcare.org/'
              class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-200  hover:text-black rounded text-lg transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div class="flex item-center justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-slate-100">
          <img class="object-cover object-center rounded " alt="hero" src={images} />
        </div>
      </div>
    </section>
  )
}

export default AboutUs