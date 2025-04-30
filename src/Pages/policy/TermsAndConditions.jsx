import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">Effective Date: [Insert Date]</p>

      <p className="mb-4">By accessing and using [Your Website Name], you agree to comply with the following terms.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility</h2>
      <p className="mb-4">Users must be 13+ years old. If under 18, use must be supervised by a guardian.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Course Access</h2>
      <p className="mb-4">Courses are for personal use only and cannot be shared or resold.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Payments</h2>
      <p className="mb-4">Payments are securely processed via Razorpay. Prices are subject to change without notice.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Refunds</h2>
      <p className="mb-4">Refer to our Refund & Cancellation Policy.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
      <p className="mb-4">All content is owned by [Your Website Name] or instructors. Unauthorized reuse is prohibited.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Termination</h2>
      <p className="mb-4">We may suspend accounts for any violation without prior notice.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">We are not responsible for indirect losses or service issues.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Governing Law</h2>
      <p>This agreement is governed by the laws of [Your Country/State].</p>
    </div>
  );
};

export default TermsAndConditions;
