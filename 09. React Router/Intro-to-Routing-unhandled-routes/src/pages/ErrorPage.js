import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/about"), 3000);
  }, []);
  // -1 means 1 step back from where It was requested   to back home page 
// Specify any route 
  return (
    <>
      <h1>OOOPPSSS!!!!! Something went wrong</h1>
    </>
  );
}

export default ErrorPage;
