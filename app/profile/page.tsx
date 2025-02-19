import Image from "next/image"
import { Car, Bike, Clock, Star, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="User"
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <Button variant="outline" className="w-full mb-4">
          <Settings className="mr-2" size={20} />
          Edit Profile
        </Button>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Saved Vehicles</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Car className="mr-2" size={20} />
              <span>Toyota Camry (ABC 123)</span>
            </div>
            <div className="flex items-center">
              <Bike className="mr-2" size={20} />
              <span>Honda CBR (XYZ 789)</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">RepairWala Prime</h3>
          <p className="text-sm text-gray-600 mb-2">Get priority service and exclusive discounts</p>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">Upgrade to Prime</Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Service History</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Car Battery Replacement</span>
              <span className="text-gray-600">2023-07-15</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-blue-500 mr-2" size={16} />
              <span className="text-sm text-gray-600 mr-4">30 minutes</span>
              <Star className="text-yellow-400 mr-1" size={16} />
              <span className="text-sm text-gray-600">4.8</span>
            </div>
          </div>
          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Bike Tire Puncture Repair</span>
              <span className="text-gray-600">2023-06-22</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-blue-500 mr-2" size={16} />
              <span className="text-sm text-gray-600 mr-4">15 minutes</span>
              <Star className="text-yellow-400 mr-1" size={16} />
              <span className="text-sm text-gray-600">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

