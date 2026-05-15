'use client'

import { useEffect, useState } from 'react'
import { motion, animate } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { FlowButton } from '@/components/ui/flow-button'

const BASE_PRICE = 990
const IMG_PRICE = 20
const LOOP_PRICE = 45
const FORMAT_PRICE = 350
const FILM_BASE = 390
const FILM_PER_SEC = 30

const formatsData = [
  {
    id: 'instagram-post',
    name: 'Instagram Post',
    dims: '1080 × 1350',
  },
  {
    id: 'instagram-story',
    name: 'Instagram Story',
    dims: '1080 × 1920',
  },
  {
    id: 'landscape',
    name: 'Landscape',
    dims: '16 × 9',
  },
  {
    id: 'square',
    name: 'Square',
    dims: '1080 × 1080',
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    dims: '1000 × 1500',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    dims: '1200 × 627',
  },
]

export default function Pricing() {

  const [monthly, setMonthly] =
    useState(true)

  const [images, setImages] =
    useState(40)

  const [loops, setLoops] =
    useState(20)

  const [film, setFilm] =
    useState(false)

  const [filmDuration, setFilmDuration] =
    useState(20)

  const [selectedFormats, setSelectedFormats] =
    useState([
      'instagram-post',
    ])

  const [animatedPrice, setAnimatedPrice] =
    useState(990)

  const extraImages =
    Math.max(0, images - 40)

  const extraLoops =
    Math.max(0, loops - 15)

  const extraFormats =
    Math.max(
      0,
      selectedFormats.length - 1
    )

  const filmPrice =
    film
      ? FILM_BASE +
        (filmDuration - 20) *
          FILM_PER_SEC
      : 0

  const originalPrice =
    BASE_PRICE +
    extraImages * IMG_PRICE +
    extraLoops * LOOP_PRICE +
    extraFormats * FORMAT_PRICE +
    filmPrice

  const finalPrice =
    monthly
      ? Math.round(
          originalPrice * 0.8
        )
      : originalPrice

  useEffect(() => {

    const controls = animate(
      animatedPrice,
      finalPrice,
      {
        duration: 0.35,
        onUpdate(value) {
          setAnimatedPrice(
            Math.round(value)
          )
        },
      }
    )

    return () => controls.stop()

  }, [finalPrice])

  const toggleFormat = (
    id: string
  ) => {

    if (
      selectedFormats.includes(id)
    ) {

      if (
        selectedFormats.length === 1
      )
        return

      setSelectedFormats(
        selectedFormats.filter(
          (item) => item !== id
        )
      )

    } else {

      setSelectedFormats([
        ...selectedFormats,
        id,
      ])

    }

  }

  return (

    <section className="bg-[#050505] px-0 md:px-4 py-0 md:py-6">

      <div
        className="
        rounded-none md:rounded-[42px]
        border
        border-white/10
        bg-[#0B0B0B]
        px-4
        md:px-12
        py-12
        md:py-20
        "
      >

        {/* HEADER */}

        <div className="mb-16">

          <p
            className="
            text-[#FF6B00]
            text-xl
            font-semibold
            mb-6
            "
          >
            Build Your Package
          </p>

          <h2
            className="
            text-[34px]
            sm:text-[42px]
            md:text-[82px]
            leading-[0.92]
            tracking-[-0.06em]
            font-bold
            text-white
            mb-6
            "
          >
            Build Your
            <br />
            Content Package.
          </h2>

          <p
            className="
            text-white/50
            text-sm
            max-w-sm
            leading-relaxed
            "
          >
            Configure exactly what your
            brand needs. Pricing updates
            in real time.
          </p>

        </div>

        {/* LAYOUT */}

        <div
          className="
          grid
          lg:grid-cols-[1fr_340px]
          gap-10
          items-start
          "
        >

          {/* LEFT */}

          <div>

            {/* MONTHLY */}

            <motion.div
              whileHover={{ y: -2 }}
              className="
              rounded-[18px]
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              flex
              items-center
              justify-between
              mb-10
              cursor-pointer
              "
              onClick={() =>
                setMonthly(!monthly)
              }
            >

              <div>

                <p
                  className="
                  text-white
                  text-sm
                  font-medium
                  mb-1
                  "
                >
                  Monthly Production Plan
                </p>

                <p
                  className="
                  text-white/40
                  text-xs
                  "
                >
                  Save 20% with recurring
                  commitment
                </p>

              </div>

              <div
                className={`
                  w-11
                  h-6
                  rounded-full
                  relative
                  transition-all
                  duration-300
                  ${
                    monthly
                      ? 'bg-[#FF6B00]'
                      : 'bg-white/10'
                  }
                `}
              >

                <div
                  className={`
                    absolute
                    top-[2px]
                    w-5
                    h-5
                    rounded-full
                    bg-black
                    transition-all
                    duration-300
                    ${
                      monthly
                        ? 'left-5'
                        : 'left-[2px]'
                    }
                  `}
                />

              </div>

            </motion.div>

            {/* IMAGES */}

            <div className="mb-10">

              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/40
                mb-5
                "
              >
                Editorial Images
              </p>

              <div
                className="
                flex
                items-center
                justify-between
                mb-3
                "
              >

                <p
                  className="
                  text-xs
                  uppercase
                  tracking-[0.12em]
                  text-white
                  "
                >
                  Art-Directed Images
                </p>

                <p
                  className="
                  text-2xl
                  font-semibold
                  text-white
                  "
                >
                  {images}
                </p>

              </div>

              <input
                type="range"
                min={40}
                max={160}
                step={10}
                value={images}
                onChange={(e) =>
                  setImages(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="
                w-full
                accent-[#FF6B00]
                "
              />

              <div
                className="
                flex
                justify-between
                text-[11px]
                text-white/20
                mt-2
                "
              >

                <span>40</span>

                <span>160</span>

              </div>

            </div>

            {/* LOOPS */}

            <div className="mb-10">

              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/40
                mb-5
                "
              >
                Short Loop Videos
              </p>

              <div
                className="
                flex
                items-center
                justify-between
                mb-3
                "
              >

                <p
                  className="
                  text-xs
                  uppercase
                  tracking-[0.12em]
                  text-white
                  "
                >
                  Short Loops
                </p>

                <p
                  className="
                  text-2xl
                  font-semibold
                  text-white
                  "
                >
                  {loops}
                </p>

              </div>

              <input
                type="range"
                min={15}
                max={60}
                step={5}
                value={loops}
                onChange={(e) =>
                  setLoops(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="
                w-full
                accent-[#FF6B00]
                "
              />

              <div
                className="
                flex
                justify-between
                text-[11px]
                text-white/20
                mt-2
                "
              >

                <span>15</span>

                <span>60</span>

              </div>

            </div>

            {/* FILM */}

            <div className="mb-10">

              <div
                className="
                flex
                items-center
                justify-between
                mb-5
                "
              >

                <p
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white/40
                  "
                >
                  Hero Film
                </p>

                <button
                  onClick={() =>
                    setFilm(!film)
                  }
                  className={`
                    px-4
                    h-9
                    rounded-full
                    text-xs
                    border
                    transition-all
                    duration-300
                    ${
                      film
                        ? 'bg-white text-black border-white'
                        : 'border-white/10 text-white'
                    }
                  `}
                >
                  {film
                    ? 'REMOVE'
                    : '+ ADD FILM'}
                </button>

              </div>

              {!film && (

                <p
                  className="
                  text-white/40
                  text-sm
                  leading-relaxed
                  max-w-md
                  "
                >
                  Optional campaign-ready
                  editorial film ideal for
                  landing pages & paid media.
                </p>

              )}

              {film && (

                <>

                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    mb-3
                    mt-4
                    "
                  >

                    <p
                      className="
                      text-xs
                      uppercase
                      tracking-[0.12em]
                      text-white
                      "
                    >
                      Film Duration
                    </p>

                    <p
                      className="
                      text-2xl
                      font-semibold
                      text-white
                      "
                    >
                      {filmDuration}s
                    </p>

                  </div>

                  <input
                    type="range"
                    min={20}
                    max={90}
                    step={5}
                    value={filmDuration}
                    onChange={(e) =>
                      setFilmDuration(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="
                    w-full
                    accent-[#FF6B00]
                    "
                  />

                </>

              )}

            </div>

            {/* FORMATS */}

            <div>

              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/40
                mb-5
                "
              >
                Output Formats
              </p>

              <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
                "
              >

                {formatsData.map(
                  (format) => {

                    const active =
                      selectedFormats.includes(
                        format.id
                      )

                    return (

                      <button
                        key={format.id}
                        onClick={() =>
                          toggleFormat(
                            format.id
                          )
                        }
                        className={`
                          rounded-[14px]
                          border
                          p-4
                          transition-all
                          duration-300
                          text-left
                          ${
                            active
                              ? 'border-[#FF6B00] bg-[#1A1A1A]'
                              : 'border-white/10 bg-white/[0.02]'
                          }
                        `}
                      >

                        <div className="flex items-start gap-3">

                          <div
                            className={`
                              w-4
                              h-4
                              rounded-[4px]
                              border
                              flex
                              items-center
                              justify-center
                              mt-[2px]
                              ${
                                active
                                  ? 'bg-[#FF6B00] border-[#FF6B00]'
                                  : 'border-white/20'
                              }
                            `}
                          >

                            {active && (
                              <Check
                                size={10}
                                className="text-black"
                              />
                            )}

                          </div>

                          <div>

                            <p
                              className="
                              text-sm
                              text-white
                              font-medium
                              mb-1
                              "
                            >
                              {format.name}
                            </p>

                            <p
                              className="
                              text-[11px]
                              text-white/30
                              "
                            >
                              {format.dims}
                            </p>

                          </div>

                        </div>

                      </button>

                    )

                  }
                )}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
            lg:sticky
            lg:top-10
            "
          >

            <div className="mb-4">

              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/40
                mb-4
                "
              >
                Package Includes
              </p>

              <div className="flex flex-wrap gap-2">

                <div
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-[11px]
                  text-white/40
                  "
                >
                  + {images} visuals
                </div>

                <div
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-[11px]
                  text-white/40
                  "
                >
                  + {loops} loops
                </div>

                <div
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-[11px]
                  text-white/40
                  "
                >
                  + {
                    selectedFormats.length
                  } formats
                </div>

                {film && (

                  <div
                    className="
                    rounded-full
                    border
                    border-[#FF6B00]/20
                    bg-[#FF6B00]/10
                    px-3
                    py-1.5
                    text-[11px]
                    text-[#FF6B00]
                    "
                  >
                    + Hero Film
                  </div>

                )}

              </div>

            </div>

            <div
              className="
              rounded-[18px]
              md:rounded-[24px]
              border
              border-white/10
              bg-[#111111]
              p-5 md:p-6
              "
            >

              <div
                className="
                flex
                items-center
                justify-between
                mb-2
                "
              >

                <p
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white/40
                  "
                >
                  Editorial Drop
                </p>

                {monthly && (

                  <div
                    className="
                    rounded-[6px]
                    bg-[#2D1A0A]
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    text-[#FF6B00]
                    "
                  >
                    20% OFF
                  </div>

                )}

              </div>

              <motion.h3
                key={animatedPrice}
                className="
                text-[42px]
                md:text-[54px]
                leading-none
                tracking-[-0.08em]
                font-bold
                text-white
                mt-3
                mb-2
                "
              >
                $
                {animatedPrice.toLocaleString()}
              </motion.h3>

              <div
                className="
                flex
                items-center
                gap-3
                text-sm
                text-white/40
                mb-5
                "
              >

                <span>
                  / month
                </span>

                {monthly && (

                  <span className="line-through text-white/20">

                    $
                    {originalPrice.toLocaleString()}

                  </span>

                )}

              </div>

              <p
                className="
                text-xs
                text-white/20
                mb-8
                "
              >
                Delivery{' '}
                {film
                  ? '12–18 days'
                  : '5–10 days'}
              </p>

              <Link
                href="/contact"
                className="block"
              >

                <FlowButton
                  text="Get Started"
                />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}