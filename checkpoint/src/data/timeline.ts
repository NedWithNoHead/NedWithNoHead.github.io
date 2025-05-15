export interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  duration?: string;
  website?: string;
  bulletPoints: string[];
  roles?: {
    title: string;
    bulletPoints: string[];
  }[];
}

export const timelineItems: TimelineItem[] = [
  {
    year: "2024",
    title: "BCIT Graduation",
    bulletPoints: [
      "Computer Information Technology Diploma (94% GPA)",
      "Specialized in data analysis, cloud technologies, and systems development"
    ]
  },
  {
    year: "2024",
    title: "BC Liquor Distribution Branch",
    subtitle: "Project Analyst (Co-op)",
    duration: "Jan 2024 - Aug 2024",
    website: "https://www.bcldb.com/",
    bulletPoints: [
      "Selected as top 15% of students for competitive placement",
      "Developed Power BI dashboards and Python automation solutions",
      "Led data quality testing and validation framework implementation"
    ]
  },
  {
    year: "2022",
    title: "Career Transition to Technology",
    bulletPoints: [
      "Enrolled in Computer Information Technology program at BCIT",
      "Began specializing in data systems and business technology solutions"
    ]
  },
  {
    year: "2017-22",
    title: "Fujinet Systems JSC",
    duration: "Feb 2017 - Aug 2022",
    website: "https://fujinet.net/",
    bulletPoints: [],
    roles: [
      {
        title: "Financial Data Analyst",
        bulletPoints: [
          "Led data-driven financial reporting and analysis across business units",
          "Developed and maintained database systems for financial tracking",
          "Created executive dashboards reducing reporting cycles by 40%",
          "Managed portfolio optimization generating $550K in revenue"
        ]
      },
      {
        title: "Business Systems Analyst",
        bulletPoints: [
          "Spearheaded ERP implementation and integration",
          "Designed and implemented automated business processes",
          "Led requirements gathering and system testing",
          "Served as technical liaison between development and business teams"
        ]
      }
    ]
  },
  {
    year: "2016",
    title: "State University of New York at Buffalo",
    website: "https://www.buffalo.edu/",
    bulletPoints: [
      "Bachelor of Science in Business Administration",
      "Dual concentration: Management Information Systems and Financial Analysis",
      "Foundation in both business principles and information systems"
    ]
  }
];
