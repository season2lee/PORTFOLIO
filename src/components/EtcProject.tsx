import { useEffect } from "react";

function EtcProject() {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
    const box1 = document.getElementById("homeCanvas");
    box1?.remove();
  }, []);
  return (
    <div>
      EtcProject 여긴 그냥 사소?하게 진행한 플젝들... 관통이랑 라트로프 들어갈듯
    </div>
  );
}

export default EtcProject;
