'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import Navbar from '@/components/ui/navbar'
import FooterColumn from '@/components/ui/footer-column'

import { projects } from '../../data/projects'

const videos = [
  {
    title: 'AI Fashion Reel',
    embed:
      'https://player.vimeo.com/video/508394504',
  },

  {
    title: 'Luxury Product Animation',
    embed:
      'https://player.vimeo.com/video/389650510',
  },
]

export default function ExploreWorkPage() {
  return (

    <main className="bg-[#050505] min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="px-4 pt-4 pb-6">

        <div
          className="
          rounded-[42px]
          overflow-hidden
          border
          border-white/10
          bg-[#0B0B0B]
          px-8
          md:px-16
          py-20
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}
          >

            <p className="text-[#FF6B00] text-xl md:text-2xl font-semibold mb-8">
              Explore Projects
            </p>

            <h1
              className="
              text-[52px]
              md:text-[110px]
              leading-[0.9]
              tracking-[-0.06em]
              font-bold
              text-white
              max-w-[1100px]
              "
            >
              A curated collection
              <br />
              of AI visuals, cinematic
              <br />
              campaigns & motion content.
            </h1>

          </motion.div>

        </div>

      </section>

      {/* IMAGE PROJECTS */}
      <section className="px-4 py-6">

        <div
          className="
          rounded-[42px]
          bg-[#F3F3F3]
          px-8
          md:px-16
          py-20
          "
        >

          <div className="mb-16">

            <p className="text-[#FF6B00] text-xl font-semibold mb-6">
              Selected Works
            </p>

            <h2
              className="
              text-[44px]
              md:text-[72px]
              leading-[0.92]
              tracking-[-0.06em]
              font-bold
              text-black
              "
            >
              Visual Projects
            </h2>

          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {projects.map((project, index) => (

              <Link
                key={index}
                href={`/explore-work/${project.slug}`}
              >

                <motion.div

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
                    amount: 0.2,
                  }}

                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}

                  whileHover={{
                    y: -8,
                  }}

                  className="group cursor-pointer"
                >

                  <div
                    className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    aspect-[0.82]
                    "
                  >

                    {/* IMAGE */}
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                      "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">

                      <p className="text-[#FF6B00] text-sm uppercase tracking-[0.2em] mb-3">
                        {project.category}
                      </p>

                      <h3 className="text-white text-3xl font-semibold leading-tight">
                        {project.title}
                      </h3>

                    </div>

                  </div>

                </motion.div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* VIDEO PROJECTS */}
      <section className="px-4 py-6">

        <div
          className="
          rounded-[42px]
          border
          border-white/10
          bg-[#0B0B0B]
          px-8
          md:px-16
          py-20
          "
        >

          <div className="mb-16">

            <p className="text-[#FF6B00] text-xl font-semibold mb-6">
              Motion Visuals
            </p>

            <h2
              className="
              text-[44px]
              md:text-[72px]
              leading-[0.92]
              tracking-[-0.06em]
              font-bold
              text-white
              "
            >
              Video Projects
            </h2>

          </div>

          {/* VIDEO GRID */}
          <div className="grid lg:grid-cols-2 gap-6">

            {videos.map((video, index) => (

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
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}

                className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                "
              >

                {/* VIDEO EMBED */}
                <iframe
                  src={video.embed}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="
                  w-full
                  aspect-video
                  border-0
                  bg-black
                  "
                />

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-white text-2xl font-semibold">
                    {video.title}
                  </h3>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <FooterColumn />

    </main>
  )
}