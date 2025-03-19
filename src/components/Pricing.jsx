// components/Pricing.js
import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: 29,
      features: [
        'Single website',
        '5GB storage',
        'Basic support',
        'Monthly updates'
      ],
      isPopular: false
    },
    {
      id: 2,
      name: 'Pro',
      price: 79,
      features: [
        'Up to 5 websites',
        '20GB storage',
        'Priority support',
        'Weekly updates',
        'Custom domain'
      ],
      isPopular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 199,
      features: [
        'Unlimited websites',
        '100GB storage',
        '24/7 dedicated support',
        'Daily updates',
        'Custom domains',
        'Advanced analytics'
      ],
      isPopular: false
    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    // You could also implement additional logic here like showing a modal or navigating to checkout
  };

  return (
    <section className="py-16" id="pricing">
      <h2 className="text-3xl font-bold text-center mb-4">Pricing Plans</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Choose the perfect plan for your needs. All plans include our core features with different levels of support and resources.</p>
      
      {selectedPlan && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 max-w-2xl mx-auto">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                You've selected the <span className="font-bold">{plans.find(plan => plan.id === selectedPlan)?.name}</span> plan! 
                <button 
                  className="ml-2 text-blue-800 underline" 
                  onClick={() => setSelectedPlan(null)}
                >
                  Change selection
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
              selectedPlan === plan.id 
                ? 'ring-4 ring-blue-500 transform scale-105' 
                : plan.isPopular 
                  ? 'ring-2 ring-blue-500' 
                  : 'hover:shadow-xl'
            }`}
          >
            {plan.isPopular && (
              <div className="bg-blue-500 text-white text-center py-2">
                Most Popular
              </div>
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-4">${plan.price}<span className="text-lg text-gray-500">/mo</span></div>
              <ul className="mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2 justify-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full py-2 rounded-lg font-bold transition duration-300 bottom-1 ${
                  selectedPlan === plan.id 
                    ? 'bg-blue-700 text-white' 
                    : plan.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedPlan && (
        <div className="text-center mt-12">
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            onClick={() => alert(`Proceeding to checkout with the ${plans.find(plan => plan.id === selectedPlan)?.name} plan`)}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default Pricing;