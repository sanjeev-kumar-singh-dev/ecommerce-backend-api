import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                 <h5 className="text-uppercase text-color font-weight-bold">
                    E-Commerce Multi-vendor Shop
                  </h5>
                  <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    Welcome to our vibrant multivendor marketplace, where a
                    world of sellers and buyers unite to create endless shopping
                    possibilities.
                  </p>
                </div>

               <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">About us</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <Link to="/about/story" className="text-color text-decoration-none hover-link">
                        Our Story
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/about/team" className="text-color text-decoration-none hover-link">
                        Our Team
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/about/blogs" className="text-color text-decoration-none hover-link">
                        Latest Blogs
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Contact us</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <Link to="/contact" className="text-color text-decoration-none hover-link">
                        Get In Touch
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/faq" className="text-color text-decoration-none hover-link">
                        FAQs
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/support" className="text-color text-decoration-none hover-link">
                        Help Support
                      </Link>
                    </li>
                  </ul>
                </div>

             <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Careers</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <Link to="/careers/jobs" className="text-color text-decoration-none hover-link">
                        Open Openings
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/careers/culture" className="text-color text-decoration-none hover-link">
                        Life at Shop
                      </Link>
                    </li>
                  </ul>
                </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Policies</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <Link to="/privacy-policy" className="text-color text-decoration-none hover-link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/terms" className="text-color text-decoration-none hover-link">
                        Terms of Service
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/return-policy" className="text-color text-decoration-none hover-link">
                        Return & Refund
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

          <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-color">Are you a platform administrator?</span>
                <Link to="/admin/login" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded bg-color custom-bg-text font-weight-bold"
                  >
                    Admin Login
                  </button>
                </Link>
              </p>
            </section>


            <hr class="mb-4" />
          </div>

          <div class="text-center">
       © {new Date().getFullYear()} Copyright: :
            <a class="text-color-3" href="https://neuralnode-website.vercel.app/#contact">
              neuralnode software
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
