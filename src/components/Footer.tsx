
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Contact bar */}
      <div className="bg-orange-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-16 text-center">
            <div>
              <div className="text-2xl mb-2">💬</div>
              <div className="font-semibold">CHAT</div>
            </div>
            <div>
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-semibold">EMAIL US</div>
            </div>
            <div>
              <div className="text-2xl mb-2">📞</div>
              <div className="font-semibold">1-833-299-1662</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Our Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500">About Barcodes, Inc.</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Customer Testimonials</a></li>
              <li><a href="#" className="hover:text-orange-500">Our Partners</a></li>
              <li><a href="#" className="hover:text-orange-500">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500">Articles</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500">Request an Account Manager</a></li>
              <li><a href="#" className="hover:text-orange-500">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-orange-500">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-orange-500">Payment Options</a></li>
              <li><a href="#" className="hover:text-orange-500">Download Center</a></li>
              <li><a href="#" className="hover:text-orange-500">Cable Connection Images</a></li>
              <li><a href="#" className="hover:text-orange-500">Barcoding FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500">Price Match Guarantee</a></li>
            </ul>
          </div>

          {/* Services & Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services & Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500">Barcodes Solutions</a></li>
              <li><a href="#" className="hover:text-orange-500">Support Services</a></li>
              <li><a href="#" className="hover:text-orange-500">Solutions</a></li>
              <li><a href="#" className="hover:text-orange-500">Industries</a></li>
              <li><a href="#" className="hover:text-orange-500">Case Studies</a></li>
              <li><a href="#" className="hover:text-orange-500">Guides</a></li>
            </ul>
          </div>

          {/* Shop Now */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop Now</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500">All Product Categories</a></li>
              <li><a href="#" className="hover:text-orange-500">Barcode Scanning</a></li>
              <li><a href="#" className="hover:text-orange-500">Mobile Computing</a></li>
              <li><a href="#" className="hover:text-orange-500">Barcode Printing</a></li>
              <li><a href="#" className="hover:text-orange-500">ID Card Printing</a></li>
              <li><a href="#" className="hover:text-orange-500">Point of Sale</a></li>
            </ul>
          </div>

          {/* Stay Informed */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Informed</h3>
            <p className="text-sm mb-4">
              Join our email list for exclusive deals, new product announcements, and original research.
            </p>
            <div className="flex mb-6">
              <Input 
                placeholder="Your email" 
                className="bg-white text-gray-900 rounded-r-none"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-l-none">
                SUBMIT
              </Button>
            </div>
            
            {/* Social icons and certifications */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <span>📘</span>
                <span>🐦</span>
                <span>📘</span>
                <span>📺</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-green-500">
                  <span className="text-sm">★ Trustpilot</span>
                </div>
                <div className="text-xs">★★★★★</div>
              </div>
              <div className="flex space-x-4 text-xs">
                <span>GSA Schedule</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-xs text-gray-400">
          <p>© 1994 - 2025 Barcodes, Inc. | 101 N. Wacker Dr, Suite 1100, Chicago, IL 60606 | Site Map | Privacy & Security | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
