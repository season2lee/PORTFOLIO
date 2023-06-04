import { useEffect } from "react";

function FourthProject() {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
  }, []);
  return <div>FourthProject</div>;
}

export default FourthProject;
