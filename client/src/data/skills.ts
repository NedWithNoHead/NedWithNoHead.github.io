export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "data",
    title: "Data Skills",
    skills: [
      "Power BI, SQL Server, Tableau",
      "ETL Pipeline Development",
      "Statistical Analysis & Data Modeling",
      "Data Visualization & Dashboard Design",
      "MySQL, Database Optimization",
      "Data Integrity & Validation"
    ]
  },
  {
    id: "business",
    title: "Business Analysis",
    skills: [
      "Requirements Gathering & Process Modeling",
      "ERP Implementation & Integration",
      "Stakeholder Management & Communication",
      "UAT Strategy & Test Case Development",
      "Technical Documentation",
      "Project Performance Evaluation",
      "Financial Analysis & Reporting"
    ]
  },
  {
    id: "technical",
    title: "Technical Expertise",
    skills: [
      "Python, SQL, JavaScript",
      "AWS, Azure Cloud Platforms",
      "Docker, Kubernetes, Containerization",
      "CI/CD Pipelines (Jenkins, GitLab)",
      "Terraform, Infrastructure as Code",
      "Git Version Control",
      "Linux Administration"
    ]
  }
];
