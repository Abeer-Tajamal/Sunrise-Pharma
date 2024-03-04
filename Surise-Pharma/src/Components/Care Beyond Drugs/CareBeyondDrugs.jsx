import "./CareBeyondDrugs.css";

const CareBeyondDrugs = () => {
  return (
    <>
      <div className="CareSection">
        <h2 className="main-heading">Care Beyond Drugs</h2>
        <p className="inner-text-heading">
          A contemporary pharmacy with traditional values.
        </p>
        <div className="mediaRight">
          <div>
            At Sunrise Pharmacy, we are firm believers in the essence of being a local independent
            pharmacy, offering personalized healthcare and medication services tailored to the unique
            needs of our patients. Pay us a visit today, and allow us the opportunity to take care of you.
          </div>
          <img
            className="round-image"
            src="./Assets/Home Page/Screen Shot 1.png"
            alt=""
          />
          <img
            className="round-image"
            src="./Assets/Home Page/Screen Shot 2.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CareBeyondDrugs;
