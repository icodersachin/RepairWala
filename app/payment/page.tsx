import { CreditCard, Smartphone, Landmark, Banknote, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function Payment() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Payment & Invoice</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
        <RadioGroup defaultValue="upi">
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="upi" id="upi" />
            <Label htmlFor="upi" className="flex items-center">
              <Smartphone className="mr-2" size={20} />
              UPI
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center">
              <CreditCard className="mr-2" size={20} />
              Credit/Debit Card
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="netbanking" id="netbanking" />
            <Label htmlFor="netbanking" className="flex items-center">
              <Landmark className="mr-2" size={20} />
              Net Banking
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash" className="flex items-center">
              <Banknote className="mr-2" size={20} />
              Cash on Delivery
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Invoice Breakdown</h2>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Service Charge</span>
            <span>₹500</span>
          </div>
          <div className="flex justify-between">
            <span>Parts</span>
            <span>₹200</span>
          </div>
          <div className="flex justify-between">
            <span>Urgent Service Fee</span>
            <span>₹100</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹800</span>
          </div>
        </div>
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white mb-2">
          Pay Now (5% Instant Discount)
        </Button>
        <Button variant="outline" className="w-full">
          <Download className="mr-2" size={20} />
          Download Invoice
        </Button>
      </div>
    </div>
  )
}

