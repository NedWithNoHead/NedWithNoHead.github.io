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
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "HomeDecide",
    description: "Financial decision tool that analyzes the buy vs. rent question through data modeling, helping users make informed housing decisions based on market conditions and personal finances.",
    technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
    liveLink: "https://nedwithnohead-homedecide--8501.prod1a.defang.dev/",
    githubLink: "https://github.com/NedWithNoHead/HomeDecide",
    imageUrl: "/attached_assets/homedecide_new.jpg"
  },
  {
    title: "Runify - Event Processing System",
    description: "High-performance microservices architecture handling 1000+ concurrent events through asynchronous processing, demonstrating enterprise-level system design principles.",
    technologies: ["Python", "Kafka", "Docker", "Azure VM"],
    githubLink: "https://github.com/NedWithNoHead/Runify",
    imageUrl: "/attached_assets/runify_new.jpg"
  },
  {
    title: "AWS Multi-Region Deployment",
    description: "Cloud-native application with infrastructure as code implementation, featuring high availability architecture and automated scaling across multiple AWS regions.",
    technologies: ["Terraform", "AWS", "CloudWatch", "MySQL"],
    githubLink: "https://github.com/NedWithNoHead/chat_service_provisioning",
    imageUrl: "/attached_assets/aws_new.jpg"
  },
  {
    title: "Enterprise Media Server",
    description: "Production-grade home lab implementation demonstrating enterprise architecture principles with containerization, redundancy, and monitoring for 10+ concurrent users.",
    technologies: ["Docker Compose", "RAID", "Linux", "Networking"],
    githubLink: "https://github.com/NedWithNoHead/DockerStreamingService",
    imageUrl: "/attached_assets/enterpise_media_server.jpg"
  }
];
