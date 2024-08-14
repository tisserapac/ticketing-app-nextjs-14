"use client";

function CourseForm() {
  function onSubmit() {
    console.log("Form submitted");
  }
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col p-12 gap-4">
        <input type="text" name="name" className="border"></input>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CourseForm;
