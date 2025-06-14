
const ProductCategories = () => {
  const categories = [
    { name: "Handheld Computers", icon: "📱" },
    { name: "Barcode Printers", icon: "🖨️" },
    { name: "Barcode Scanners", icon: "📷" },
    { name: "Tablet Computers", icon: "📱" },
    { name: "Receipt Printers", icon: "🧾" },
    { name: "Barcode Labels", icon: "🏷️" },
    { name: "RFID Readers", icon: "📡" },
    { name: "Autonomous Mobile Robotics", icon: "🤖" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Shop Top Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 group-hover:bg-orange-50 transition-colors">
                <div className="text-4xl mb-2">{category.icon}</div>
              </div>
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-orange-500 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
