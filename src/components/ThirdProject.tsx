import { useEffect } from "react";

function ThirdProject() {
  useEffect(() => {
    const box = document.getElementById("myThreeJsCanvas");
    box?.remove();
  }, []);
  return (
    <div>
      ThirdProject 시리즈 상세 페이지 화면에서 클릭하면 하나는 ppt, 노션 등
      연결되고 한 회차는 소설 본문/json형태 어떻게 저장되는지 확인해주기 위한
      임시 에디터 프로젝트하며 고민한 것 velog로 연결도 좋을듯
    </div>
  );
}

export default ThirdProject;
