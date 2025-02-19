import Link from "next/link"
import { Search, Car, Bike, Truck, Zap, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">RepairWala.com</h1>
      <div className="max-w-md mx-auto">
        <div className="relative mb-6">
          <Input type="text" placeholder="Search for vehicle issues" className="pl-10 pr-4 py-2" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link
            href="/service-request?type=car"
            className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-gray-50 transition-colors"
          >
            <Car className="mx-auto mb-2" size={32} />
            <span>Car Repair</span>
          </Link>
          <Link
            href="/service-request?type=bike"
            className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-gray-50 transition-colors"
          >
            <Bike className="mx-auto mb-2" size={32} />
            <span>Bike Repair</span>
          </Link>
          <Link
            href="/service-request?type=towing"
            className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-gray-50 transition-colors"
          >
            <Truck className="mx-auto mb-2" size={32} />
            <span>Towing Service</span>
          </Link>
          <Link
            href="/service-request?type=ev"
            className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-gray-50 transition-colors"
          >
            <Zap className="mx-auto mb-2" size={32} />
            <span>EV Service</span>
          </Link>
        </div>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="font-semibold">10-Minute Express Service</p>
          <p className="text-sm">Available for urgent requests</p>
        </div>
        <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
          <PhoneCall className="mr-2" size={20} />
          Get Instant Help
        </Button>
      </div>
    </div>
  )
}

