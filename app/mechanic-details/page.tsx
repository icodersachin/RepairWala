import Image from "next/image"
import { Star, MessageCircle, PhoneCall, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MechanicDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="Mechanic"
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1" size={16} />
              <span className="text-gray-600">4.8 (120 reviews)</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Estimated Cost</h3>
          <p className="text-2xl font-bold text-green-600">₹750 - ₹1000</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">ETA</h3>
          <div className="flex items-center">
            <Clock className="text-blue-500 mr-2" size={20} />
            <span className="text-lg">15-20 minutes</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
            <MessageCircle className="mr-2" size={20} />
            Chat
          </Button>
          <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
            <PhoneCall className="mr-2" size={20} />
            Call
          </Button>
        </div>
      </div>
    </div>
  )
}

