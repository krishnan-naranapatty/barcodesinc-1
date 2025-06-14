
const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-6">
              <div className="text-green-500 mr-4">
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-2">★</span>
                  <span className="text-xl font-bold">Trustpilot</span>
                </div>
                <div className="flex text-green-500">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">"World Class!</h2>
            <p className="text-gray-600 max-w-2xl">
              We love doing business with Barcodes, Inc! Their staff is always friendly and knowledgeable, and willing to understand their customer's true needs in order to find the appropriate product(s) for their unique circumstances. Their pricing is very competitive, and shipping times are second to none. We are pleased with their partnership and will continue doing business with them for many years to come."
            </p>
            <p className="font-semibold text-gray-800 mt-4">- BENJAMIN</p>
          </div>
          <div className="flex-1 text-right">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Happy customer"
              className="w-full max-w-md ml-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
