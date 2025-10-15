import ProjectDetail from '../../component/ProjectDetail';

const projectData = {
  title: "Tukerin - Platform Pertukaran Barang",
  description: "Platform digital untuk pertukaran barang yang memungkinkan pengguna menukar barang yang tidak terpakai dengan barang yang diinginkan, mendukung sustainable living dan mengurangi limbah.",
  fullDescription: "Tukerin adalah platform pertukaran barang yang inovatif yang dirancang untuk mempromosikan gaya hidup berkelanjutan dan mengurangi limbah. Platform ini memungkinkan pengguna untuk menukar barang yang tidak terpakai dengan barang yang mereka butuhkan, menciptakan ekonomi sirkular yang bermanfaat bagi masyarakat. Sistem ini mendukung berbagai jenis pengguna mulai dari individu biasa hingga yayasan, dengan fitur barter yang aman, sistem approval yang terstruktur, dan tracking history yang komprehensif.",
  image: "/tukerin.png",
  codeLink: "https://github.com/arfandwisukmajaya/tukerin",
  liveDemoLink: "https://tukerin-azure.vercel.app/",
  techStack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "Chakra UI",
    "Axios",
    "Zustand",
    "React Router",
    "Bcrypt",
    "CORS",
    "Vite"
  ],
  role: "Full-Stack Developer",
  responsibilities: [
    "Mengembangkan frontend dengan React.js dan Chakra UI untuk antarmuka yang responsif dan user-friendly",
    "Membuat sistem autentikasi dan otorisasi dengan JWT untuk keamanan data pengguna",
    "Mengimplementasikan state management dengan Zustand untuk mengelola data aplikasi",
    "Mengembangkan RESTful API dengan Express.js untuk komunikasi frontend-backend",
    "Mendesain dan mengimplementasikan database schema dengan MongoDB dan Mongoose",
    "Membuat sistem pertukaran barang (barter) dengan workflow approval yang terstruktur",
    "Mengimplementasikan sistem role-based access untuk user dan foundation",
    "Mengembangkan fitur upload dan manajemen item dengan validasi data",
    "Membuat sistem history tracking untuk melacak aktivitas pertukaran",
    "Mengoptimalkan performa aplikasi dengan lazy loading dan efficient data fetching"
  ],
  challenge: "Aplikasi ini memiliki kompleksitas dalam mengelola sistem pertukaran barang yang melibatkan multiple users dengan kebutuhan berbeda. Tantangan utama adalah membuat sistem yang dapat menangani workflow barter yang kompleks, memastikan keamanan transaksi, dan memberikan pengalaman user yang smooth. Selain itu, perlu mempertimbangkan aspek sustainable living dan user engagement untuk memastikan platform tetap aktif digunakan.",
  solution: "Saya mengimplementasikan arsitektur full-stack dengan React.js di frontend dan Node.js/Express.js di backend. Untuk frontend, saya menggunakan Chakra UI untuk komponen yang konsisten dan responsif, Zustand untuk state management yang efisien, dan React Router untuk navigasi yang smooth. Di backend, saya mengembangkan RESTful API dengan Express.js yang terintegrasi dengan MongoDB menggunakan Mongoose ODM. Sistem autentikasi menggunakan JWT dengan middleware yang aman. Untuk sistem barter, saya membuat workflow yang memungkinkan user untuk request pertukaran, approval dari pemilik item, dan tracking status. Database design menggunakan referensi yang optimal untuk performa yang baik.",
  features: [
    "Sistem registrasi dan login dengan role-based access (User & Foundation)",
    "Dashboard personal untuk mengelola item dan aktivitas pertukaran",
    "Fitur upload item dengan deskripsi dan status trade",
    "Sistem pencarian dan browsing item yang tersedia untuk ditukar",
    "Workflow barter dengan request, approval, dan completion status",
    "Sistem history tracking untuk melacak semua aktivitas pertukaran",
    "Profile management dengan data lengkap pengguna",
    "Responsive design yang optimal di desktop dan mobile",
    "Sistem notifikasi untuk update status barter",
    "Data validation dan error handling yang komprehensif",
    "Secure API endpoints dengan JWT authentication",
    "Database optimization dengan proper indexing",
    "Clean code architecture dengan separation of concerns",
    "User-friendly interface dengan Chakra UI components",
    "State management yang efisien dengan Zustand",
    "RESTful API design dengan proper HTTP methods"
  ],
  technicalHighlights: [
    "Frontend dengan React.js menggunakan 15+ komponen reusable",
    "Backend API dengan 20+ endpoints menggunakan Express.js",
    "Database design dengan 4 model utama (User, Item, Barter, History)",
    "JWT authentication dengan middleware security",
    "State management dengan Zustand store",
    "Responsive UI dengan Chakra UI component library",
    "RESTful API dengan proper error handling",
    "MongoDB integration dengan Mongoose ODM",
    "Password hashing dengan bcrypt untuk keamanan",
    "CORS configuration untuk cross-origin requests",
    "Modular architecture dengan separation of concerns",
    "Data validation dan sanitization",
    "Async/await pattern untuk database operations",
    "Environment configuration dengan dotenv",
    "Development tools dengan nodemon dan vite"
  ],
  businessImpact: [
    "Mendorong sustainable living dengan mengurangi limbah barang",
    "Menciptakan ekonomi sirkular yang bermanfaat bagi masyarakat",
    "Meningkatkan engagement user dengan platform yang mudah digunakan",
    "Mengurangi biaya pembelian barang baru dengan sistem pertukaran",
    "Membangun komunitas yang peduli terhadap lingkungan"
  ],
  figmaScreenshots: [
  ],
  additionalScreenshots: [
  ]
};

export default function TukerinPage() {
  return <ProjectDetail project={projectData} />;
}
