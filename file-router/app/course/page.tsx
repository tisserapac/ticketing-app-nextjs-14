import CourseForm from "./CourseForm";

const course_data = [
  { name: "Next.js", hours: 7 },
  { name: "Python", hours: 3 },
  { name: "React", hours: 4 },
  { name: "Next.js 2", hours: 7 },
  { name: "Python 2", hours: 3 },
  { name: "React 2", hours: 4 },
];

function Course() {
  return (
    <div>
      <h1>All Course</h1>
      <div className="md:grid grid-cols-2 xl:grid-cols-4 gap-4">
        {course_data.map((course) => (
          <h2 key={course.name} className="card">
            {course.name}
          </h2>
        ))}
      </div>

      <CourseForm />
    </div>
  );
}

export default Course;
