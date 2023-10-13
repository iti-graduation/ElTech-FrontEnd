import Truck from "../../assets/images/home/truck.png";
import Headphone from "../../assets/images/home/headphone.png";
import Undo from "../../assets/images/home/undo.png";
import ServiceCard from '../../components/Home/Services/ServiceCard';

const Services = () => {
  return (
    <section className="service-section">
            <div className="container">
                <div className="row">
                    <ServiceCard image={Truck} title={"100% Free Shipping"} description={"We ship all our products for free as long as you buying within the USA."}/>
                    <ServiceCard image={Headphone} title={"24/7 Support"} description={"Our support team is extremely active, you will get response within 2 minutes."} />
                    <ServiceCard image={Undo} title={"30 Day Return"} description={"Our 30 day return program is open from customers, just fill up a simple form."} />
                </div>
            </div>
        </section>
  );
};

export default Services;

