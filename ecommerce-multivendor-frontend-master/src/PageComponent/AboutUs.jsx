const AboutUs = () => {
  return (
   // Main responsive outer container with vertical spacing
    <div className="container my-5 text-color">
      
      {/* SECTION: Page Title & Accent Line */}
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-5 font-weight-bold mb-3">About Our Marketplace</h2>
          {/* Decorative colored underline utilizing custom dynamic styling */}
          <div className="bg-color mx-auto" style={{ width: "80px", height: "4px", borderRadius: "2px" }}></div>
        </div>
      </div>
      
      <h4 className="mb-3">About Us</h4>
        {/* SECTION: Main Narrative Content */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          
          {/* Card Block 1: Introduction to E-Commerce */}
          <div className="card shadow-sm border-0 p-4 mb-4 bg-light-custom">
            <p className="lead font-weight-normal mb-0" style={{ lineHeight: "1.7" }}>
              <strong>Online shopping</strong> is a modern process whereby consumers directly buy goods and
              services from a seller without any intermediary over the Internet. From the comfort of your house, 
              shoppers can visit web stores and explore vast choices effortlessly. Ecommerce (electronic commerce) 
              bridges the gap between global sellers and buyers, enabling smooth transfer of funds and data to 
              execute fast transactions.
            </p>
          </div>
        <br />
        In existing system shopping can done in a manual way, the customer has
        to go for shopping, and then he is having the possibility to choose the
        products what ever he wants. Selling online also has its advantages when
        it comes to convincing customers you're the best in the industry. Your
        website can inform customers about your sales, the quality of your
        products, and why they should buy from you. You can also show customer
        reviews, so people know they're buying from a reputable brand. Doing
        business electronically describes e‐commerce. E-commerce (EC), an
        abbreviation for electronic commerce, is the buying and selling of goods
        and services, or the transmitting of funds or data, over an electronic
        network, primarily the internet.
        <br />
        <br />
        The online shopping system is fast gaining media for to sale or purchase
        items from anywhere and anytime. It is basically based on Internet, It
        is related with B2C (Business to Customer) model and status of the
        design and development of e-commerce platform.E-business or Online
        business means business transactions that take place online with the
        help of the internet. The term e-business came into existence in the
        year 1996. E-business is an abbreviation for electronic business.
        Therefore, the buyer and the seller do not meet personally. E-commerce
        is directly link to your business promotions, as it is the age of
        digital media. Making your business available online is crucial to your
        business development such as, highly convenience, wide exposure, global
        customer, easy to run, etc.
      </b>
    </div>
          {/* Grid Layout: Splitting theoretical details into scannable sub-columns */}
          <div className="row my-4 pt-2">
            
            {/* Column 2: Traditional Shopping vs Digital Transformation */}
            <div className="col-md-6 mb-3">
              <h5 className="text-uppercase text-color-4 font-weight-bold mb-3">The Evolution of Shopping</h5>
              <p style={{ lineHeight: "1.6" }}>
                In traditional retail systems, shopping is done manually—customers must travel to physical markets 
                to select items. Transitioning online changes the dynamic, giving businesses massive advantages in 
                convincing customers through detailed descriptions, authentic quality checks, and real customer 
                reviews that establish lasting trust.
              </p>
            </div>
            
            {/* Column 3: Platform Mission & B2C Business Model */}
            <div className="col-md-6 mb-3">
              <h5 className="text-uppercase text-color-4 font-weight-bold mb-3">Anytime, Anywhere</h5>
              <p style={{ lineHeight: "1.6" }}>
                Operating primarily on the <strong>B2C (Business to Customer)</strong> model, our multi-vendor platform 
                is designed to maximize high convenience, wide exposure, and global reach. We make digital business 
                promotions seamless, empowering sellers to run their operations easily while providing buyers with safe, 
                24/7 access to products.
              </p>
            </div>

          </div>

  );
};

export default AboutUs;
