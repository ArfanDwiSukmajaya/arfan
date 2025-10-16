"use client";

import ProjectDetail from '../../component/ProjectDetail';
import { useLanguage } from '../../context/LanguageContext';

export default function TextSummarizationPage() {
  const { t } = useLanguage();

  const projectData = {
    title: t('project.text_summarization.title'),
    description: t('project.text_summarization.description'),
    fullDescription: t('project.text_summarization.full_description'),
    image: "/text-sumarization.png",
    codeLink: "https://github.com/ArfanDwiSukmajaya/Text-Summarization-CLSA",
    liveDemoLink: "https://text-summarization-demo.vercel.app",
    techStack: [
      "Python",
      "Flask",
      "NLTK",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "HTML/CSS",
      "JavaScript",
      "Bootstrap"
    ],
    role: t('project.text_summarization.role'),
    responsibilities: [
      t('project.text_summarization.responsibilities.1'),
      t('project.text_summarization.responsibilities.2'),
      t('project.text_summarization.responsibilities.3'),
      t('project.text_summarization.responsibilities.4'),
      t('project.text_summarization.responsibilities.5'),
      t('project.text_summarization.responsibilities.6'),
      t('project.text_summarization.responsibilities.7'),
      t('project.text_summarization.responsibilities.8')
    ],
    challenge: t('project.text_summarization.challenge'),
    solution: t('project.text_summarization.solution'),
    features: [
      t('project.text_summarization.features.1'),
      t('project.text_summarization.features.2'),
      t('project.text_summarization.features.3'),
      t('project.text_summarization.features.4'),
      t('project.text_summarization.features.5'),
      t('project.text_summarization.features.6'),
      t('project.text_summarization.features.7'),
      t('project.text_summarization.features.8')
    ],
    technicalHighlights: [
      t('project.text_summarization.technical_highlights.1'),
      t('project.text_summarization.technical_highlights.2'),
      t('project.text_summarization.technical_highlights.3'),
      t('project.text_summarization.technical_highlights.4'),
      t('project.text_summarization.technical_highlights.5'),
      t('project.text_summarization.technical_highlights.6'),
      t('project.text_summarization.technical_highlights.7'),
      t('project.text_summarization.technical_highlights.8')
    ],
    businessImpact: [
      t('project.text_summarization.business_impact.1'),
      t('project.text_summarization.business_impact.2'),
      t('project.text_summarization.business_impact.3'),
      t('project.text_summarization.business_impact.4')
    ],
    additionalScreenshots: [
      "/screenshots/text-summarization-interface.png",
      "/screenshots/text-summarization-result.png",
      "/screenshots/text-summarization-batch.png"
    ]
  };

  return <ProjectDetail project={projectData} />;
}
