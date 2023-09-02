// src/AppleBenefits.js
import React from 'react';
import './apple.css';
const AppleBenefits = () => {
  const appleBenefits = [
    'Rich in dietary fiber, which aids digestion.',
    'Rich in dietary fiber, which aids digestion.',
    'Contain antioxidants that support overall health.',
    'May help lower the risk of heart disease.',
    'Can contribute to improved brain health.',
    'Supports immune system with vitamin C.',
  ];

  return (
    <div>
      <h1>Benefits of Apples</h1>
      <ul>
        {appleBenefits.map((benefit, index) => (
          <li className='container' key={index}>{benefit}</li>
        ))}
      </ul>
   
    </div>
  );
};

export default AppleBenefits;
