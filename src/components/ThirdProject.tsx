import { useEffect } from "react";

function ThirdProject() {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
  }, []);
  return <div>ThirdProject</div>;
}

export default ThirdProject;
