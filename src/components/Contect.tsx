import { useEffect } from "react";

function Contect() {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
    const box1 = document.getElementById("homeCanvas");
    box1?.remove();
  }, []);
  return <div>Contect</div>;
}

export default Contect;
