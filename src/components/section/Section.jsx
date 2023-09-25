import "./Section.scss";
import Lesson from "../lesson/Lesson";

const Section = () => {
  const data = [
    {
      header: "1. Lesson: Intro",
      body: ["Microsft Windows"],
    },
    {
      header: "2. Lesson: Basic Operations",
      body: [
        "connecting WI-FI",
        "Surfing on internet",
        "Using Chrome, Safari, File Explorer",
      ],
    },
    {
      header: "3. Lesson: Manipulation",
      body: ["Folder Manipulation", "File Manipulation"],
    },
    {
      header: "4. Lesson: Online Applications",
      body: ["Mail Application", "You Tube", "Registration"],
    },
    {
      header: "5. Lesson: Using your mouse",
      body: ["Navigate mouse", "double click"],
    },
    {
      header: "6. Lesson: Desktop Items",
      body: ["organise desktop icons", "Delete icon", "Add icon"],
    },
    {
      header: "7. Lesson: Start Button",
      body: ["Navigating", "Selecting"],
    },
    {
      header: "8. Lesson: Windows",
      body: [
        "Resize",
        "Maximizing",
        "Minimizing",
        "Working with multiple windows",
      ],
    },
    {
      header: "9. Lesson: Copying and Moving",
      body: [
        "Different methods copying and moving",
        "Copying and moving multiple files",
      ],
    },
    {
      header: "10. Lesson: Printing, Creating and Saving",
      body: ["Create", "Save", "Save As", "Print function"],
    },
  ];

  return (
    <div className="section">
      <h1>Foundations Course</h1>
      {data.map((course, index) => {
        return <Lesson key={index} course={course} />;
      })}
    </div>
  );
};

export default Section;
