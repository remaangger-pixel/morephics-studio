'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import Navbar from '@/components/ui/navbar'
import FooterColumn from '@/components/ui/footer-column'
import Image from 'next/image'

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
<section className="px-0 md:px-4 pt-0 md:pt-4 pb-0 md:pb-6">

  <div
    className="
    relative
    rounded-none md:rounded-[42px]
    overflow-hidden
    border
    border-white/10
    min-h-[62vh]
    md:min-h-[78vh]
    flex
    items-end
    "
  >

    {/* BACKGROUND IMAGE */}

    <Image
      src="/hero-3.png"
      alt="Explore Work Hero"
      fill
      priority
      sizes="100vw"
      className="
      object-cover
      object-center
      "
    />

    {/* DARK OVERLAY */}

    <div
      className="
      absolute
      inset-0
      bg-black/55
      "
    />

    {/* CINEMATIC GLOW */}

    <div
      className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,0,0.22),transparent_40%)]
      "
    />

    <motion.div
      className="
      relative
      z-10
      px-4
      md:px-16
      py-14
      md:py-20
      "
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
        text-[38px]
        sm:text-[48px]
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
      <section className="px-0 md:px-4 py-0 md:py-6">

        <div
          className="
          rounded-none md:rounded-none md:rounded-[42px]
          bg-[#F3F3F3]
          px-4
          md:px-16
          py-12
          md:py-20
          "
        >

          <div className="mb-16">

            <p className="text-[#FF6B00] text-xl font-semibold mb-6">
              Selected Works
            </p>

            <h2
              className="
              text-[34px]
              sm:text-[42px]
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">

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
                    rounded-[22px] md:rounded-[32px]
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
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-10">

                      <p className="text-[#FF6B00] text-sm uppercase tracking-[0.2em] mb-3">
                        {project.category}
                      </p>

                      <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight">
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
      <section className="px-0 md:px-4 py-0 md:py-6">

        <div
          className="
          rounded-none md:rounded-[42px]
          border
          border-white/10
          bg-[#0B0B0B]
          px-4
          md:px-16
          py-12
          md:py-20
          "
        >

          <div className="mb-16">

            <p className="text-[#FF6B00] text-xl font-semibold mb-6">
              Motion Visuals
            </p>

            <h2
              className="
              text-[34px]
              sm:text-[42px]
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
                rounded-[22px]
                md:rounded-[32px]
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
                <div className="p-4 md:p-6">

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