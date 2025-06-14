
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20">
      <div className="absolute inset-0 opacity-50">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Warehouse worker" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Honeywell CW45 - Mobile Wearable Computer
          </h1>
          <p className="text-xl mb-4">
            Bring optimized ergonomics and performance to arm-worn applications.
          </p>
          <p className="text-lg mb-8">
            Comfortable, rugged and powerful, the CW45 provides maximum solution ROI.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
            SHOP THE HONEYWELL CW45
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
