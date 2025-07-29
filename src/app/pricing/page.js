'use client';

import { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = {
    monthly: [
      { name: 'Free Starter', price: 'Free', features: ['5 pages/month', 'PDF to CSV', 'Auto deletion', 'No signup required'], cta: '/signup' },
      { name: 'Lite', price: '$7.50', subtitle: 'Save 17% annually', features: ['100 pages/month', 'Convert Bank Statements'], cta: '/signup' },
      { name: 'Basic', price: '$15', subtitle: 'Save 40% annually', features: ['500 pages/month', 'Convert Bank Statements'], cta: '/signup' },
      { name: 'Pro', price: '$29.90', subtitle: 'Save 40% annually', features: ['1500 pages/month', 'Convert Bank Statements', 'API Access', 'Priority Support'], popular: true, cta: '/signup' },
      { name: 'Business', price: '$49.90', subtitle: 'Save 40% annually', features: ['4000 pages/month', 'Convert Bank Statements', 'API Access', 'Priority Support'], cta: '/signup' },
    ],
    yearly: [
      { name: 'Free Starter', price: 'Free', features: ['5 pages/month', 'PDF to CSV', 'Auto deletion', 'No signup required'], cta: '/signup' },
      { name: 'Lite', price: '$72', subtitle: 'Billed annually', features: ['100 pages/month', 'Convert Bank Statements'], cta: '/signup' },
      { name: 'Basic', price: '$144', subtitle: 'Billed annually', features: ['500 pages/month', 'Convert Bank Statements'], cta: '/signup' },
      { name: 'Pro', price: '$288', subtitle: 'Billed annually', features: ['1500 pages/month', 'Convert Bank Statements', 'API Access', 'Priority Support'], popular: true, cta: '/signup' },
      { name: 'Business', price: '$480', subtitle: 'Billed annually', features: ['4000 pages/month', 'Convert Bank Statements', 'API Access', 'Priority Support'], cta: '/signup' },
    ]
  };

  return (
    <section className="text-center px-4 sm:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>

      {/* Toggle */}
      <div className="inline-flex rounded-md shadow-sm border border-gray-300 mb-10 overflow-hidden">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-4 py-2 text-sm font-medium transition ${
            billingCycle === 'monthly' ? 'bg-[#45b3e7] text-white' : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`px-4 py-2 text-sm font-medium transition ${
            billingCycle === 'yearly' ? 'bg-[#e77945] text-white' : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
        >
          Yearly (up to -40%)
        </button>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-5 gap-6">
        {plans[billingCycle].map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-lg border ${
              plan.popular ? 'bg-[#f0faff] border-[#45b3e7] shadow-md' : 'bg-white border-gray-200'
            } p-6 flex flex-col justify-between`}
          >
            <h3 className="text-lg font-semibold text-[#e77945]">{plan.name}</h3>
            <p className="text-2xl font-bold mt-2 text-[#45b3e7]">
              {plan.price}
              {plan.price !== 'Free' && <span className="text-sm text-gray-500">/mo</span>}
            </p>
            {plan.subtitle && <p className="text-xs text-gray-500 mb-4">{plan.subtitle}</p>}

            <ul className="text-sm text-left mt-2 space-y-2 mb-6">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#45b3e7] mr-2">✔</span>
                  <span className="text-gray-800">{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href={plan.cta}
              className="mt-auto bg-[#45b3e7] hover:bg-[#3ca2d3] text-white font-medium py-2 rounded text-sm"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>

      {/* Custom Plan */}
      <div className="text-center mt-10">
        <p className="text-lg font-medium text-gray-800">Need a custom plan?</p>
        <p className="text-sm text-gray-500 mb-2">
          We offer custom enterprise plans with higher limits and dedicated support.
        </p>
        <a href="/contact" className="text-[#45b3e7] font-semibold hover:underline">Contact Us →</a>
      </div>
    </section>
  );
}
