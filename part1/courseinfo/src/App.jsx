const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part, exercise}) => {
  return <p><b>{part + '.'}</b>&nbsp;Number of exercises: <b>{exercise}</b></p>
}

const Content = ({ course }) => {
  return (
    <>
      <Part 
        part={course.parts[0].name}
        exercise={course.parts[0].exercises}
      />
      <Part 
        part={course.parts[1].name}
        exercise={course.parts[1].exercises}
      />
      <Part 
        part={course.parts[2].name}
        exercise={course.parts[2].exercises}
      />
    </>
  )
}

const Total = ({ course }) => {
  return <p>Number of exercises <b>{course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</b></p>
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
      }
    ]
  }

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

export default App