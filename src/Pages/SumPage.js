// SumPage.js
import { useParams } from "react-router-dom";

const SumPage = () => {
  const { a, b } = useParams();

  const sum = parseInt(a) + parseInt(b);

  return <h1>A + B = {sum}</h1>;
};

export default SumPage;
