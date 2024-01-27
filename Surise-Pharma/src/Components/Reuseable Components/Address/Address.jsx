import "./Address.css";

const Address = () => {
  return (
    <>
      <div
        className="container"
        // style={{
        //   backgroundColor: "#0D58A6",
        //   color: "white",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "space-around",
        //   height: "50px",
        // }}
      >
        <div>
          <a
            href="https://goo.gl/maps/gRCqUduCEt3FBXvn6"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <strong>240 Indian River Rd Orange, CT 0647</strong>
          </a>
        </div>
        <div>
          <strong>Phone: </strong>
          <a
            href="tel:475-209-9284"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            475-209-9284
          </a>
        </div>
        <div>
          <strong>Mon-Fri: 9a.m.-6p.m. | Sat: 9a.m.-2p.m. | Sun: Closed</strong>
        </div>
      </div>
    </>
  );
};

export default Address;
