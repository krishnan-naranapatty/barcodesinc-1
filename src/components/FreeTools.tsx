
const FreeTools = () => {
  const tools = [
    {
      icon: "📊",
      title: "Custom Barcode Labels"
    },
    {
      icon: "🏷️", 
      title: "Preprinted Barcode Labels"
    },
    {
      icon: "⚡",
      title: "Free Barcode Generator"
    },
    {
      icon: "🔤",
      title: "Free Barcode Font"
    }
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-6xl font-bold text-gray-800 mb-4">free tools</h2>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <h3 className="font-semibold text-gray-800">{tool.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTools;
