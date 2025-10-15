import ProjectDetail from '../../component/ProjectDetail';


const projectData = {
  title: "WMP GNOW",
  description: "A comprehensive wealth management platform for financial services with proposal management, pricing configuration, and multi-role access control system.",
  fullDescription: "GNOW WMP adalah platform manajemen kekayaan yang komprehensif yang dirancang khusus untuk industri jasa keuangan. Platform ini menyediakan solusi end-to-end untuk manajemen proposal, konfigurasi pricing, skema produk, dan kontrol akses berbasis peran. Sistem ini memungkinkan berbagai stakeholder mulai dari Administrator, Regional Sales Manager, Branch Manager, hingga Director untuk mengelola proposal finansial dengan workflow approval yang terstruktur dan sistem keamanan yang robust.",
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
  role: "Full-Stack Developer",
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
  challenge: "Aplikasi ini memiliki kompleksitas tinggi dengan multiple user roles (Administrator, RSM, Branch Manager, Director, dll) yang memerlukan akses berbeda ke fitur yang sama. Tantangan utama adalah membuat sistem yang dapat menangani workflow approval yang kompleks, manajemen proposal dengan berbagai tipe (Regular, Appreciation, Deviation), dan sistem pricing yang dinamis dengan konfigurasi yang berbeda untuk setiap role.",
  solution: "Saya mengimplementasikan arsitektur full-stack dengan frontend Vue.js dan backend Node.js yang terintegrasi. Di frontend, saya menggunakan Pinia store yang terpisah untuk setiap domain (proposal, pricing, scheme, auth) dengan state management yang independen. Untuk backend, saya mengembangkan RESTful API dengan arsitektur microservices yang mendukung multiple aplikasi. Sistem scheduler menggunakan cron jobs untuk automated tasks seperti backup data, generate reports, dan sync data. Untuk role-based access, saya membuat middleware backend yang memvalidasi JWT token dan akses berdasarkan role user. Sistem real-time notification menggunakan WebSocket untuk memberikan update langsung kepada user. Database optimization dengan indexing dan caching menggunakan Redis untuk meningkatkan performa.",
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

export default function WmpGnowPage() {
  return <ProjectDetail project={projectData} />;
}
