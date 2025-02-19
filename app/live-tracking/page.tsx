import { MapPin, Clock, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LiveTracking() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Live Tracking</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
          {/* Google Maps integration would go here */}
          <div className="flex items-center justify-center h-full text-gray-500">Map Placeholder</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <MapPin className="text-red-500 mr-2" size={20} />
            <span className="font-semibold">2.5 km away</span>
          </div>
          <div className="flex items-center">
            <Clock className="text-blue-500 mr-2" size={20} />
            <span className="font-semibold">ETA: 10 mins</span>
          </div>
        </div>
        <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
          <PhoneCall className="mr-2" size={20} />
          Emergency Call
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2">Mechanic Details</h2>
        <p className="mb-1">Name: John Doe</p>
        <p className="mb-1">Vehicle: White Toyota Hilux</p>
        <p>License Plate: ABC 123</p>
      </div>
    </div>
  )
}

