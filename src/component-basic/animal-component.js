import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

// 함수 선언식을 통해서 컴포넌트 정의 가능
function Cat() {
  return <div>🐱</div>
}

// 함수 표현식을 통해서 컴포넌트 정의 가능
const Dog = function () {
  return <div>🐶</div>
}

// 화살표 함수로 컴포넌트 정의 가능 (중괄호 없을 경우 return 작성 안해도 됨 (자동리턴))
const Pig = () => <div>🐷</div>

function AnimalContainer() {
  return (
    /* 컴포넌트와 일반적인 태그를 혼용해서 사용 가능 */
    <div style={{ fontSize: "100px" }}>
      {/* 이미 정의한 컴포넌트들도 JSX 내부에서 사용 가능 */}
      <Cat />
      <Dog />
      <Pig />
    </div>

    /*
      Fragment 요소를 이용해서 논리적 부모 요소 제공 가능
      (단, 해당 요소는 실제로 그려지지 않음을 유의)
    */
    /*<React.Fragment>
      <Cat />
      <Dog />
      <Pig />
    </React.Fragment>*/
  )
}


// VDOM에서 그린 것
root.render(<AnimalContainer />)