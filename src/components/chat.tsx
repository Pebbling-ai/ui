"use client"

import { useEffect, useRef } from "react"
import { MessageBubble } from "@/components/message-bubble"

type Message = {
  id: number
  isUser: boolean
  content: string
  time: string
  avatar: string
}

const messages: Message[] = [
  {
    id: 1,
    isUser: true,
    content: "What exactly does your product do?",
    time: "10:42am",
    avatar: "/avatars/user-avatar.png",
  },
  {
    id: 2,
    isUser: false,
    content:
      "Our product enables seamless communication between two agents, whether they're humans, AI, or a combination.",
    time: "10:43am",
    avatar: "/avatars/agent-avatar.png",
  },
  {
    id: 3,
    isUser: true,
    content: "Is there a free version available?",
    time: "10:45am",
    avatar: "/avatars/user-avatar.png",
  },
  {
    id: 4,
    isUser: false,
    content:
      "Yes! We offer a free version with core communication features. It includes basic messaging, file sharing, and limited history retention.",
    time: "10:46am",
    avatar: "/avatars/agent-avatar.png",
  },
  {
    id: 5,
    isUser: true,
    content: "Tell me about the Hibiscus version. What makes it special?",
    time: "10:48am",
    avatar: "/avatars/user-avatar.png",
  },
  {
    id: 6,
    isUser: false,
    content:
      "Hibiscus is our premium offering with unlimited history, priority support, custom integrations, and enhanced security protocols.",
    time: "10:49am",
    avatar: "/avatars/agent-avatar.png",
  },
  {
    id: 7,
    isUser: true,
    content: "How secure is the platform?",
    time: "10:51am",
    avatar: "/avatars/user-avatar.png",
  },
  {
    id: 8,
    isUser: false,
    content:
      "Security is our priority. We use end-to-end encryption for all communications, with additional features in the Hibiscus version.",
    time: "10:52am",
    avatar: "/avatars/agent-avatar.png",
  },
]

export function Chat() {
  const observerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt((entry.target as HTMLElement).dataset.index || "0", 10)

            setTimeout(() => {
              entry.target.classList.add("animate-message-in")
              entry.target.classList.remove("opacity-0", "translate-y-8")
            }, index * 150)

            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: "-20px 0px",
        threshold: 0.1,
      },
    )

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="space-y-6">
        {messages.map((message, index) => (
          <div
            key={message.id}
            ref={(el) => (observerRefs.current[index] = el)}
            data-index={index}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <MessageBubble message={message} />
          </div>
        ))}
      </div>
    </div>
  )
}
