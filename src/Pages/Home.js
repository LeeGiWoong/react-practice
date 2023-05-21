import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>기본페이지 입니다.</h1>
      <p>더하기 또는 빼기 페이지:</p>
      <ul>
        <li>
          <Link to="/sum/1/2">더하기 페이지 (1 + 2)</Link>
        </li>
        <li>
          <Link to="/sub/4/1">빼기 페이지 (4 - 1)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
