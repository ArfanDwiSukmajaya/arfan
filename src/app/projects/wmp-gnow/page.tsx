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
      "Mengimplementasikan Design System dari UI/UX, sehingga tampilan aplikasi yang mudah digunakan dan responsif di berbagai perangkat",
      "Mengembangkan backend API dengan arsitektur microservices untuk mendukung multiple aplikasi",
      "Membuat sistem scheduler untuk automated tasks dan background processing",
      "Mengimplementasikan sistem login dan kontrol akses berdasarkan jabatan dengan JWT authentication",
      "Mengoptimalkan kecepatan aplikasi agar loading lebih cepat dengan caching dan database optimization",
      "Membuat sistem notifikasi real-time untuk mengingatkan user tentang tugas yang perlu diselesaikan",
      "Mengembangkan reusable services yang dapat digunakan oleh aplikasi lain dalam ekosistem",
      "Mengimplementasikan sistem backup otomatis dan data synchronization",
      "Membuat fitur export data ke Excel untuk keperluan reporting dengan background processing",
      "Mengintegrasikan dengan external APIs dan third-party services"
    ],
    challenge: t('project.wmp_gnow.challenge'),
    solution: t('project.wmp_gnow.solution'),
    features: [
      "Sistem pembuatan proposal yang mudah dengan panduan step-by-step",
      "Dashboard yang menampilkan status proposal secara real-time",
      "Sistem approval yang dapat disesuaikan dengan struktur organisasi",
      "Fitur upload dokumen pendukung dengan drag & drop",
      "Sistem notifikasi real-time yang mengingatkan user tentang tugas yang perlu diselesaikan",
      "Fitur pencarian dan filter untuk memudahkan pencarian data",
      "Export data ke Excel untuk keperluan laporan dengan background processing",
      "Sistem backup otomatis dengan scheduler untuk mencegah kehilangan data",
      "RESTful API dengan arsitektur microservices untuk multiple aplikasi",
      "Sistem scheduler untuk automated tasks dan background processing",
      "Reusable services yang dapat digunakan oleh aplikasi lain",
      "JWT authentication dengan role-based access control",
      "Database optimization dengan caching menggunakan Redis",
      "WebSocket integration untuk real-time updates",
      "Tampilan yang responsif untuk desktop dan mobile",
      "Sistem offline detection untuk mencegah kehilangan data saat koneksi terputus"
    ],
    technicalHighlights: [
      "Arsitektur modular dengan 15+ domain stores menggunakan Pinia",
      "Backend API dengan 30+ endpoints menggunakan Express.js",
      "Sistem routing dengan 50+ routes dan nested navigation",
      "Komponen reusable dengan 20+ custom components",
      "Microservices architecture dengan 5+ independent services",
      "Sistem scheduler dengan 10+ automated cron jobs",
      "JWT authentication dengan role-based middleware",
      "Database optimization dengan MongoDB indexing dan Redis caching",
      "WebSocket implementation untuk real-time notifications",
      "RESTful API dengan comprehensive error handling",
      "Background processing untuk heavy tasks",
      "Unit testing dengan Jest dan Vitest",
      "Code quality dengan ESLint dan Prettier",
      "Performance optimization dengan lazy loading dan caching",
      "Security implementation dengan token-based authentication"
    ],
    businessImpact: [
      "Meningkatkan akurasi pricing dengan sistem validasi otomatis",
      "Mengurangi error human dengan form validation yang komprehensif",
      "Meningkatkan transparansi dengan real-time status tracking",
      "Mengoptimalkan workflow dengan role-based access control",
      "Meningkatkan user experience dengan responsive design"
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
