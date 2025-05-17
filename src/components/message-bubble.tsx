
import { CheckCircle } from "lucide-react"

type MessageProps = {
  message: {
    id: number
    isUser: boolean
    content: string
    time: string
    avatar: string
  }
}

export function MessageBubble({ message }: MessageProps) {
  return (
    <div className={`flex items-start gap-3 mb-6 ${message.isUser ? "flex-row" : "flex-row-reverse"}`}>
      <div className="relative h-10 w-10 flex-shrink-0">
        <img
          src={message.avatar || "/placeholder.svg"}
          alt="Avatar"
          className="rounded-full object-cover"
          
          sizes="40px"
        />
      </div>

      <div className="max-w-[75%]">
        <div
          className={`p-3 rounded-2xl ${
            message.isUser ? "bg-black  text-white" : "bg-white text-black border border-gray-200"
          }`}
        >
          <p className="text-sm md:text-base">{message.content}</p>
        </div>

        <div className="flex items-center mt-1 text-xs text-gray-500">
          <span>{message.time}</span>

          {!message.isUser && (
            <div className="flex items-center ml-2">
              <CheckCircle className="h-3 w-3 text-blue-500 " />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
