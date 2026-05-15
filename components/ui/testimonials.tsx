'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Carter',
    title: 'Creative Director',
    quote:
      'The AI visuals looked better than our previous studio campaign. Absolutely unreal quality.',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },

  {
    name: 'Sophia Lee',
    title: 'Fashion Brand Owner',
    quote:
      'Working with this studio completely changed how we create content for launches.',
    avatarSrc:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
  },

  {
    name: 'Daniel Kim',
    title: 'Marketing Lead',
    quote:
      'Fast, cinematic, premium. It feels like having an entire creative agency powered by AI.',
    avatarSrc:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
]

export default function Testimonials() {

  const scrollContainerHeight =
    `calc(100vh + ${testimonials.length * 140}px)`

  return (

    <section className="px-0 md:px-4 py-0 md:py-6 bg-[#050505] overflow-visible">

      <div
        className="
        rounded-none md:rounded-[42px]
        border
        border-white/10
        bg-[#0B0B0B]
        px-4
        md:px-16
        py-12
        md:py-24
        overflow-visible
        "
      >

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          lg:gap-24
          items-start
          "
        >

          {/* LEFT */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">

            <div
              className="
              inline-flex
              items-center
              gap-2
              self-start
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2
              text-sm
              "
            >

              <div className="h-2 w-2 rounded-full bg-[#FF6B00]" />

              <span className="text-white/60">
                Client Experience
              </span>

            </div>

            <h2
              className="
              text-[36px]
              sm:text-[48px]
              md:text-[92px]
              leading-[0.92]
              tracking-[-0.06em]
              font-bold
              text-white
              "
            >
              Trusted By
              <br />
              Modern Brands
              <br />
              Worldwide
            </h2>

            <p className="text-base md:text-xl text-white/50 leading-relaxed max-w-xl">
              From fashion campaigns to product launches,
              brands use our AI visuals to create cinematic
              experiences that stand out instantly.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-2">

              {[
                ['120+', 'Projects'],
                ['4.9', 'Rating'],
                ['48h', 'Delivery'],
              ].map((stat, index) => (

                <div
                  key={index}
                  className="
                  rounded-[18px]
                  md:rounded-[24px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4 md:p-5
                  "
                >

                  <p className="text-3xl font-bold text-white">
                    {stat[0]}
                  </p>

                  <p className="text-sm text-white/40">
                    {stat[1]}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div
            className="
            relative
            flex
            flex-col
            gap-4
            "
            style={{
              height: scrollContainerHeight,
            }}
          >

            {testimonials.map((testimonial, index) => (

              <motion.div
                key={testimonial.name}
                className="md:sticky w-full"
                style={{
                top:
                  typeof window !== 'undefined' &&
                  window.innerWidth >= 768
                  ? `${40 + index * 28}px`
                   : '0px',
                }}
              >

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                  }}

                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}

                  className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  md:rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  p-5 md:p-8
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  "
                >

                  {/* GLOW */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,0,0.12),transparent_35%)]" />

                  <div className="relative z-10">

                    {/* PROFILE */}
                    <div className="flex items-center gap-5 mb-8">

                      <img
                        src={testimonial.avatarSrc}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl object-cover"
                      />

                      <div>

                        <h3 className="text-2xl font-semibold text-white">
                          {testimonial.name}
                        </h3>

                        <p className="text-white/40">
                          {testimonial.title}
                        </p>

                      </div>

                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-2 mb-8">

                      <span className="font-bold text-white">
                        {testimonial.rating.toFixed(1)}
                      </span>

                      <div className="flex">

                        {Array.from({ length: 5 }).map((_, i) => (

                          <Star
                            key={i}
                            className={`
                            w-4 h-4
                            ${
                              i < Math.floor(testimonial.rating)
                                ? 'text-[#FF6B00] fill-[#FF6B00]'
                                : 'text-white/20'
                            }
                            `}
                          />

                        ))}

                      </div>

                    </div>

                    {/* QUOTE */}
                    <p className="text-lg md:text-2xl leading-relaxed text-white/75">
                      “{testimonial.quote}”
                    </p>

                  </div>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}