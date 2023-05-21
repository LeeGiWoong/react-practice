// SumPage.js
import { useParams } from "react-router-dom";

const SubPage = () => {
  const { a, b } = useParams();

  const sub = parseInt(a) - parseInt(b);

  return <h1>A - B = {sub}</h1>;
};

export default SubPage;