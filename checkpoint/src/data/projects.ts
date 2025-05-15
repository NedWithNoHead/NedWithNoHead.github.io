export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    title: "Space Explorer",
    description: "Interactive visualization platform exploring astronomical data and celestial objects in a user-friendly interface for educational and reference purposes.",
    technologies: ["React", "ThreeJS", "NASA API"],
    liveLink: "https://space-explorer.cloud/",
    githubLink: "https://github.com/NedWithNoHead/SpaceExplorer",
    imageUrl: "/space-explorer.svg"
  },
  {
    title: "HomeDecide",
    description: "Financial decision tool that analyzes the buy vs. rent question through data modeling, helping users make informed housing decisions based on market conditions and personal finances.",
    technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
    liveLink: "https://nedwithnohead-homedecide--8501.prod1a.defang.dev/",
    githubLink: "https://github.com/NedWithNoHead/HomeDecide",
    imageUrl: "/homedecide-tech.svg"
  },
  {
    title: "Runify - Event Processing System",
    description: "High-performance microservices architecture handling 1000+ concurrent events through asynchronous processing, demonstrating enterprise-level system design principles.",
    technologies: ["Python", "Kafka", "Docker", "Azure VM"],
    githubLink: "https://github.com/NedWithNoHead/Runify",
    imageUrl: "/runify-tech.svg"
  },
  {
    title: "AWS Multi-Region Deployment",
    description: "Cloud-native application with infrastructure as code implementation, featuring high availability architecture and automated scaling across multiple AWS regions.",
    technologies: ["Terraform", "AWS", "CloudWatch", "MySQL"],
    githubLink: "https://github.com/NedWithNoHead/chat_service_provisioning",
    imageUrl: "/aws-architecture.svg"
  },
  {
    title: "Enterprise Media Server",
    description: "Production-grade home lab implementation demonstrating enterprise architecture principles with containerization, redundancy, and monitoring for 10+ concurrent users.",
    technologies: ["Docker Compose", "RAID", "Linux", "Networking"],
    githubLink: "https://github.com/NedWithNoHead/DockerStreamingService",
    imageUrl: "/media-server.svg"
  }
];
