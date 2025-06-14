
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const navigationItems = [
    "Labels & Supplies",
    "Mobile Computing", 
    "Barcode Scanning",
    "Barcode Printing",
    "ID Card Printing",
    "POS & Touch Signage",
    "Wireless Networking",
    "RFID",
    "Services",
    "Brands"
  ];

  return (
    <header className="bg-gray-800 text-white">
      {/* Top bar */}
      <div className="bg-gray-900 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div></div>
          <div className="flex items-center space-x-6">
            <span>Login</span>
            <span>MY ACCOUNT</span>
            <div className="flex items-center space-x-2">
              <ShoppingCart size={16} />
              <span>CART (0)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🇺🇸</span>
              <span>Sales: 1-877-563-7448</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">Barcodes</span>
              <span className="text-orange-500 text-sm block">a levata company</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Input 
                placeholder="Search keyword, SKU or Item#" 
                className="w-full pr-12 bg-white text-gray-900"
              />
              <Button 
                size="sm" 
                className="absolute right-0 top-0 h-full bg-orange-500 hover:bg-orange-600 text-white px-4"
              >
                <Search size={16} />
              </Button>
            </div>
          </div>

          {/* Sign In */}
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
            Sign In
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 py-3">
            {navigationItems.map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-white hover:text-orange-500 transition-colors text-sm whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
