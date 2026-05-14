import { notFound } from 'next/navigation'

import Navbar from '@/components/ui/navbar'
import FooterColumn from '@/components/ui/footer-column'

import { projects } from '../../../data/projects'

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {

  const { slug } = await params

  const project = projects.find(
    (item) => item.slug === slug
  )

  if (!project) {
    notFound()
  }

  return (

    <main className="bg-[#050505] min-h-screen overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="px-4 pt-4 pb-6">

        <div
          className="
          relative
          overflow-hidden
          rounded-[42px]
          min-h-[88vh]
          border
          border-white/10
          "
        >

          {/* IMAGE */}
          <img
            src={project.layoutImages?.hero || project.cover}
            alt={project.title}
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* CONTENT */}
          <div
            className="
            relative
            z-10
            flex
            flex-col
            justify-end
            min-h-[88vh]
            p-8
            md:p-16
            "
          >

            <p className="text-[#FF6B00] text-xl md:text-2xl font-semibold mb-6">
              {project.category}
            </p>

            <h1
              className="
              text-[54px]
              md:text-[120px]
              leading-[0.9]
              tracking-[-0.06em]
              font-bold
              text-white
              max-w-[1000px]
              "
            >
              {project.title}
            </h1>

          </div>

        </div>

      </section>

      {/* INTRO */}
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

          <div className="grid lg:grid-cols-2 gap-20">

            {/* LEFT */}
            <div>

              <p className="text-[#FF6B00] text-xl font-semibold mb-6">
                Project Overview
              </p>

              <h2
                className="
                text-[44px]
                md:text-[72px]
                leading-[0.92]
                tracking-[-0.06em]
                font-bold
                text-black
                mb-10
                "
              >
                Crafting
                Cinematic
                AI Experiences
              </h2>

            </div>

            {/* RIGHT */}
            <div>

              <p className="text-black/60 text-xl leading-relaxed mb-12">
                {project.overview}
              </p>

              <div className="grid grid-cols-2 gap-8">

                <div>

                  <p className="text-black/40 text-sm uppercase tracking-[0.2em] mb-3">
                    Client
                  </p>

                  <h3 className="text-2xl font-semibold text-black">
                    {project.client}
                  </h3>

                </div>

                <div>

                  <p className="text-black/40 text-sm uppercase tracking-[0.2em] mb-3">
                    Year
                  </p>

                  <h3 className="text-2xl font-semibold text-black">
                    {project.year}
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CASE STUDY CONTENT */}
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

          {/* CHALLENGE */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[32px]">

              <img
                src={project.layoutImages?.challenge || project.cover}
                alt=""
                className="
                w-full
                h-full
                object-cover
                "
              />

            </div>

            {/* TEXT */}
            <div className="pt-4">

              <div className="w-24 h-[2px] bg-[#FF6B00] mb-10" />

              <h3 className="text-3xl md:text-5xl font-semibold text-black mb-10">
                Challenge
              </h3>

              <p className="text-black/60 text-xl leading-relaxed">
                {project.challenge}
              </p>

            </div>

          </div>

          {/* DUAL IMAGES */}
          <div className="grid md:grid-cols-2 gap-6 mb-32">

            <div className="overflow-hidden rounded-[32px]">

              <img
                src={project.layoutImages?.dual1 || project.cover}
                alt=""
                className="
                w-full
                h-full
                object-cover
                "
              />

            </div>

            <div className="overflow-hidden rounded-[32px] md:mt-24">

              <img
                src={project.layoutImages?.dual2 || project.cover}
                alt=""
                className="
                w-full
                h-full
                object-cover
                "
              />

            </div>

          </div>

          {/* RESULT */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

            <div>

              <div className="w-24 h-[2px] bg-[#FF6B00] mb-10" />

              <h3 className="text-3xl md:text-5xl font-semibold text-black mb-10">
                Result
              </h3>

              <p className="text-black/60 text-xl leading-relaxed">
                {project.approach}
              </p>

            </div>

          </div>

          {/* RESULT IMAGES */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="overflow-hidden rounded-[32px]">

              <img
                src={project.layoutImages?.result1 || project.cover}
                alt=""
                className="
                w-full
                h-full
                object-cover
                "
              />

            </div>

            <div className="overflow-hidden rounded-[32px] md:mt-20">

              <img
                src={project.layoutImages?.result2 || project.cover}
                alt=""
                className="
                w-full
                h-full
                object-cover
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
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

          <p className="text-[#FF6B00] text-xl font-semibold mb-8">
            Services
          </p>

          <div className="flex flex-wrap gap-4">

            {project.services.map((service, index) => (

              <div
                key={index}
                className="
                rounded-full
                border
                border-white/10
                px-6
                py-4
                text-white/80
                text-lg
                "
              >
                {service}
              </div>

            ))}

          </div>

        </div>

      </section>

      <FooterColumn />

    </main>
  )
}