const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part, exercise}) => {
  return <p>{part + '.'}&nbsp;Number of exercises: <b>{exercise}</b></p>
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
  return <p><b>total of {total} exercises</b></p>
}

const Course = ({ courses }) => {
  
  return courses.map(course => {

    return (
      <div key={course.id}>
        <Header
          course={course.name}
        />
        <Content 
          course={course}
        />
        <Total
          course={course}
        />
      </div>)
  })
}

export default Course