import "../styling/RightSideContent.css";

import TechWrapper from "./TechWrapper";

const RightSideContent = () => {
  return (
    <div className="TechContainer">
      <TechWrapper 
        tech="Cloud"
        height="10%"
      />
      <TechWrapper 
        tech="Final Project"
        height="15%"
      />
      <TechWrapper 
        tech="ASP.NET, MVC"
        height="5%"
      />
      <TechWrapper 
        tech="MVC"
        height="5%"
      />
      <TechWrapper 
        tech="ASP.NET, Web API"
        height="5%"
      />
      <TechWrapper 
        tech="Entity Framework"
        height="5%"
      />
      <TechWrapper 
        tech="ADO.NET, LINQ"
        height="5%"
      />
      <TechWrapper 
        tech="C# Database Methodology, SQL"
        height="5%"
      />
      <TechWrapper 
        tech="Project Management/Agile, Scrum"
        height="5%"
      />
      <TechWrapper 
        tech="React"
        height="10%"
      />
      <TechWrapper 
        tech="HTML, CSS & JavaScript"
        height="5%"
      />
      <TechWrapper 
        tech="C#"
        height="20%"
      />
    </div>
  )
}

export default RightSideContent;