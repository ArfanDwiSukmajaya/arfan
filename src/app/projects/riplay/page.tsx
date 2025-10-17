"use client";

import ProjectDetail from '../../component/ProjectDetail';
import { useLanguage } from '../../context/LanguageContext';

export default function RiplayPage() {
  const { t } = useLanguage();

  const projectData = {
    title: t('project.riplay.title') + " - Digital Contract Document Management System",
    description: t('project.riplay.description'),
    fullDescription: t('project.riplay.full_description'),
    image: "/riplay.png",
    codeLink: "",
    liveDemoLink: "",
    techStack: [
      "React Native",
      "Spring Boot",
      "Oracle Database",
      "Redis",
      "JasperReports",
      "JWT Authentication",
      "REST API",
      "Android",
      "AsyncStorage",
      "PDF Viewer",
      "Digital Signature",
    ],
    role: t('project.riplay.role'),
    responsibilities: [
      t('project.riplay.responsibilities.1'),
      t('project.riplay.responsibilities.2'),
      t('project.riplay.responsibilities.3'),
      t('project.riplay.responsibilities.4'),
      t('project.riplay.responsibilities.5'),
      t('project.riplay.responsibilities.6'),
      t('project.riplay.responsibilities.7'),
      t('project.riplay.responsibilities.8'),
      t('project.riplay.responsibilities.9'),
      t('project.riplay.responsibilities.10'),
      t('project.riplay.responsibilities.11'),
      t('project.riplay.responsibilities.12'),
      t('project.riplay.responsibilities.13'),
      t('project.riplay.responsibilities.14')
    ],
    challenge: t('project.riplay.challenge'),
    solution: t('project.riplay.solution'),
    features: [
      t('project.riplay.features.1'),
      t('project.riplay.features.2'),
      t('project.riplay.features.3'),
      t('project.riplay.features.4'),
      t('project.riplay.features.5'),
      t('project.riplay.features.6'),
      t('project.riplay.features.7'),
      t('project.riplay.features.8'),
      t('project.riplay.features.9'),
      t('project.riplay.features.10'),
      t('project.riplay.features.11'),
      t('project.riplay.features.12'),
      t('project.riplay.features.13'),
      t('project.riplay.features.14'),
      t('project.riplay.features.15'),
      t('project.riplay.features.16')
    ],
    technicalHighlights: [
      t('project.riplay.technical_highlights.1'),
      t('project.riplay.technical_highlights.2'),
      t('project.riplay.technical_highlights.3'),
      t('project.riplay.technical_highlights.4'),
      t('project.riplay.technical_highlights.5'),
      t('project.riplay.technical_highlights.6'),
      t('project.riplay.technical_highlights.7'),
      t('project.riplay.technical_highlights.8'),
      t('project.riplay.technical_highlights.9'),
      t('project.riplay.technical_highlights.10'),
      t('project.riplay.technical_highlights.11')
    ],
    businessImpact: [
      t('project.riplay.business_impact.1'),
      t('project.riplay.business_impact.2'),
      t('project.riplay.business_impact.3'),
      t('project.riplay.business_impact.4'),
      t('project.riplay.business_impact.5'),
      t('project.riplay.business_impact.6')
    ]
  };

  return <ProjectDetail project={projectData} />;
}