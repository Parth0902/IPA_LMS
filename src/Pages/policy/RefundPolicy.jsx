import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 mt-24">
      <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>
      <p className="mb-4">
        At IPA Education Academy, we are committed to providing high-quality digital learning experiences. Please read our refund and cancellation policy carefully before making a purchase.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Refund Eligibility</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Accidental duplicate purchases.</li>
        <li>Technical issues preventing course access (not user device-related).</li>
        <li>Course content is inaccessible or not delivered as promised.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Non-Refundable Cases</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You’ve completed more than 10% of the course.</li>
        <li>You changed your mind after accessing the course.</li>
        <li>Purchases made using discount codes (unless faulty).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Refund Window & Process</h2>
      <p className="mb-4">
        Refund requests must be made within <strong>7 days</strong> of purchase. Send your request to <a href="mailto:ipaedutech@gmail.com" className="text-blue-600 underline">ipaedutech@gmail.com</a> with your order ID and reason.
        Approved refunds will be processed through Razorpay within 7–10 business days.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cancellations</h2>
      <p>Courses once purchased cannot be canceled. However, you may request account deletion.</p>
    </div>
  );
};

export default RefundPolicy;
