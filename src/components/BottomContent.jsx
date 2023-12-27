import "../styling/BottomContent.css";

import TechWrapper from "./TechWrapper";

const BottomContent = () => {
  return (
    <div className="TechContainer">
      <TechWrapper 
        tech="- Cloud"
        height="10%"
        dueDate="2024-03-09"
      />
      <TechWrapper 
        tech="- Final Project"
        height="15%"
        dueDate="2024-02-24"
      />
      <TechWrapper 
        tech="- ASP.NET, MVC"
        height="5%"
        dueDate="2024-02-03"
      />
      <TechWrapper 
        tech="- MVC"
        height="5%"
        dueDate="2024-01-27"
      />
      <TechWrapper 
        tech="- ASP.NET, Web API"
        height="5%"
        dueDate="2024-01-20"
      />
      <TechWrapper 
        tech="- Entity Framework"
        height="5%"
        dueDate="2024-01-13"
      />
      <TechWrapper 
        tech="- ADO.NET, LINQ"
        height="5%"
        dueDate="2024-01-06"
      />
      <TechWrapper 
        tech="- C# Database Methodology, SQL"
        height="5%"
        dueDate="2023-12-30"
      />
      <TechWrapper 
        tech="- Project Management/Agile, Scrum"
        height="5%"
        dueDate="2023-12-23"
      />
      <TechWrapper 
        tech="- React"
        height="10%"
        dueDate="2023-12-16"
      />
      <TechWrapper 
        tech="- HTML, CSS & JavaScript"
        height="5%"
        dueDate="2023-12-02"
      />
      <TechWrapper 
        tech="- C#"
        height="20%"
        dueDate="2023-11-25"
      />
    </div>
  )
}

export default BottomContent;