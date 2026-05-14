'use client'

import { ArrowRight } from 'lucide-react'

type FlowButtonProps = {
  text?: string
  variant?: 'light' | 'orange'
}

export function FlowButton({
  text = 'Modern Button',
  variant = 'light',
}: FlowButtonProps) {
  const isOrange = variant === 'orange'

  return (
    <button
      className={`
      group
      relative
      flex
      items-center
      gap-1
      overflow-hidden
      rounded-full
      border-[2px]
      px-7
      py-3
      text-sm
      font-semibold
      cursor-pointer
      transition-all
      duration-[600ms]
      ease-[cubic-bezier(0.23,1,0.32,1)]
      active:scale-[0.96]

      ${
        isOrange
          ? 'bg-[#FF6B00] border-[#FF6B00] text-white hover:text-black'
          : 'bg-white border-white/70 text-black hover:text-white'
      }
      `}
    >
      {/* LEFT ARROW */}
      <ArrowRight
        className={`
        absolute
        w-4
        h-4
        left-[-25%]
        fill-none
        z-[9]
        group-hover:left-4
        transition-all
        duration-[800ms]
        ease-[cubic-bezier(0.34,1.56,0.64,1)]

        ${
          isOrange
            ? 'stroke-black group-hover:stroke-[#FF6B00]'
            : 'stroke-white'
        }
        `}
      />

      {/* TEXT */}
      <span
        className="
        relative
        z-[1]
        -translate-x-3
        group-hover:translate-x-3
        transition-all
        duration-[800ms]
        ease-out
        "
      >
        {text}
      </span>

      {/* EXPANDING CIRCLE */}
      <span
        className={`
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-4
        h-4
        rounded-full
        opacity-0
        group-hover:w-[220px]
        group-hover:h-[220px]
        group-hover:opacity-100
        transition-all
        duration-[800ms]
        ease-[cubic-bezier(0.19,1,0.22,1)]

        ${
          isOrange
            ? 'bg-white'
            : 'bg-[#FF6B00]'
        }
        `}
      />

      {/* RIGHT ARROW */}
      <ArrowRight
        className={`
        absolute
        w-4
        h-4
        right-4
        fill-none
        z-[9]
        group-hover:right-[-25%]
        transition-all
        duration-[800ms]
        ease-[cubic-bezier(0.34,1.56,0.64,1)]

        ${
          isOrange
            ? 'stroke-white group-hover:stroke-black'
            : 'stroke-[#FF6B00] group-hover:stroke-white'
        }
        `}
      />
    </button>
  )
}