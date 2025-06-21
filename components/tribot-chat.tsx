"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  typing?: boolean
}

const predefinedResponses = {
  greeting: [
    "Hello! I'm TriBot, your AI assistant. How can I help you learn about Triangles Consolidated today?",
    "Hi there! Welcome to Triangles Consolidated. I'm here to answer any questions about our services.",
    "Greetings! I'm TriBot. What would you like to know about our innovative solutions?",
  ],
  services: [
    "We offer cutting-edge solutions across four main divisions: IT & AI, Real Estate, News & Media, and Entertainment. Which area interests you most?",
    "Our services span artificial intelligence, smart city development, digital journalism, and immersive entertainment. What specific service can I tell you about?",
  ],
  careers: [
    "We're always looking for talented individuals! We have openings in engineering, design, business development, and more. Check out our careers page for current opportunities.",
    "Great question! We offer competitive salaries, comprehensive benefits, remote work options, and opportunities for growth. What role are you interested in?",
  ],
  contact: [
    "You can reach us through our contact form, email us at info@triangles.com, or call +1 (555) 123-4567. Our team typically responds within 24 hours.",
    "I'd be happy to help you get in touch! What's the best way to connect you with the right team member?",
  ],
  default: [
    "That's an interesting question! Let me connect you with a human expert who can provide more detailed information.",
    "I'd love to help with that! Could you provide a bit more context so I can give you the most relevant information?",
    "Great question! While I can help with general information, our specialists would be better equipped to answer that. Would you like me to arrange a consultation?",
  ],
}

const quickActions = [
  { text: "Tell me about your services", key: "services" },
  { text: "Career opportunities", key: "careers" },
  { text: "How can I contact you?", key: "contact" },
  { text: "Schedule a demo", key: "demo" },
]

export function TribotChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm TriBot, your AI assistant. How can I help you learn about Triangles Consolidated today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
    }

    if (lowerInput.includes("service") || lowerInput.includes("what do you do") || lowerInput.includes("solutions")) {
      return predefinedResponses.services[Math.floor(Math.random() * predefinedResponses.services.length)]
    }

    if (
      lowerInput.includes("career") ||
      lowerInput.includes("job") ||
      lowerInput.includes("hiring") ||
      lowerInput.includes("work")
    ) {
      return predefinedResponses.careers[Math.floor(Math.random() * predefinedResponses.careers.length)]
    }

    if (
      lowerInput.includes("contact") ||
      lowerInput.includes("reach") ||
      lowerInput.includes("phone") ||
      lowerInput.includes("email")
    ) {
      return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)]
    }

    return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)]
  }

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getResponse(messageText),
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <MessageCircle className="w-8 h-8" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            className={`fixed bottom-6 right-6 z-50 ${
              isMinimized ? "w-80 h-16" : "w-96 h-[600px]"
            } transition-all duration-300`}
          >
            <Card className="h-full bg-black/90 backdrop-blur-md border border-gray-800 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-3">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">TriBot</h3>
                    <p className="text-xs text-gray-400">AI Assistant</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-gray-400 hover:text-white"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px]">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`flex items-start space-x-2 max-w-[80%]`}>
                          {message.sender === "bot" && (
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                              <Bot className="w-3 h-3 text-white" />
                            </div>
                          )}
                          <div
                            className={`p-3 rounded-lg ${
                              message.sender === "user"
                                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                                : "bg-gray-800 text-gray-300"
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                          </div>
                          {message.sender === "user" && (
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                              <User className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                            <Bot className="w-3 h-3 text-white" />
                          </div>
                          <div className="bg-gray-800 p-3 rounded-lg">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                              <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              />
                              <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick Actions */}
                  {messages.length === 1 && (
                    <div className="p-4 border-t border-gray-800">
                      <p className="text-xs text-gray-400 mb-2">Quick actions:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {quickActions.map((action, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSendMessage(action.text)}
                            className="text-xs border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-cyan-400"
                          >
                            {action.text}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 border-t border-gray-800">
                    <div className="flex space-x-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                        disabled={isTyping}
                      />
                      <Button
                        onClick={() => handleSendMessage()}
                        disabled={!inputValue.trim() || isTyping}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
