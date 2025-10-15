import ProjectDetail from '../../component/ProjectDetail';

const projectData = {
  title: "BASIS - Bincang Siswa",
  description: "Platform forum dan survey yang dirancang khusus untuk mahasiswa dan siswa di Indonesia, memungkinkan mereka untuk berbagi pengetahuan, bertanya jawab, dan mencari responden survey dengan mudah.",
  fullDescription: "BASIS (Bincang Siswa) adalah platform forum dan survey yang inovatif yang dirancang khusus untuk mahasiswa dan siswa di seluruh Indonesia. Platform ini menyediakan dua fitur utama: sistem forum untuk tanya jawab dan berbagi pengetahuan antar pengguna, serta sistem survey yang memungkinkan pengguna untuk membagikan link survey dan mencari responden dengan mudah. Platform ini dibangun dengan React.js untuk frontend yang modern dan responsif, dengan integrasi API backend untuk komunikasi data real-time.",
  image: "/basis-logo.png",
  codeLink: "https://github.com/rg-km/final-project-engineering-6",
  liveDemoLink: "https://basis-demo.vercel.app/",
  techStack: [
    "React.js",
    "React Router DOM",
    "SCSS/Sass",
    "Material-UI (MUI)",
    "Axios",
    "Zustand",
    "Styled Components",
    "React Scripts",
    "Node.js",
    "JavaScript ES6+",
    "CSS3",
    "HTML5",
    "Responsive Design",
    "Component Architecture",
    "State Management",
    "API Integration"
  ],
  role: "Frontend Developer & UI/UX Designer",
  responsibilities: [
    "Mengembangkan antarmuka pengguna dengan React.js dan komponen yang reusable",
    "Mengimplementasikan routing dengan React Router DOM untuk navigasi antar halaman",
    "Membuat desain responsif menggunakan SCSS dan Material-UI untuk konsistensi visual",
    "Mengintegrasikan state management dengan Zustand untuk pengelolaan state aplikasi",
    "Mengembangkan sistem autentikasi dan manajemen profil pengguna",
    "Membuat komponen forum untuk posting, komentar, dan sistem like",
    "Mengimplementasikan halaman survey dengan fitur CRUD lengkap",
    "Mengembangkan sistem notifikasi real-time untuk interaksi pengguna",
    "Membuat desain UI/UX yang user-friendly dan modern",
    "Mengoptimalkan performa aplikasi dengan lazy loading dan code splitting",
    "Mengintegrasikan API backend dengan Axios untuk komunikasi data",
    "Mengimplementasikan responsive design untuk berbagai ukuran layar"
  ],
  challenge: "Tantangan utama dalam pengembangan frontend BASIS adalah menciptakan antarmuka yang intuitif dan responsif untuk menghubungkan mahasiswa dari berbagai institusi di Indonesia. Perlu memperhatikan user experience yang baik untuk memastikan platform mudah digunakan oleh pengguna dengan tingkat keahlian teknologi yang berbeda. Selain itu, perlu mengoptimalkan performa aplikasi untuk menangani banyak pengguna secara bersamaan dan memastikan kompatibilitas dengan berbagai perangkat dan browser.",
  solution: "Saya mengimplementasikan arsitektur komponen React yang modular dan reusable untuk memudahkan maintenance dan pengembangan. Menggunakan SCSS untuk styling yang konsisten dan Material-UI untuk komponen yang sudah teruji. State management dengan Zustand memungkinkan pengelolaan state yang efisien dan mudah di-debug. Implementasi responsive design dengan breakpoints yang tepat memastikan aplikasi berfungsi optimal di berbagai ukuran layar. Integrasi API dengan Axios dan error handling yang proper memastikan komunikasi data yang stabil.",
  features: [
    "Sistem autentikasi dengan login dan register yang aman",
    "Dashboard home yang informatif dengan statistik platform",
    "Forum posting dengan kategori dan sistem pencarian",
    "Sistem komentar dan like untuk interaksi pengguna",
    "Halaman profil pengguna dengan edit profil dan avatar",
    "Sistem notifikasi real-time untuk update terbaru",
    "Halaman survey dengan CRUD operations lengkap",
    "Sidebar navigasi yang responsif dan user-friendly",
    "Sistem routing yang smooth antar halaman",
    "Form validation yang comprehensive",
    "Loading states dan error handling yang baik",
    "Responsive design untuk mobile dan desktop",
    "Dark/Light theme support",
    "Search functionality untuk post dan survey",
    "Pagination untuk data yang banyak",
    "Image upload dan preview functionality"
  ],
  technicalHighlights: [
    "React.js dengan functional components dan hooks",
    "React Router DOM untuk client-side routing",
    "SCSS dengan BEM methodology untuk styling",
    "Material-UI untuk komponen yang konsisten",
    "Zustand untuk state management yang lightweight",
    "Axios untuk HTTP requests dengan interceptors",
    "Responsive design dengan CSS Grid dan Flexbox",
    "Component composition pattern untuk reusability",
    "Custom hooks untuk logic yang reusable",
    "Error boundaries untuk error handling",
    "Lazy loading untuk optimasi performa",
    "Form validation dengan custom validation logic",
    "Local storage untuk persistence data",
    "API integration dengan proper error handling",
    "Modular CSS architecture dengan SCSS"
  ],
  businessImpact: [
    "Meningkatkan aksesibilitas platform forum untuk mahasiswa Indonesia",
    "Menyediakan solusi yang mudah digunakan untuk mencari responden survey",
    "Meningkatkan engagement mahasiswa dengan interface yang user-friendly",
    "Memungkinkan kolaborasi dan sharing knowledge antar institusi",
    "Mengoptimalkan user experience dengan desain yang responsif dan modern"
  ]
};

export default function BasisPage() {
  return <ProjectDetail project={projectData} />;
}