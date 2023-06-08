import { useState } from "react";
import Navbar from "../components/common/Navbar";

function HomePage() {
  const [current, setCurrent] = useState<string>("home");
  return (
    <div>
      <Navbar current={current} setCurrent={setCurrent} />
    </div>
  );
}

export default HomePage;
