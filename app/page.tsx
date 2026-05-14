'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import Navbar from '@/components/ui/navbar'
import { FlowButton } from '@/components/ui/flow-button'

const Pricing = dynamic(() => import('@/components/ui/pricing'), {
  loading: () => <div className="h-[400px]" />,
})

const Testimonials = dynamic(() => import('@/components/ui/testimonials'), {
  loading: () => <div className="h-[400px]" />,
})

const FooterColumn = dynamic(() => import('@/components/ui/footer-column'), {
  loading: () => <div className="h-[400px]" />,
})

export default function Page() {
  return (

    <main className="bg-[#050505]">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen px-4 pt-4 overflow-hidden"
      >

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 1.2,
          }}

          className="
          relative
          overflow-hidden
          rounded-[42px]
          min-h-[96vh]
          border
          border-white/10
          "
        >

          {/* BACKGROUND */}
          <motion.div
            animate={{
              scale: [1, 1.015, 1],
            }}

            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'easeInOut',
            }}

            className="absolute inset-0"
          >

            <Image
              src="/hero.png"
              alt="Hero"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />

          </motion.div>

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07152D]/70 via-black/20 to-[#140B05]/80" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,0,0.25),transparent_35%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,77,255,0.18),transparent_30%)]" />

          {/* CONTENT */}
          <div
            className="
            relative
            z-20
            flex
            flex-col
            justify-between
            min-h-[96vh]
            p-8
            md:p-14
            lg:p-20
            "
          >

            {/* HERO TEXT */}
            <div className="grid lg:grid-cols-[1fr_0.7fr] gap-10 items-end pt-20">

              {/* LEFT */}
              <div>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                  }}

                  className="
                  text-[#FF6B00]
                  text-2xl
                  md:text-5xl
                  font-semibold
                  mb-8
                  "
                >
                  Hey, I&apos;m
                </motion.p>

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 1,
                    delay: 0.3,
                  }}

                  className="
                  text-[72px]
                  md:text-[160px]
                  leading-[0.82]
                  tracking-[-0.06em]
                  font-bold
                  text-white
                  "
                >
                  Morephics
                  <br />
                  Studio
                </motion.h1>

              </div>

              {/* RIGHT */}
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
                  delay: 0.5,
                }}

                className="max-w-lg lg:mb-10"
              >

                <h2
                  className="
                  text-3xl
                  md:text-5xl
                  leading-tight
                  font-semibold
                  text-white
                  mb-8
                  "
                >
                  Premium AI visuals
                  <br />
                  crafted for modern
                  <br />
                  brands & creators.
                </h2>

                <p
                  className="
                  text-white/65
                  text-lg
                  md:text-xl
                  leading-relaxed
                  "
                >
                  From product photography to cinematic AI campaigns,
                  we create visuals designed to stop the scroll.
                </p>

              </motion.div>

            </div>

            {/* SERVICES */}
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
                delay: 0.8,
              }}

              className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-10
              pt-20
              text-white
              "
            >

              {[
                'AI Product Photography',
                'AI Advertising Visuals',
                'Creative Automation',
                'AI Content Systems',
              ].map((item, index) => (

                <div key={index}>

                  <p
                    className="
                    text-[#FF6B00]
                    text-lg
                    uppercase
                    tracking-[0.08em]
                    font-semibold
                    mb-4
                    "
                  >
                    #0{index + 1}
                  </p>

                  <h3
                    className="
                    text-lg
                    md:text-xl
                    leading-snug
                    text-white/90
                    "
                  >
                    {item}
                  </h3>

                </div>

              ))}

            </motion.div>

          </div>

        </motion.div>

      </section>

      {/* TRUSTED BRANDS */}
      <section className="px-4 py-6 bg-[#050505]">

        <div className="rounded-[42px] bg-[#F3F3F3] py-14 overflow-hidden border border-black/5">

          <div className="flex items-center">

            <div className="min-w-[320px] px-12 z-10 bg-[#F3F3F3]">

              <p className="text-black text-xl leading-tight font-medium">
                Trusted by brands I’ve
                <br />
                helped shape
              </p>

            </div>

            <div className="relative overflow-hidden flex-1">

              <div
                className="
                flex
                items-center
                gap-24
                whitespace-nowrap
                animate-logo-marquee
                min-w-max
                "
              >

                {[
                  'Ship Blox',
                  'Supa Blox',
                  'Hype Blox',
                  'Ultra Blox',
                  'Frame Blox',
                  'Nova Studio',
                  'Pixel Lab',
                  'Vision Flow',

                  'Ship Blox',
                  'Supa Blox',
                  'Hype Blox',
                  'Ultra Blox',
                  'Frame Blox',
                  'Nova Studio',
                  'Pixel Lab',
                  'Vision Flow',
                ].map((brand, index) => (

                  <div
                    key={index}
                    className="
                    text-black/80
                    text-4xl
                    font-semibold
                    tracking-[-0.05em]
                    "
                  >
                    {brand}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
<section
  id="projects"
  className="px-4 py-6 bg-[#050505]"
>

  <div
    className="
    rounded-[42px]
    bg-[#F3F3F3]
    px-8
    md:px-16
    py-20
    md:py-24
    overflow-hidden
    "
  >

    <div
      className="
      grid
      lg:grid-cols-[0.9fr_1fr]
      gap-16
      lg:gap-24
      items-start
      mb-24
      "
    >

      {/* LEFT */}
      <div>

        <p
          className="
          text-[#FF6B00]
          text-xl
          md:text-2xl
          font-semibold
          mb-8
          "
        >
          Behind the Visuals
        </p>

        <h2
          className="
          text-[48px]
          md:text-[72px]
          leading-[0.9]
          tracking-[-0.06em]
          font-bold
          text-black
          max-w-[700px]
          "
        >
          Crafting AI
          <br />
          Experiences That
          <br />
          Feel Cinematic
        </h2>

      </div>

      {/* RIGHT */}
      <div
        className="
        flex
        flex-col
        justify-between
        h-full
        pt-2
        "
      >

        <div>

          <h3
            className="
            text-[28px]
            md:text-[42px]
            leading-[1.08]
            tracking-[-0.04em]
            font-semibold
            text-black
            mb-10
            max-w-[640px]
            "
          >
            We create premium AI visuals designed for brands that want to stand out.
          </h3>

        </div>

        <div
          className="
          flex
          flex-col
          md:flex-row
          md:items-end
          justify-between
          gap-8
          mt-2
          "
        >

          <p
            className="
            text-black/50
            text-base
            md:text-lg
            leading-relaxed
            max-w-[540px]
            "
          >
            Product visuals, campaigns, and cinematic AI content
            tailored for modern brands & creators.
          </p>

          <div className="w-fit shrink-0">

            <Link href="/explore-work">

  <FlowButton
    text="Explore work"
    variant="orange"
  />

</Link>

          </div>

        </div>

      </div>

    </div>

          {/* EXPANDING GALLERY */}
<div
  className="
  flex
  flex-col
  md:flex-row
  items-stretch
  gap-4
  h-auto
  md:h-[520px]
  w-full
  "
>

  {[
    '/gallery1.png',
    '/gallery2.png',
    '/gallery3.png',
    '/gallery4.png',
    '/gallery5.png',
  ].map((src, idx) => (

    <motion.div
      key={idx}

      initial={{
        flex: 1,
      }}

      whileHover={{
        flex: 3.5,
      }}

      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}

      className="
      group
      relative
      rounded-[28px]
      overflow-hidden
      h-[420px]
      md:h-full
      min-w-[80px]
      "
    >

      {/* IMAGE */}
      <Image
        src={src}
        alt={`Gallery ${idx + 1}`}
        fill
        className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-[1.03]
        "
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* OVERLAY */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/55
        via-black/10
        to-transparent
        "
      />

      {/* GLOW */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        bg-[radial-gradient(circle_at_bottom,rgba(255,107,0,0.22),transparent_45%)]
        "
      />

    </motion.div>

  ))}

</div>

        </div>

      </section>

      {/* PRICING */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* TESTIMONIALS */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* CONTACT */}
      <section id="contact">
        <FooterColumn />
      </section>

    </main>
  )
}