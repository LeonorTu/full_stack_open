const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Sum = ({ parts }) => {
  return (
    <h3>
      {`total of ${parts.reduce(
        (total, part) => (total += part.exercises),
        0
      )} exercises`}
    </h3>
  );
};

const CourseInfo = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Sum parts={course.parts} />
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <CourseInfo key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Course;
