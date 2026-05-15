'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FlowButton } from '@/components/ui/flow-button'

const books = [
  {
    title: 'Basic Creative Suite',
    desc: 'A foundational manual for anyone entering the world of AI creative production. This volume introduces the mindset, workflow, and core systems behind modern AI-generated visuals, helping beginners understand how to turn ideas into structured creative outputs without relying on instant-result culture.',
    image: '/books/book-1.png',
    price: '$99',
    rotate: '-6deg',
    href: '/contact',
  },
  {
    title: 'Creative Strategist Suite',
    desc: 'A focused guide for AI editorial thinking, visual direction, and creative decision-making. Built for creators who want to move beyond generating images and start building stronger concepts, visual consistency, storytelling systems, and scalable creative workflows.',
    image: '/books/book-2.png',
    price: '$495',
    rotate: '0deg',
    featured: true,
    href: '/contact',
  },
  {
    title: 'Advance Creative Suite',
    desc: 'An advanced production manual designed for creators who want to operate AI at a professional level. This volume explores automation, production pipelines, high-level visual control, team scalability, and advanced creative systems used to build efficient and sophisticated AI creative ecosystems.',
    image: '/books/book-3.png',
    price: '$1499',
    rotate: '6deg',
    href: '/contact',
  },
]

export default function BookShowcase() {

  const [expanded, setExpanded] =
    useState<number | null>(null)

  return (

    <section className="bg-[#050505] px-0 md:px-4 py-0 md:py-6 overflow-hidden">

      <div
        className="
        rounded-none md:rounded-[42px]
        border
        border-white/10
        bg-[#0B0B0B]
        px-4
        md:px-12
        py-12
        md:py-16
        relative
        overflow-hidden
        "
      >

        {/* BACKGROUND GLOW */}

        <div
          className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-[#FF6B00]/10
          blur-[180px]
          pointer-events-none
          "
        />

        {/* HEADER */}

        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-10
          mb-12
          relative
          z-10
          "
        >

          <div>

            <p
              className="
              text-[#FF6B00]
              text-xl
              md:text-2xl
              font-semibold
              mb-6
              "
            >
              Creative Resources
            </p>

            <h2
              className="
              text-[38px]
              md:text-[64px]
              leading-[0.92]
              tracking-[-0.06em]
              font-bold
              text-white
              "
            >
              Build Faster
              <br />
              Create Better.
            </h2>

          </div>

          <div className="max-w-md">

            <p
              className="
              text-white/50
              text-base
              md:text-lg
              leading-relaxed
              "
            >
              Premium digital books designed to help creators,
              studios & brands build cinematic AI content systems.
            </p>

          </div>

        </div>

        {/* BOOKS */}

        <div
          className="
          grid
          lg:grid-cols-3
          gap-8
          relative
          z-10
          "
        >

          {books.map((book, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
               whileHover={{
                 y: -12,
                 rotate:
                   index === 0
                     ? -4
                     : index === 2
                     ? 4
                     : 0,
                 scale: 1.02,
               }}
              
              className={`
                group
                relative
                rounded-[24px]
                md:rounded-[34px]
                border
                overflow-hidden
                transition-all
                duration-500
                ${
                  book.featured
                    ? 'border-[#FF6B00]/40 bg-[#151515]'
                    : 'border-white/10 bg-[#111111]'
                }
              `}
            >

              {/* IMAGE */}

              <div
                className="
                relative
                h-[260px]
                md:h-[320px]
                overflow-hidden
                "
              >

                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                  "
                />

                {/* PRICE */}

                <div
                  className="
                  absolute
                  top-5
                  right-5
                  rounded-full
                  border
                  border-[#FF6B00]/20
                  bg-black/70
                  backdrop-blur-2xl
                  px-5
                  py-2.5
                  shadow-[0_0_30px_rgba(255,107,0,0.15)]
                  "
                >
                  <span
                    className="
                    text-white
                    text-base
                    font-semibold
                    tracking-[-0.02em]
                    "
                  >
                    {book.price}
                  </span>
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-7">

                <h3
                  className="
                  text-2xl
                  font-semibold
                  text-white
                  mb-4
                  "
                >
                  {book.title}
                </h3>

                <div className="mb-8">

  <p
    className={`
      text-white/50
      leading-relaxed
      text-sm
      transition-all
      duration-300
      ${
        expanded === index
          ? ''
          : 'line-clamp-3'
      }
    `}
  >
    {book.desc}
  </p>

  {book.desc.length > 120 && (

    <button
      onClick={() =>
        setExpanded(
          expanded === index
            ? null
            : index
        )
      }
      className="
      mt-3
      text-[#FF6B00]
      text-xs
      font-medium
      hover:text-white
      transition-colors
      duration-300
      "
    >
      {expanded === index
        ? 'Show less'
        : 'Read more'}
    </button>

  )}

</div>

                <div className="mt-8">
                  <Link href={book.href}>
                    <FlowButton text="Buy Course" />
                  </Link>
                </div>

              </div>

              {/* HOVER GLOW */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                pointer-events-none
                "
              >

                <div
                  className="
                  absolute
                  inset-0
                  bg-[#FF6B00]/[0.03]
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}