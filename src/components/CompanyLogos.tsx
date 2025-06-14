
const CompanyLogos = () => {
  const companies = [
    "Google",
    "amazon", 
    "American Airlines",
    "hp",
    "BOEING",
    "MERCK",
    "Nestlé"
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          OUR TOP CUSTOMERS
        </h2>
        <div className="flex items-center justify-center space-x-12 opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="text-2xl font-bold text-gray-400">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
