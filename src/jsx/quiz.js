import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

// const element = <h1>Hello, world</h1>
// const element2 = <h2>seulgi</h2>

// let str1 = "다슬기해장국";
// let num1 = 12;
// let null1 = null;
// let undefined1 = undefined;

// let n = 3;

// function isEven(n) {
//   return n % 2 == 0 ? <h1>짝수입니다</h1> : <h1>홀수입니다</h1>
// } 

// function Quiz() {
//   return (
//       <div>
//           {element}
//           {element2}
//           {str1}
//           {num1}
//           {null1}
//           {undefined1}

//         <div>
//           {isEven(n)}
//         </div>
//       </div>
//   )
// }

// root.render(<Quiz />)




const users = [
  { name: "John", isKorean: false },
  { name: "철수", isKorean: true },
  { name: "영희", isKorean: true },
  { name: "Sally", isKorean: false }
]
const userList = <ul>
  {
    users.map(e => {
      return <li>{(e.isKorean ? '환영합니다. ' : 'Welcome. ') + e.name}</li>;
    })
    
  }

</ul>

root.render(<div>
  {userList}
</div>)

// function MyStyle() {
//   const mystyle = {
//     color: 'yellow',
//     fontSize: '20px'    
//   }

//   return <p style={mystyle}>Hello!</p>
// }

// root.render(
//   <MyStyle />
// )
