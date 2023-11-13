const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part, exercise}) => {
  return <p><b>{part + '.'}</b>&nbsp;Number of exercises: <b>{exercise}</b></p>
}

const Content = ({ parts }) => {
  return (
    <>
      <Part 
        part={parts[0].name}
        exercise={parts[0].exercises}
      />
      <Part 
        part={parts[1].name}
        exercise={parts[1].exercises}
      />
      <Part 
        part={parts[2].name}
        exercise={parts[2].exercises}
      />
    </>
  )
}

const Total = ({ parts }) => {
  return <p>Number of exercises <b>{parts[0].exercises + parts[1].exercises + parts[2].exercises}</b></p>
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  }, {
    name: 'Using props to pass data',
    exercises: 7
  }, {
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>
      <Header 
        course={course}
      />
      <Content 
        parts={parts}
      />
      <Total 
        parts={parts}
      />
    </div>
  )
}

export default App