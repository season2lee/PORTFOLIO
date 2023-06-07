import { useEffect } from "react";

function Contect() {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
  }, []);
  return <div>Contect</div>;
}

export default Contect;
