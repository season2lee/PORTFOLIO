import { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
    const box1 = document.getElementById("homeCanvas");
    box1?.remove();
  }, []);
  return (
    <div>
      AboutMe 슬로건은 home에서 보여줬으니 여긴 연혁(?) 하고 기술스텍이랑 수상
      등
    </div>
  );
}

export default AboutMe;
