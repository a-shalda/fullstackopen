const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part, exercise}) => {
  return <p><b>{part + '.'}</b>&nbsp;Number of exercises: <b>{exercise}</b></p>
}

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(item => {
        return (
          <Part
            key={item.name}
            part={item.name}
            exercise={item.exercises}
          />
        )
      })}
    </>
  )
}

const Total = ({ course }) => {

  const total = course.parts.reduce((accumulator, item) => accumulator + item.exercises, 0,)
  return <p>Number of exercises <b>{total}</b></p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header 
        course={course.name}
      />
      <Content 
        course={course}
      />
      <Total 
        course={course}
      />
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
      name: 'Fundamentals of React',
      exercises: 10
      }, 
      {
        name: 'Using props to pass data',
        exercises: 7
      }, 
      {
        name: 'State of a component',
        exercises: 14
      },{
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <div>
      <Course 
        course={course}
      />
    </div>
  )
}

export default App