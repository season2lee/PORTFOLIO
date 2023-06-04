import { useEffect } from "react";

function SecondProject() {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
  }, []);
  return <div>SecondProject</div>;
}

export default SecondProject;
