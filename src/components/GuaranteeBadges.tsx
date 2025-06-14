
const GuaranteeBadges = () => {
  const badges = [
    {
      icon: "🏷️",
      title: "Price Match Guarantee",
      description: "within 30 days of your purchase"
    },
    {
      icon: "⚡",
      title: "Sales Expertise Guarantee", 
      description: "Industry experts are standing by to answer your questions"
    },
    {
      icon: "🚚",
      title: "Same Day Shipping Guarantee",
      description: "If it's in stock, it will ship same day"
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{badge.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBadges;
