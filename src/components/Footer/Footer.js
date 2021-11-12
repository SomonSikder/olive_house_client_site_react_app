import React from 'react';

const Footer = () => {
  return (
    <div className="bg-light mt-4">
      <div className="container pt-3">
        <div className="row container text-center text-info">
          <div className="col-lg-4">
            <h2 className="">Olive</h2>
          </div>
          <div className="col-lg-4">
            <h3>Follow Us</h3>
            <div className="flex">
              <img
                src="https://i.ibb.co/yN1R7hW/instagram-alt-logo-24.png"
                alt=""
              />
              <img
                src="https://i.ibb.co/TKhMQYb/facebook-square-logo-24.png"
                alt=""
              />
              <img src="https://i.ibb.co/fMcywsc/youtube-logo-24.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <h3>Support</h3>
            <p>FAQs</p>
            <p>Support Center</p>
            <p>Contact</p>
          </div>
        </div>
      </div>

      {/* <div className="">
        <p className="">&copy; 2021 Tour Guide. All right reserve.</p>
      </div> */}
    </div>
  );
};

export default Footer;
