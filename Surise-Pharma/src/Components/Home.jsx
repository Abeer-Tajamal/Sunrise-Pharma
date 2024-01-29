import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <span
        target="_blank"
        style={{
          color: "rgba(255,255,255)",
          backgroundColor: "rgba(204,0,0)",
          padding: "10px",
          display: "block",
          textAlign: "center",
          textDecoration: "none",
        }}
      >
        Interested in the COVID-19 Vaccine?
        <Link
          to="/coronavirus"
          style={{ textDecoration: "underline", color: "white" }}
        >
          Get on the waitlist
        </Link>
      </span>
    </>
  );
};

export default Home;
