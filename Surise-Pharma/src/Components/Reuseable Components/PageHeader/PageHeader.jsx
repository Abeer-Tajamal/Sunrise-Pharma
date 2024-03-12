import "./PageHeader.css"

const CenteredHeading = ({ heading }) => {
  return (
    <div className="pageHeading">
      <h1>{heading}</h1>
    </div>
  );
};

export default CenteredHeading;