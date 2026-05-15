'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

import {
  FaInstagram,
  FaXTwitter,
  FaDribbble,
  FaGithub,
} from 'react-icons/fa6'

const socialLinks = [
  {
    icon: FaInstagram,
    href: '#',
  },

  {
    icon: FaXTwitter,
    href: '#',
  },

  {
    icon: FaDribbble,
    href: '#',
  },

  {
    icon: FaGithub,
    href: '#',
  },
]

const footerLinks = {
  navigation: [
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
],

  services: [
    'AI Image Editorial',
    'AI Visual Ads',
    'AI Commercial Campaign',
    'AI Visual Course',
  ],

  contact: [
    'morephics@mail.com',
    '+62 812-3456-7890',
    'Pontianak, Indonesia',
  ],
}

export default function FooterColumn() {
  return (
    <footer className="bg-[#050505] px-0 md:px-4 py-0 md:py-6">

      <div className="rounded-none md:rounded-[42px] border border-white/10 bg-[#0B0B0B] overflow-hidden">

        {/* TOP */}
        <div className="px-4 md:px-16 pt-14 md:pt-24 pb-12 md:pb-20">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20">

            {/* LEFT */}
<div>

  <p className="text-[#FF6B00] text-xl md:text-3xl font-semibold mb-10">
    Let’s Build Something
  </p>

  {/* LOGO */}

  <div className="mb-10">

    <Image
      src="/logo.png"
      alt="Morephics"
      width={320}
      height={100}
      priority
      className="
      w-[180px]
      md:w-[320px]
      h-auto
      object-contain
      "
    />

  </div>

  {/* DESCRIPTION */}

  <p
    className="
    text-white/50
    text-sm
    md:text-xl
    leading-[1.7]
    md:leading-[1.9]
    max-w-xl
    "
  >
    We craft premium AI visuals, campaigns,
    and cinematic content designed for modern
    brands, creators, and luxury products that
    want to stand out in the digital world.
  </p>

</div>

            {/* RIGHT */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">

              {/* NAVIGATION */}
              <div>

                <h3 className="text-white text-lg font-semibold mb-6">
                  Navigation
                </h3>

                <ul className="space-y-4">

                  {footerLinks.navigation.map((item) => (

                    <li key={item.label}>

                      <Link
                        href={item.href}
                        className="
                        text-white/40
                        hover:text-[#FF6B00]
                        transition-colors
                        duration-300
                        "
                      >
                        {item.label}
                      </Link>

                    </li>

                  ))}

                </ul>

              </div>

              {/* SERVICES */}
              <div>

                <h3 className="text-white text-lg font-semibold mb-6">
                  Services
                </h3>

                <ul className="space-y-4">

                  {footerLinks.services.map((item) => (

                    <li key={item}>

                      <Link
                        href="#"
                        className="
                        text-white/40
                        hover:text-[#FF6B00]
                        transition-colors
                        duration-300
                        "
                      >
                        {item}
                      </Link>

                    </li>

                  ))}

                </ul>

              </div>

              {/* CONTACT */}
<div>

  <h3 className="text-white text-lg font-semibold mb-6">
    Contact
  </h3>

  <ul className="space-y-5">

    <li className="flex items-center gap-3">

      <Mail className="w-5 h-5 text-[#FF6B00] shrink-0" />

      <span className="text-white/50">
        {footerLinks.contact[0]}
      </span>

    </li>

    <li className="flex items-center gap-3">

      <Phone className="w-5 h-5 text-[#FF6B00] shrink-0" />

      <span className="text-white/50">
        {footerLinks.contact[1]}
      </span>

    </li>

    <li className="flex items-center gap-3">

      <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0" />

      <span className="text-white/50">
        {footerLinks.contact[2]}
      </span>

    </li>

  </ul>

</div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 px-4 md:px-16 py-6 md:py-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* COPYRIGHT */}
            <p className="text-white/30 text-sm">
              © 2025 Morephics. All rights reserved.
            </p>

            {/* SOCIAL */}
<div className="flex items-center gap-4">

  {socialLinks.map(({ icon: Icon, href }, index) => (

    <Link
      key={index}
      href={href}
      className="
      w-10
      h-10
      md:w-11
      md:h-11
      rounded-full
      border
      border-white/10
      bg-white/[0.03]
      flex
      items-center
      justify-center
      text-white/60
      hover:bg-[#FF6B00]
      hover:text-white
      hover:border-[#FF6B00]
      transition-all
      duration-300
      "
    >

      <Icon className="w-5 h-5" />

    </Link>

  ))}

</div>

        </div>

      </div>

      </div>

    </footer>
  )
}