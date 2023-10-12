import React from 'react';

import OwlCarousel from "react-owl-carousel";

import client_logo_1 from "../assets/images/home/client-logo/1.png";
import client_logo_2 from "../assets/images/home/client-logo/2.png";
import client_logo_3 from "../assets/images/home/client-logo/3.png";
import client_logo_4 from "../assets/images/home/client-logo/4.png";
import client_logo_5 from "../assets/images/home/client-logo/5.png";

const Clients = () => {

  return (
    <section className="client-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
             <OwlCarousel
                loop
                className="client-logo owl-carousel"
                items={5}
                responsive={{
                    0: {
                        items: 1
                    },
                    380: {
                        items: 2
                    },
                    550: {
                      items: 3
                    },
                    750: {
                        items: 4
                    },
                    990: {
                        items: 5
                    }
                }}>
              <a href="/">
                <img src={client_logo_1} alt="client_logo_1" />
              </a>
              <a href="/">
                <img src={client_logo_2} alt="client_logo_2" />
              </a>
              <a href="/">
                <img src={client_logo_3} alt="client_logo_3" />
              </a>
              <a href="/">
                <img src={client_logo_4} alt="client_logo_4" />
              </a>
              <a href="/">
                <img src={client_logo_5} alt="client_logo_5" />
              </a>
              <a href="/">
                <img src={client_logo_1} alt="client_logo_1" />
              </a>
              <a href="/">
                <img src={client_logo_2} alt="client_logo_2" />
              </a>
              <a href="/">
                <img src={client_logo_3} alt="client_logo_3" />
              </a>
              <a href="/">
                <img src={client_logo_4} alt="client_logo_4" />
              </a>
              <a href="/">
                <img src={client_logo_5} alt="client_logo_5" />
              </a>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

