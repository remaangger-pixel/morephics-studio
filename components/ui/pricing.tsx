'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { FlowButton } from '@/components/ui/flow-button'

const plans = [
  {
    name: 'Starter',
    price: '$149',
    desc: 'AI product visuals for small brands & creators.',
    features: [
      '10 AI Product Photos',
      'Commercial License',
      '4K Export',
      'Fast Delivery',
    ],
  },
  {
    name: 'Professional',
    price: '$399',
    featured: true,
    desc: 'Cinematic AI campaigns designed for modern brands.',
    features: [
      '30 AI Visuals',
      'Creative Direction',
      'Social Media Assets',
      'Priority Support',
    ],
  },
  {
    name: 'Enterprise',
    price: '$899',
    desc: 'Full AI content system for scaling creative production.',
    features: [
      'Unlimited Concepts',
      'Campaign Strategy',
      'Content Automation',
      'Dedicated Support',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="px-4 py-6 bg-[#050505]">
      <div className="rounded-[42px] border border-white/10 bg-[#0B0B0B] px-10 md:px-16 py-24 overflow-hidden">

        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">

          <div>
            <p className="text-[#FF6B00] text-2xl md:text-3xl font-semibold mb-8">
              Pricing Plans
            </p>

            <h2 className="text-[52px] md:text-[92px] leading-[0.92] tracking-[-0.06em] font-bold text-white">
              Flexible AI
              <br />
              Services Built
              <br />
              For Growth
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-white/60 text-xl leading-relaxed max-w-xl">
              Choose a plan tailored for your brand — from AI product
              photography to full cinematic campaign systems.
            </p>

            <Link
  href="/contact"
  className="w-fit block"
>
  <FlowButton text="Book a call" />
</Link>
            
          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                relative rounded-[32px] border overflow-hidden
                backdrop-blur-xl p-8 flex flex-col justify-between min-h-[520px]
                ${
                  plan.featured
                    ? 'bg-[#FF6B00] text-white border-[#FF6B00]'
                    : 'bg-white/[0.03] border-white/10 text-white'
                }
              `}
            >

              <div className="relative z-10">

                {plan.featured && (
                  <div className="mb-6 inline-flex rounded-full bg-white text-black px-4 py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-4xl font-bold mb-4">
                  {plan.name}
                </h3>

                <p
                  className={`text-lg leading-relaxed mb-10 ${
                    plan.featured
                      ? 'text-white/80'
                      : 'text-white/50'
                  }`}
                >
                  {plan.desc}
                </p>

                <div className="mb-12">
                  <span className="text-6xl font-black tracking-[-0.05em]">
                    {plan.price}
                  </span>

                  <span
                    className={`ml-2 text-lg ${
                      plan.featured
                        ? 'text-white/70'
                        : 'text-white/40'
                    }`}
                  >
                    /project
                  </span>
                </div>

                <div className="space-y-4 mb-12">

                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`
                          w-7 h-7 rounded-full flex items-center justify-center
                          ${
                            plan.featured
                              ? 'bg-white text-[#FF6B00]'
                              : 'bg-[#FF6B00] text-white'
                          }
                        `}
                      >
                        <Check size={15} />
                      </div>

                      <p
                        className={
                          plan.featured
                            ? 'text-white'
                            : 'text-white/70'
                        }
                      >
                        {feature}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

              <Link
  href="/contact"
  className="relative z-10 w-fit block"
>

  <FlowButton
    text="Get Started"
    variant={plan.featured ? 'light' : 'orange'}
  />

</Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}