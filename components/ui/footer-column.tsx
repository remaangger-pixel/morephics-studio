'use client'

import Link from 'next/link'

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
    'Home',
    'Projects',
    'Pricing',
    'Testimonials',
  ],

  services: [
    'AI Product Visuals',
    'Creative Direction',
    'AI Campaigns',
    'Brand Content',
  ],

  contact: [
    'hello@aistudio.com',
    '+62 812-3456-7890',
    'Jakarta, Indonesia',
  ],
}

export default function FooterColumn() {
  return (
    <footer className="bg-[#050505] px-4 py-6">

      <div className="rounded-[42px] border border-white/10 bg-[#0B0B0B] overflow-hidden">

        {/* TOP */}
        <div className="px-10 md:px-16 pt-24 pb-20">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20">

            {/* LEFT */}
            <div>

              <p className="text-[#FF6B00] text-2xl md:text-3xl font-semibold mb-8">
                Let’s Build Something Cinematic
              </p>

              <h2 className="text-[58px] md:text-[110px] leading-[0.9] tracking-[-0.07em] font-bold text-white mb-10">
                Morephics
                <br />
                For Modern
                <br />
                Brands
              </h2>

              <p className="text-white/50 text-xl leading-relaxed max-w-xl">
                We craft premium AI visuals, campaigns, and cinematic content
                designed for brands that want to stand out.
              </p>

            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-3 gap-10">

              {/* NAVIGATION */}
              <div>

                <h3 className="text-white text-lg font-semibold mb-6">
                  Navigation
                </h3>

                <ul className="space-y-4">

                  {footerLinks.navigation.map((item) => (

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

                    <span className="text-white/50 whitespace-nowrap">
                      {footerLinks.contact[0]}
                    </span>

                  </li>

                  <li className="flex items-center gap-3">

                    <Phone className="w-5 h-5 text-[#FF6B00] shrink-0" />

                    <span className="text-white/50 whitespace-nowrap">
                      {footerLinks.contact[1]}
                    </span>

                  </li>

                  <li className="flex items-center gap-3">

                    <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0" />

                    <span className="text-white/50 whitespace-nowrap">
                      {footerLinks.contact[2]}
                    </span>

                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 px-10 md:px-16 py-8">

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
                  w-11
                  h-11
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