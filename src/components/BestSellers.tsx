
import { Button } from "@/components/ui/button";

const BestSellers = () => {
  const products = [
    {
      rank: "#1",
      name: "AirTrack® S2-BT-1012A2006 Barcode Scanner",
      model: "(S2-BT-1012A2006)",
      price: "$399.00",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      rank: "#2", 
      name: "Honeywell CK67-X0N-57S1A0G Mobile Computer",
      model: "(CK67-X0N-57S1A0G)",
      price: "$2,363.22",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      rank: "#3",
      name: "Zebra TC58A1-3T1E4B1010-NA Mobile Computer", 
      model: "(TC58A1-3T1E4B1010-NA)",
      price: "$2,394.48",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      rank: "#4",
      name: "Epson C31CDB4011 Color Label Printer",
      model: "(C31CDB4011)",
      price: "$9,416.89",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      rank: "#5",
      name: "Zebra MC9401-0G1I6CSS-NA Mobile Computer",
      model: "(MC9401-0G1I6CSS-NA)",
      price: "$2,635.88",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Best Sellers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm font-semibold">
                  {product.rank}
                </span>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{product.model}</p>
                <p className="text-lg font-bold text-gray-800 mb-4">{product.price}</p>
                <div className="flex space-x-2">
                  <select className="text-xs border rounded px-2 py-1">
                    <option>1</option>
                  </select>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-4 py-1 flex-1">
                    Add to Cart
                  </Button>
                </div>
                <button className="text-blue-500 text-xs mt-2 hover:underline">
                  + Add to Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
