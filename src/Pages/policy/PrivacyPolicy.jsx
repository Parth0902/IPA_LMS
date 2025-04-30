import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">Effective Date: [Insert Date]</p>

      <p className="mb-4">[Your Website Name] is committed to protecting your privacy. This policy explains how we collect and use your data.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal info: name, email, phone (used during sign-up/checkout).</li>
        <li>Payment data: securely handled via Razorpay; we do not store card info.</li>
        <li>Course activity: progress, interactions, login data.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Data</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide access to courses.</li>
        <li>For account and learning progress tracking.</li>
        <li>To send updates and support messages.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Third-Party Services</h2>
      <p className="mb-4">We use services like Razorpay (payments), analytics, and hosting. These may collect data under their own policies.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">We use cookies to improve experience. You may disable them in your browser settings.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Security</h2>
      <p className="mb-4">We implement industry-standard practices to protect your data including SSL, encryption, and access controls.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Request data access or correction.</li>
        <li>Request account/data deletion.</li>
        <li>Opt-out of emails anytime.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact</h2>
      <p>
        For privacy questions, contact <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
