import ProjectDetail from '../../component/ProjectDetail';
const projectData = {
  title: "Riplay - Sistem Manajemen Dokumen Kontrak Digital",
  description: "Aplikasi mobile dan backend API untuk manajemen dokumen kontrak digital dengan fitur digital signature, PDF viewer, dan integrasi sistem asuransi untuk perusahaan finansial.",
  fullDescription: "Riplay adalah sistem manajemen dokumen kontrak digital yang komprehensif yang terdiri dari aplikasi mobile React Native dan backend API Spring Boot. Sistem ini dirancang untuk memfasilitasi proses digitalisasi kontrak dengan fitur digital signature, preview dokumen PDF, manajemen metadata, dan integrasi dengan sistem asuransi. Aplikasi mobile memungkinkan pengguna untuk melakukan login, memilih cabang, mencari kontrak berdasarkan nomor aplikasi, melakukan digital signature, dan mengelola dokumen kontrak secara real-time. Backend API menyediakan layanan untuk autentikasi, manajemen data kontrak, generasi dokumen dengan JasperReports, dan integrasi dengan sistem eksternal seperti ECM dan Adiraku.",
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
  role: "Full-Stack Developer & Mobile Developer",
  responsibilities: [
    "Mengembangkan aplikasi mobile React Native untuk manajemen dokumen kontrak",
    "Membuat backend API dengan Spring Boot untuk layanan kontrak dan autentikasi",
    "Mengimplementasikan sistem digital signature dengan canvas drawing",
    "Mengintegrasikan PDF viewer untuk preview dan manajemen dokumen",
    "Mengembangkan sistem autentikasi JWT dengan role-based access control",
    "Membuat sistem manajemen metadata dokumen dengan Redis caching",
    "Mengintegrasikan JasperReports untuk generasi dokumen PDF",
    "Mengimplementasikan sistem pencarian kontrak berdasarkan nomor aplikasi",
    "Mengembangkan fitur manajemen cabang dan organisasi unit",
    "Membuat sistem upload dan download dokumen dengan validasi",
    "Mengintegrasikan dengan sistem eksternal (ECM, Adiraku, Maple)",
    "Mengoptimalkan performa aplikasi mobile dengan proper state management",
    "Mengimplementasikan sistem notifikasi dan error handling",
    "Membuat sistem logging dan monitoring untuk debugging"
  ],
  challenge: "Proyek ini memiliki kompleksitas tinggi dalam mengintegrasikan multiple sistem: aplikasi mobile, backend API, database Oracle, Redis caching, dan sistem eksternal. Tantangan utama adalah membuat sistem yang dapat menangani digital signature dengan kualitas tinggi, memastikan sinkronisasi data real-time antara mobile dan backend, mengelola dokumen PDF yang besar dengan performa optimal, dan mengintegrasikan dengan sistem legacy yang sudah ada. Selain itu, perlu mempertimbangkan aspek keamanan dalam digital signature dan manajemen dokumen sensitif, serta UX yang intuitif untuk pengguna mobile.",
  solution: "Saya mengimplementasikan arsitektur hybrid dengan React Native untuk cross-platform mobile development dan Spring Boot untuk backend API yang robust. Digital signature menggunakan canvas drawing dengan konversi ke base64 untuk transmisi yang aman. PDF management menggunakan react-native-pdf dengan optimasi caching. Backend menggunakan Spring Boot dengan JPA untuk database operations dan Redis untuk session management. Sistem autentikasi menggunakan JWT dengan refresh token mechanism. Database design menggunakan Oracle dengan proper indexing untuk performa optimal. Integrasi sistem eksternal menggunakan REST API dengan proper error handling dan timeout management.",
  features: [
    "Sistem login dengan autentikasi JWT dan manajemen session",
    "Pemilihan cabang dan organisasi unit untuk multi-branch support",
    "Pencarian kontrak berdasarkan nomor aplikasi dengan real-time validation",
    "Digital signature dengan canvas drawing dan konversi ke PDF",
    "PDF viewer terintegrasi untuk preview dan navigasi dokumen",
    "Sistem manajemen metadata dokumen dengan caching Redis",
    "Upload dan download dokumen dengan progress tracking",
    "Sistem notifikasi dan error handling yang komprehensif",
    "Manajemen spesimen signature untuk multiple user",
    "Integrasi dengan sistem asuransi dan pembiayaan",
    "Sistem logging dan audit trail untuk compliance",
    "Responsive design untuk berbagai ukuran layar mobile",
    "Offline capability dengan AsyncStorage untuk data caching",
    "Sistem backup dan recovery untuk dokumen penting",
    "Multi-language support untuk dokumentasi",
    "Sistem approval workflow untuk dokumen kontrak"
  ],
  technicalHighlights: [
    "Mobile application dengan React Native 0.63.2 dan React Navigation v5",
    "Backend API dengan Spring Boot 2.3.3 dan Java 8",
    "Database integration dengan Oracle menggunakan JPA/Hibernate",
    "Redis caching untuk session management dan data optimization",
    "Digital signature dengan react-native-signature-canvas",
    "PDF management dengan react-native-pdf dan iText library",
    "JasperReports integration untuk document generation",
    "JWT authentication dengan refresh token mechanism",
    "REST API design dengan proper error handling dan validation",
    "Mobile state management dengan Context API dan AsyncStorage",
    "Cross-platform development untuk Android dan iOS",
  ],
  businessImpact: [
    "Meningkatkan efisiensi proses kontrak dengan digitalisasi dokumen",
    "Meningkatkan akurasi dan keamanan dengan digital signature",
    "Mengoptimalkan resource dengan automated document management",
    "Mengurangi biaya operasional dengan paperless workflow",
    "Meningkatkan customer experience dengan mobile accessibility",
    "Memungkinkan remote work dengan cloud-based document access"
  ]
};

export default function RiplayPage() {
  return <ProjectDetail project={projectData} />;
}