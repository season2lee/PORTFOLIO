import { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
  }, []);
  return <div>AboutMe</div>;
}

export default AboutMe;
