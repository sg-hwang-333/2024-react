import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


// 함수 인자값을 전달받으면서 비구조화 할당 진행
const PersonProfile = function({ name, age, gender, profile, highlight }) {
  return (
      <div className='person' style={highlight ? {color: 'red'} : null}>
          <h1>Profile</h1>
          <img src={profile} />
          <p>name : {name}</p>
          <p>age : {age}</p>
          <p>gender : {gender}</p>
      </div>
  )
}

const PersonProfileWithUserObject = function(props) {
    const { name, age, gender, profile } = props.person
    const highlight = props.highlight
    return (
        <div className='person' style={highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

const App = function(props) {
    const anotherPerson = {
        name: 'Jane',
        age: 28,
        gender: 'female',
        profile: 'https://randomuser.me/api/portraits/women/75.jpg'
    }
    const person = {
      name: 'Jane',
      age: 28,
      gender: 'female',
      profile: 'https://randomuser.me/api/portraits/women/75.jpg'
  }
    const { name, gender, ...rest } = anotherPerson
    console.log(rest) // { age: 28, profile: '...' }

    return (
        <div id='props-basic'>
            {/* 실용 사례 */}
            <PersonProfile
                name='John'
                age={35}
                gender='male'
                profile='https://randomuser.me/api/portraits/men/75.jpg' />
            
            <PersonProfile {...anotherPerson} highlight />
           
            <PersonProfile name='Ken' gender='male' age={32} {...rest} />

            <PersonProfileWithUserObject person={person} />
        </div>
    )
}

root.render(<App />)