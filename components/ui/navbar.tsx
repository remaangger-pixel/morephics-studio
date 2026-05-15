'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

import { FlowButton } from '@/components/ui/flow-button'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -30,
        filter: 'blur(10px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full px-2 md:px-4 pointer-events-none"
    >

      <div className="mx-auto max-w-7xl">

        {/* NAVBAR */}
        <motion.div
          whileHover={{
            scale: 1.01,
          }}
          transition={{
            duration: 0.4,
          }}
          className="pointer-events-auto flex items-center justify-between rounded-full border border-white/10 bg-[#0B0B0B]/90 px-4 md:px-8 py-3 md:py-4 shadow-[0_10px_60px_rgba(0,0,0,0.45)]"
        >

          {/* LOGO */}
          <Link
            href="/"
            className="
            relative
            w-[150px]
            md:w-[220px]
            h-[30px]
            md:h-[40px]
            shrink-0
            overflow-visible
            "
          >

            <div
              className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              "
            >

              <Image
                src="/logo-new.png"
                alt="Morephics"
                width={260}
                height={260}
                priority
                className="
                w-[150px]
                md:w-[220px]
                h-auto
                object-contain
                "
              />

            </div>

          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* MENU DESKTOP */}
            <nav className="hidden md:flex items-center gap-8">

              {navItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group relative text-sm font-bold tracking-[0.02em] transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >

                    {item.label}

                    <span
                      className={`absolute left-0 -bottom-2 h-[1px] bg-[#FF6B00] transition-all duration-300 ease-out ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />

                  </a>
                )
              })}

            </nav>

            {/* CTA DESKTOP */}
            <div className="hidden md:block w-fit shrink-0">

              <Link href="/contact">

                <FlowButton
                  text="Get in touch"
                  variant="light"
                />

              </Link>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="
  md:hidden
  text-white
  text-2xl
  h-[40px]
  flex
  items-center
  justify-center
  "
>
              {menuOpen ? '✕' : '☰'}
            </button>

          </div>

        </motion.div>

        {/* MOBILE DROPDOWN */}
        {menuOpen && (

          <div
            className="
            md:hidden
            mt-3
            rounded-3xl
            border
            border-white/10
            bg-[#0B0B0B]/95
            backdrop-blur-xl
            p-5
            flex
            flex-col
            gap-4
            pointer-events-auto
            "
          >

            {navItems.map((item) => (

              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                text-white/80
                text-[15px]
                font-medium
                tracking-[-0.02em]
                "
              >

                {item.label}

              </Link>

            ))}

            <div className="pt-2">

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
              >

                <FlowButton
                  text="Get in touch"
                  variant="light"
                />

              </Link>

            </div>

          </div>

        )}

      </div>

    </motion.header>
  )
}