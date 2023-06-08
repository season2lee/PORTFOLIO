import { useEffect } from "react";

function SecondProject() {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
    const box1 = document.getElementById("homeCanvas");
    box1?.remove();
  }, []);
  return (
    <div>
      SecondProject 내 정보가 게임 추천처럼 가로로 촤르르륵 지나가며 호버 시 더
      자세히 알 수 있도록 그리고 그 중에 배너는 클릭 시 해당 프로젝트 ppt로
      넘어가기
    </div>
  );
}

export default SecondProject;
