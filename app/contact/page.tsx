'use client'

import { useState } from 'react'

import Navbar from '@/components/ui/navbar'
import FooterColumn from '@/components/ui/footer-column'

import { FlowButton } from '@/components/ui/flow-button'

import {
  Globe,
  Plus,
  ArrowRight,
} from 'lucide-react'

import {
  FaInstagram,
  FaYoutube,
  FaBehance,
} from 'react-icons/fa'

const faqs = [
  {
    question: 'How long does a project usually take?',
  },
  {
    question: 'Can you create AI videos too?',
  },
  {
    question: 'Do you work with international clients?',
  },
  {
    question: 'Can I request revisions?',
  },
  {
    question: 'What industries do you work with?',
  },
]

export default function ContactPage() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [successPopup, setSuccessPopup] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, message }),
      })
      if (res.ok) {
        setSuccessPopup(true)
        setTimeout(() => {
          window.location.href = 'https://tally.so/r/KYvOPk'
        }, 2000)
      }
    } finally {
      setLoading(false)
    }
  }

  return (

    <main className="bg-[#050505] min-h-screen overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="px-0 md:px-4 pt-0 md:pt-4 pb-0 md:pb-6">

        <div
          className="
          relative
          overflow-hidden
          rounded-none md:rounded-[42px]
          h-[520px]
          md:min-h-[760px]
          flex
          flex-col
          justify-end
          border
          border-white/10
          "
        >

          {/* BG */}
          <img
            src="/hero-2.png"
            alt=""
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            md:object-center
            object-[55%]
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B00]/10 via-black/10 to-black" />

          {/* CONTENT */}
          <div
            className="
            relative
            z-10
            min-h-[760px]
            flex
            flex-col
            justify-end
            px-4
            md:px-16
            pt-10
            pb-6
            md:py-14
            "
          >

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center md:items-end">

              <div>

                <p className="text-[#FF6B00] text-2xl font-semibold mb-6">
                  Get in touch
                </p>

                <h1
                  className="
                  text-[44px]
                  sm:text-[56px]
                  md:text-[140px]
                  leading-[0.88]
                  tracking-[-0.08em]
                  font-bold
                  text-white
                  "
                >
                  Contact
                </h1>

              </div>

              <div className="lg:pb-8">

                <p
                  className="
                  text-white
                  text-lg
                  sm:text-xl
                  md:text-[42px]
                  leading-tight
                  tracking-[-0.04em]
                  font-semibold
                  max-w-[640px]
                  "
                >
                  Let’s build something cinematic together and create visuals that truly stand out.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="px-0 md:px-4 py-0 md:py-6">

        <div
          className="
          rounded-none md:rounded-[42px]
          bg-[#F3F3F3]
          px-4
          md:px-16
          py-12
          md:py-20
          "
        >

          <div className="grid lg:grid-cols-2 gap-14 md:gap-24 items-start">

            {/* LEFT */}
            <div>

              <p className="text-[#FF6B00] text-2xl font-semibold mb-8">
                Start Your Project
              </p>

              <h2
                className="
                text-[36px]
                sm:text-[46px]
                md:text-[82px]    
                leading-[0.92]
                tracking-[-0.06em]
                font-bold
                text-black
                mb-8
                max-w-[680px]
                "
              >
                Let’s Create Something Powerful
              </h2>

              <p className="text-black/75 text-lg md:text-2xl leading-relaxed font-medium max-w-[560px] mb-10">
                Whether you need AI visuals, cinematic campaigns, or premium branding content — I’m here to help bring your vision to life.
              </p>

              <p className="text-black/45 text-lg leading-relaxed max-w-[520px] mb-14">
                Share your idea, project goals, or brand direction and let’s craft something memorable together.
              </p>

              {/* SOCIAL */}
              <div className="flex items-center gap-4">

                {[
                  FaInstagram,
                  FaYoutube,
                  FaBehance,
                ].map((Icon, index) => (

                  <div
                    key={index}
                    className="
                    w-14
                    h-14
                    rounded-full
                    border
                    border-black/10
                    flex
                    items-center
                    justify-center
                    text-black/60
                    hover:bg-black
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                    "
                  >

                    <Icon size={20} />

                  </div>

                ))}

                <div
                  className="
                  w-14
                  h-14
                  rounded-full
                  border
                  border-black/10
                  flex
                  items-center
                  justify-center
                  text-black/60
                  hover:bg-black
                  hover:text-white
                  transition-all
                  duration-300
                  cursor-pointer
                  "
                >

                  <Globe size={20} />

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div
              className="
              rounded-[24px] md:rounded-[36px]
              bg-[#ECEAE8]
              p-5
              md:p-10
              "
            >

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div className="grid md:grid-cols-2 gap-4">

                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) =>
                      setFirstName(e.target.value)
                    }
                    className="
                    w-full
                    h-12
                    md:h-14
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    px-6
                    outline-none
                    text-black
                    "
                  />

                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) =>
                      setLastName(e.target.value)
                    }
                    className="
                    w-full
                    h-14
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    px-6
                    outline-none
                    text-black
                    "
                  />

                </div>

                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="
                  w-full
                  h-14
                  rounded-full
                  border
                  border-black/10
                  bg-white
                  px-6
                  outline-none
                  text-black
                  "
                />

                <textarea
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  className="
                  w-full
                  h-[160px]
                  md:h-[200px]
                  rounded-[28px]
                  border
                  border-black/10
                  bg-white
                  px-6
                  py-5
                  outline-none
                  resize-none
                  text-black
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                  w-full
                  h-16
                  rounded-full
                  bg-[#FF6B00]
                  text-white
                  text-lg
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:scale-[1.01]
                  transition-all
                  duration-300
                  disabled:opacity-70
                  "
                >

                  {loading
                    ? 'Sending...'
                    : 'Submit Inquiry'}

                  <ArrowRight size={18} />

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* SUCCESS POPUP */}
      {successPopup && (

        <div
          className="
          fixed
          inset-0
          z-[999]
          flex
          items-center
          justify-center
          px-6
          "
        >

          {/* BACKDROP */}
          <div
            className="
            absolute
            inset-0
            bg-black/60
            backdrop-blur-md
            "
          />

          {/* MODAL */}
          <div
            className="
            relative
            w-full
            max-w-[520px]
            rounded-[24px]
            md:rounded-[36px]
            border
            border-white/10
            bg-[#0B0B0B]
            p-6
            md:p-10
            overflow-hidden
            "
          >

            {/* GLOW */}
            <div
              className="
              absolute
              top-[-120px]
              right-[-120px]
              w-[260px]
              h-[260px]
              rounded-full
              bg-[#FF6B00]/20
              blur-[120px]
              "
            />

            {/* LOADING ICON */}
            <div
              className="
              relative
              w-20
              h-20
              rounded-full
              border
              border-white/10
              flex
              items-center
              justify-center
              mb-8
              "
            >

              <div
                className="
                absolute
                inset-0
                rounded-full
                border-2
                border-[#FF6B00]/20
                "
              />

              <div
                className="
                absolute
                inset-0
                rounded-full
                border-2
                border-transparent
                border-t-[#FF6B00]
                animate-spin
                "
              />

              <span
                className="
                text-[#FF6B00]
                text-sm
                font-semibold
                "
              >
                AI
              </span>

            </div>

            {/* TEXT */}
            <h3
              className="
              relative
              text-4xl
              font-bold
              text-white
              mb-4
              tracking-[-0.05em]
              "
            >
              Preparing Your Creative Brief
            </h3>

            <p
              className="
              relative
              text-white/60
              text-lg
              leading-relaxed
              "
            >
              Your inquiry has been received successfully.
              You’ll now be redirected to complete your
              full creative onboarding form.
            </p>

          </div>

        </div>

      )}

      <FooterColumn />

    </main>

  )
}