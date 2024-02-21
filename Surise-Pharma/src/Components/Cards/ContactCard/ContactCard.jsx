import ReuseableCards from "./ReuseableCards";
import "./ContactCard.css";

const ContactCard = () => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <ReuseableCards
          title="Our Location"
          p1="240 Indian River Rd"
          p2="Orange, CT"
          p3="06477"
        />
      </div>
      <div className="inner-container">
        <ReuseableCards
          title="Contact Us"
          p1="Phone: "
          LinkText="475-209-9284"
          p2="Fax: 475-209-9286"
          LinkText2="sunrisepharmrx@gmail.com"
        />
      </div>
      <div className="inner-container">
        <ReuseableCards
          title="We're Open"
          p1="Mon - Fri: 9a.m.-6p.m."
          p2="Sat: 9a.m.-2p.m."
          p3="Sun: Closed"
        />
      </div>
    </div>
  );
};

export default ContactCard;
