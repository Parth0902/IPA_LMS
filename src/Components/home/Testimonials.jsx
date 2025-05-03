import React from 'react'

import { CircleUser } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font py-24">

      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-center text-gray-900">
        Client Testimonilas
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <CircleUser className="w-20 h-20 mb-8 object-center rounded-full inline-block" />
              <p className="leading-relaxed text-justify">"I’ve attended many CME programs, but FDFM stood out. The sessions were not passive learning experiences – they were interactive and deeply engaging. We discussed patient scenarios, shared experiences, and even role-played counseling sessions. The clinical postings were the highlight – observing and assisting in debridements, offloading, and wound care protocols gave me a practical edge I was missing before."</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Dr. Asha Thomas</h2>
              <p className="text-gray-500">Diabetologist, Kochi</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <CircleUser className="w-20 h-20 mb-8 object-center rounded-full inline-block" />
              <p className="leading-relaxed text-justify">"FDFM gave me a solid foundation in diabetic foot care. The lectures were well-structured but what made them powerful was the interactive nature – we weren’t just listening, we were learning through doing and discussing. The hands-on exposure to wound care techniques and vascular assessments in the clinics added immense value. I’ve already started applying these skills in my practice with great results."</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Dr. Vikram Patel</h2>
              <p className="text-gray-500">Family Physician, Pune</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <CircleUser className="w-20 h-20 mb-8 object-center rounded-full inline-block" />
              <p className="leading-relaxed text-justify">"This fellowship was a game-changer for my practice. The balance between theory and practical training was spot on. The sessions weren't just lectures – they were dynamic discussions led by passionate faculty who truly care about improving diabetic foot care. The hands-on training in live clinics helped bridge the gap between knowledge and execution. I now feel better equipped to prevent amputations and offer comprehensive care to my patients."</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Dr. Rahul Mehta</h2>
              <p className="text-gray-500"> General Surgeon, Ahmedabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials
