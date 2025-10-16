"use client";

import ProjectDetail from '../../component/ProjectDetail';
import { useLanguage } from '../../context/LanguageContext';


export default function WmpGnowPage() {
  const { t } = useLanguage();

  const projectData = {
    title: t('project.wmp_gnow.title'),
    description: t('project.wmp_gnow.description'),
    fullDescription: t('project.wmp_gnow.full_description'),
    image: "/gnow.png",
    codeLink: "",
    liveDemoLink: "",
    techStack: [
      "Spring Boot",
      "Vue.js 3",
      "JWT Authentication",
      "Oracle Database",
      "Redis",
      "Cron Jobs",
      "Microservices",
      "RESTful API",
      "ESLint",
    ],
    role: t('project.wmp_gnow.role'),
    responsibilities: [
      t('project.wmp_gnow.responsibilities.1'),
      t('project.wmp_gnow.responsibilities.2'),
      t('project.wmp_gnow.responsibilities.3'),
      t('project.wmp_gnow.responsibilities.4'),
      t('project.wmp_gnow.responsibilities.5'),
      t('project.wmp_gnow.responsibilities.6'),
      t('project.wmp_gnow.responsibilities.7'),
      t('project.wmp_gnow.responsibilities.8'),
      t('project.wmp_gnow.responsibilities.9'),
      t('project.wmp_gnow.responsibilities.10')
    ],
    challenge: t('project.wmp_gnow.challenge'),
    solution: t('project.wmp_gnow.solution'),
    features: [
      t('project.wmp_gnow.features.1'),
      t('project.wmp_gnow.features.2'),
      t('project.wmp_gnow.features.3'),
      t('project.wmp_gnow.features.4'),
      t('project.wmp_gnow.features.5'),
      t('project.wmp_gnow.features.6'),
      t('project.wmp_gnow.features.7'),
      t('project.wmp_gnow.features.8'),
      t('project.wmp_gnow.features.9'),
      t('project.wmp_gnow.features.10'),
      t('project.wmp_gnow.features.11'),
      t('project.wmp_gnow.features.12'),
      t('project.wmp_gnow.features.13'),
      t('project.wmp_gnow.features.14'),
      t('project.wmp_gnow.features.15'),
      t('project.wmp_gnow.features.16')
    ],
    technicalHighlights: [
      t('project.wmp_gnow.technical_highlights.1'),
      t('project.wmp_gnow.technical_highlights.2'),
      t('project.wmp_gnow.technical_highlights.3'),
      t('project.wmp_gnow.technical_highlights.4'),
      t('project.wmp_gnow.technical_highlights.5'),
      t('project.wmp_gnow.technical_highlights.6'),
      t('project.wmp_gnow.technical_highlights.7'),
      t('project.wmp_gnow.technical_highlights.8'),
      t('project.wmp_gnow.technical_highlights.9'),
      t('project.wmp_gnow.technical_highlights.10'),
      t('project.wmp_gnow.technical_highlights.11'),
      t('project.wmp_gnow.technical_highlights.12'),
      t('project.wmp_gnow.technical_highlights.13'),
      t('project.wmp_gnow.technical_highlights.14'),
      t('project.wmp_gnow.technical_highlights.15')
    ],
    businessImpact: [
      t('project.wmp_gnow.business_impact.1'),
      t('project.wmp_gnow.business_impact.2'),
      t('project.wmp_gnow.business_impact.3'),
      t('project.wmp_gnow.business_impact.4'),
      t('project.wmp_gnow.business_impact.5')
    ],

    figmaScreenshots: [
      "/figma/wmp-gnow-design-login.png",
      "/figma/wmp-gnow-design-homepage.png",
      "/figma/wmp-gnow-design.png"
    ],
    additionalScreenshots: [
      "/projects/wmp-gnow-dashboard.png",
      "/projects/wmp-gnow-homepage.png",
      "/projects/wmp-gnow-attendance.png"
    ]
  };

  return <ProjectDetail project={projectData} />;
}
