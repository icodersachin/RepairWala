"use client"

import { useState } from "react"
import { Camera, MapPin, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ServiceRequest() {
  const [vehicleType, setVehicleType] = useState("")
  const [issueType, setIssueType] = useState("")
  const [urgentService, setUrgentService] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Request Service</h1>
      <form className="space-y-6">
        <div>
          <Select value={vehicleType} onValueChange={setVehicleType}>
            <SelectTrigger>
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="bike">Bike</SelectItem>
              <SelectItem value="ev">EV</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select value={issueType} onValueChange={setIssueType}>
            <SelectTrigger>
              <SelectValue placeholder="Select issue type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engine">Engine Failure</SelectItem>
              <SelectItem value="tire">Flat Tire</SelectItem>
              <SelectItem value="battery">Battery Dead</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Textarea placeholder="Describe the issue in detail" rows={4} />
        <div className="flex items-center justify-between">
          <Button type="button" variant="outline" className="flex items-center">
            <Camera className="mr-2" size={20} />
            Upload Image
          </Button>
          <Button type="button" variant="outline" className="flex items-center">
            <MapPin className="mr-2" size={20} />
            Set Location
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="urgent-service" checked={urgentService} onCheckedChange={setUrgentService} />
          <Label htmlFor="urgent-service" className="flex items-center">
            <Zap className="mr-2" size={20} />
            Urgent 10-Minute Service (Extra Charge)
          </Label>
        </div>
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          Submit Request
        </Button>
      </form>
    </div>
  )
}

