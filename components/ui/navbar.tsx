'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { FlowButton } from '@/components/ui/flow-button'

const navItems = [
  {
    label: 'Home',
    href: '/',
  },

  {
    label: 'Projects',
    href: '/#projects',
  },

  {
    label: 'Pricing',
    href: '/#pricing',
  },

  {
    label: 'Testimonials',
    href: '/#testimonials',
  },

  {
    label: 'Contact',
    href: '/contact',
  },
]

export default function Navbar() {
  const pathname = usePathname()
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

      className="
      fixed
      top-6
      left-1/2
      -translate-x-1/2
      z-50
      w-full
      px-4
      pointer-events-none
      "
    >

      <div className="mx-auto max-w-7xl">

        <motion.div
          whileHover={{
            scale: 1.01,
          }}

          transition={{
            duration: 0.4,
          }}

          className="
          pointer-events-auto
          flex
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-[#0B0B0B]/90
          px-6
          md:px-8
          py-4
          shadow-[0_10px_60px_rgba(0,0,0,0.45)]
          "
        >

          {/* LOGO */}
          <Link
            href="/"
            className="
            text-white
            text-xl
            md:text-2xl
            font-semibold
            tracking-[-0.05em]
            whitespace-nowrap
            "
          >
            MOREPHICS®
          </Link>

          {/* MENU */}
          <nav
            className="
            hidden
            md:flex
            items-center
            gap-8
            "
          >

            {navItems.map((item) => {

              const isActive = pathname === '/' && item.href === '/'

              return (
              <a
                key={item.label}
                href={item.href}
                className={`
                group
                relative
                text-sm
                font-bold
                tracking-[0.02em]
                transition-colors
                duration-300
                ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}
                `}
              >

                {item.label}

                <span
                  className={`
                  absolute
                  left-0
                  -bottom-2
                  h-[1px]
                  w-0
                  bg-[#FF6B00]
                  transition-all
                  duration-300
                  group-hover:w-full
                  ${isActive ? '!w-full' : ''}
                  `}
                />

              </a>
              )
            })}

          </nav>

          {/* CTA */}
          <div className="w-fit shrink-0">

          <Link href="/contact">

    <FlowButton
      text="Get in touch"
      variant="light"
    />

  </Link>

</div>

        </motion.div>

      </div>

    </motion.header>
  )
}