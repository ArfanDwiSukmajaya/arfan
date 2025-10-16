"use client";

import ProjectDetail from '../../component/ProjectDetail';
import { useLanguage } from '../../context/LanguageContext';

export default function FourCilabsPage() {
  const { t } = useLanguage();

  const projectData = {
    title: t('project.4c_ilabs.title'),
    description: t('project.4c_ilabs.description'),
    fullDescription: t('project.4c_ilabs.full_description'),
    image: "/4c-ilabs.png",
    codeLink: "https://github.com/arfandwisukmajaya/4c-ilabs",
    liveDemoLink: "https://4c-ilabs-demo.vercel.app/",
    techStack: [
      "Sails.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "PeerJS",
      "Electron",
      "Arduino CLI",
      "EJS",
      "Bootstrap",
      "JWT Authentication",
      "WebRTC",
      "Whereby API",
      "Nextcloud Integration",
      "Grunt",
      "Less CSS"
    ],
    role: t('project.4c_ilabs.role'),
    responsibilities: [
      "Mengembangkan sistem pembelajaran berbasis web dengan Sails.js untuk manajemen kelas dan materi",
      "Membuat aplikasi desktop dengan Electron untuk panel kontrol dosen",
      "Mengimplementasikan sistem real-time communication dengan Socket.io dan WebRTC",
      "Mengintegrasikan Arduino CLI untuk kompilasi dan upload kode secara remote",
      "Mengembangkan sistem video conference dengan PeerJS dan Whereby API",
      "Membuat sistem manajemen file dan materi dengan Nextcloud integration",
      "Mengimplementasikan role-based access control untuk dosen, mahasiswa, dan admin",
      "Mengembangkan sistem absensi dan tracking progress mahasiswa",
      "Membuat sistem diskusi dan tugas terintegrasi",
      "Mengoptimalkan performa aplikasi dengan proper database indexing dan caching"
    ],
    challenge: t('project.4c_ilabs.challenge'),
    solution: t('project.4c_ilabs.solution'),
    features: [
      "Sistem manajemen kelas dengan role-based access (Dosen, Mahasiswa, Admin)",
      "Dashboard interaktif untuk monitoring progress dan statistik",
      "Sistem upload dan download materi dengan Nextcloud integration",
      "Video conference terintegrasi dengan WebRTC dan PeerJS",
      "Kompilasi dan upload kode Arduino secara remote",
      "Sistem absensi dan tracking kehadiran mahasiswa",
      "Forum diskusi terintegrasi untuk Q&A",
      "Sistem penugasan dengan upload dan penilaian",
      "Real-time monitoring untuk dosen melalui desktop panel",
      "Sketchbook management untuk kode Arduino mahasiswa",
      "Sistem notifikasi real-time untuk update status",
      "File management dengan support multiple format",
      "Responsive design untuk akses mobile dan desktop",
      "Session management dengan JWT authentication",
      "Database optimization dengan proper indexing",
      "Cross-platform desktop application dengan Electron"
    ],
    technicalHighlights: [
      "Web application dengan Sails.js framework menggunakan MVC pattern",
      "Desktop application dengan Electron untuk cross-platform support",
      "Real-time communication dengan Socket.io dan WebRTC",
      "Arduino CLI integration untuk remote programming",
      "Database design dengan 6 model utama (User, Kelas, Tugas, Absen, Discussion, Sketchbook)",
      "Video conferencing dengan PeerJS dan Whereby API",
      "File management dengan Nextcloud integration",
      "Role-based authentication dengan JWT",
      "Responsive UI dengan Bootstrap dan custom CSS",
      "Database integration dengan MongoDB dan Sails ORM",
      "Process management untuk Arduino CLI operations",
      "WebSocket implementation untuk real-time updates",
      "File upload/download dengan proper validation",
      "Session management dengan Redis support",
      "Development tools dengan Grunt dan Less CSS"
    ],
    businessImpact: [
      "Meningkatkan aksesibilitas pembelajaran praktikum elektronika secara remote",
      "Mengurangi kebutuhan hardware fisik dengan virtual Arduino environment",
      "Meningkatkan engagement mahasiswa dengan interactive learning experience",
      "Memungkinkan pembelajaran jarak jauh yang efektif untuk praktikum hands-on",
      "Mengoptimalkan resource dosen dengan automated monitoring dan assessment"
    ],
    figmaScreenshots: [
    ],
    additionalScreenshots: [
    ]
  };

  return <ProjectDetail project={projectData} />;
}
