import ProjectDetail from '../../component/ProjectDetail';

const projectData = {
  title: "4C-iLabs - Platform Praktikum Elektronika Terintegrasi",
  description: "Platform pembelajaran praktikum elektronika yang terintegrasi dengan Arduino, mendukung pembelajaran jarak jauh dengan fitur video conference, manajemen kelas, dan kompilasi kode Arduino secara real-time.",
  fullDescription: "4C-iLabs adalah platform pembelajaran praktikum elektronika yang inovatif yang dirancang untuk mendukung pembelajaran jarak jauh di bidang elektronika dan pemrograman Arduino. Platform ini terdiri dari tiga komponen utama: sistem pembelajaran berbasis web (ePraktikum Learning), server real-time untuk komunikasi dan kompilasi Arduino (ePraktikum Server), dan aplikasi desktop untuk dosen (ePraktikum Panel). Sistem ini memungkinkan dosen untuk membuat kelas praktikum, mengunggah materi, dan memantau progress mahasiswa secara real-time, sementara mahasiswa dapat mengakses materi, mengerjakan tugas, dan melakukan praktikum Arduino secara remote dengan dukungan video conference.",
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
  role: "Full-Stack Developer & System Architect",
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
  challenge: "Platform ini memiliki kompleksitas tinggi dalam mengintegrasikan multiple teknologi: web application, desktop application, real-time communication, Arduino programming, dan video conferencing. Tantangan utama adalah membuat sistem yang dapat menangani kompilasi dan upload Arduino secara remote, memastikan kualitas video conference yang stabil, dan memberikan pengalaman pembelajaran yang seamless antara web dan desktop application. Selain itu, perlu mempertimbangkan aspek keamanan dalam akses remote ke hardware Arduino dan manajemen file yang efisien.",
  solution: "Saya mengimplementasikan arsitektur microservices dengan tiga komponen utama yang saling terintegrasi. Untuk web application, saya menggunakan Sails.js dengan MongoDB untuk manajemen data yang efisien. Desktop application dibangun dengan Electron untuk cross-platform compatibility. Sistem real-time menggunakan Socket.io untuk komunikasi dan PeerJS untuk WebRTC video streaming. Arduino integration menggunakan Arduino CLI dengan spawn process untuk kompilasi dan upload yang aman. Database design menggunakan referensi yang optimal dengan proper indexing untuk performa yang baik. Sistem file management terintegrasi dengan Nextcloud untuk storage yang scalable.",
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

export default function FourCilabsPage() {
  return <ProjectDetail project={projectData} />;
}
