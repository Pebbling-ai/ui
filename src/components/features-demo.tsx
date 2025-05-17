"use client"

import { useEffect, useRef } from "react"
import { DeviceMockup } from "@/components/device-mockup"

const features = [
  {
    id: 1,
    title: "Real-time Communication",
    description: "Experience lag-free, instant messaging between agents.",
    device: "iphone",
  },
  {
    id: 2,
    title: "Smart Suggestions",
    description: "AI-powered response suggestions to speed up your workflow.",
    device: "macbook",
  },
  {
    id: 3,
    title: "Seamless Integration",
    description: "Connect with your favorite tools and platforms effortlessly.",
    device: "iphone",
  },
]

export function FeaturesDemo() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-message-in")
            entry.target.classList.remove("opacity-0", "translate-y-8")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="space-y-24">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          ref={(el) => (featureRefs.current[index] = el)}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-700 mb-6">{feature.description}</p>
            </div>
            <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
              <DeviceMockup type={feature.device as "iphone" | "macbook"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
