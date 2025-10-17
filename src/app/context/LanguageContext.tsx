"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      id: {
        // Navigation
        'nav.home': 'Beranda',
        'nav.about': 'Tentang',
        'nav.skills': 'Keahlian',
        'nav.experience': 'Pengalaman',
        'nav.portfolio': 'Portofolio',
        'nav.contact': 'Kontak',

        // Hero Section
        'hero.greeting': 'Halo, saya',
        'hero.name': 'Arfan Dwi Sukmajaya',
        'hero.title': 'Full-Stack Developer',
        'hero.description': 'Hi, saya Arfan Dwi Sukmajaya. Sebagai Fullstack Developer, fokus utama saya adalah mentransformasi ide-ide menjadi aplikasi web yang skalabel dan memiliki kualitas unggul. Keahlian saya mencakup pengembangan frontend dan backend, memungkinkan saya untuk merancang solusi yang terjamin fungsionalitas, kecepatan, keandalan, dan pengalaman pengguna yang optimal.',
        'hero.cta': 'Mari Berkolaborasi',

        // About Section
        'about.title': 'Tentang Saya',
        'about.description': 'Saya adalah seorang Full-Stack Developer dengan pengalaman dalam mengembangkan aplikasi web modern menggunakan berbagai teknologi terdepan.',
        'about.tag': 'ini saya',
        'about.journey': 'Perjalanan saya ke dunia teknologi dimulai dengan rasa ingin tahu sederhana tentang bagaimana segala sesuatu bekerja, dan dengan cepat berkembang menjadi hasrat untuk membangun pengalaman digital yang intuitif dan berdampak. Sebagai Full-Stack Developer, saya percaya bahwa kode yang hebat bukan hanya tentang fungsionalitas—tetapi tentang menciptakan pengalaman pengguna yang mulus dan menyenangkan. Saya terus berusaha menggabungkan desain yang indah dengan performa yang optimal, memastikan setiap proyek yang saya bangun tidak hanya terlihat menawan secara visual tetapi juga berfungsi dengan sempurna.',
        'about.thinking': 'Berpikir',
        'about.design': 'Desain',
        'about.execution': 'Eksekusi',

        // Skills Section
        'skills.title': 'Keahlian',
        'skills.frontend': 'Frontend Development',
        'skills.backend': 'Backend Development',
        'skills.database': 'Database Management',
        'skills.tools': 'Tools & Technologies',

        // Experience Section
        'experience.title': 'Pengalaman',
        'experience.current': 'Saat Ini',
        'experience.adira_finance.company': 'Adira Finance',
        'experience.adira_finance.role': 'Software Developer',
        'experience.adira_finance.date': 'Februari 2023 - Sekarang',
        'experience.adira_finance.description.1': 'Bertanggung jawab penuh atas siklus hidup pengembangan aplikasi, mulai dari desain dan implementasi hingga pemeliharaan.',
        'experience.adira_finance.description.2': 'Merombak dan memodernisasi sistem lama (legacy systems) menggunakan teknologi mutakhir, mentransformasi platform seperti G-NOW dan Riplay menjadi solusi yang berkinerja tinggi dan skalabel (dapat disesuaikan skalanya).',
        'experience.adira_finance.description.3': 'Mengoptimalkan dan meningkatkan kinerja sistem pada proyek-proyek seperti Enhance Pencairan Dana NDS Fase 3 dan Enhancement WMP Fase 1.',
        'experience.adira_finance.description.4': 'Berpartisipasi dalam pengembangan JATI (Jaringan Automotif Terintegrasi Interaktif) untuk mengintegrasikan layanan otomotif.',
        'experience.adira_finance.description.5': 'Bekerja dalam tim Agile untuk menangani tantangan teknis dan memastikan penyelesaian proyek tepat waktu.',

        // Portfolio Section
        'portfolio.title': 'Portofolio',
        'portfolio.view_details': 'Detail',
        'portfolio.view_code': 'Kode',

        // Contact Section
        'contact.title': 'Kontak',
        'contact.subtitle': 'Mari berkolaborasi dan ciptakan sesuatu yang luar biasa',
        'contact.description': 'Hubungi saya! Saya siap untuk membahas kolaborasi proyek dan peluang karir baru. Silakan menghubungi saya melalui tautan-tautan berikut.',
        'contact.name': 'Nama',
        'contact.email': 'Email',
        'contact.message': 'Pesan',
        'contact.send': 'Kirim Pesan',
        'contact.social': 'Atau hubungi saya melalui',

        // Project Details
        'project.overview': 'Ringkasan Proyek',
        'project.features': 'Fitur Utama',
        'project.challenge': 'Tantangan',
        'project.solution': 'Solusi',
        'project.tech_stack': 'Teknologi',
        'project.role': 'Peran & Tanggung Jawab',
        'project.responsibilities': 'Tanggung Jawab:',
        'project.links': 'Tautan',
        'project.live_demo': 'Demo Langsung',
        'project.view_code': 'Lihat Kode',
        'project.back_to_portfolio': 'Kembali ke Portofolio',
        'project.design_process': 'Proses Desain',
        'project.figma_design': 'Desain Figma',
        'project.screenshots': 'Screenshot Proyek',

        // Project Translations
        'project.wmp_gnow.title': 'WMP GNOW',
        'project.wmp_gnow.description': 'Workflow Marketing Proposal (WMP) merupakan sebuah perjanjian antara Adira dan Dealer terkait batasan pricing dan terkait komisi yang akan diberikan terhadap recipient Dealer.',
        'project.wmp_gnow.full_description': 'Workflow Marketing Proposal (WMP) merupakan sebuah perjanjian antara Adira dan Dealer terkait batasan pricing dan terkait komisi yang akan diberikan terhadap recipient Dealer.',
        'project.wmp_gnow.role': 'Full-Stack Developer',
        'project.wmp_gnow.challenge': 'Aplikasi ini memiliki kompleksitas tinggi dengan multiple user roles (Administrator, RSM, Branch Manager, Director, dll) yang memerlukan akses berbeda ke fitur yang sama. Tantangan utama adalah membuat sistem yang dapat menangani workflow approval yang kompleks, manajemen proposal dengan berbagai tipe (Regular, Appreciation, Deviation), dan sistem pricing yang dinamis dengan konfigurasi yang berbeda untuk setiap role.',
        'project.wmp_gnow.solution': 'Saya mengimplementasikan arsitektur full-stack dengan frontend Vue.js dan backend Node.js yang terintegrasi. Di frontend, saya menggunakan Pinia store yang terpisah untuk setiap domain (proposal, pricing, scheme, auth) dengan state management yang independen. Untuk backend, saya mengembangkan RESTful API dengan arsitektur microservices yang mendukung multiple aplikasi. Sistem scheduler menggunakan cron jobs untuk automated tasks seperti backup data, generate reports, dan sync data. Untuk role-based access, saya membuat middleware backend yang memvalidasi JWT token dan akses berdasarkan role user. Sistem real-time notification menggunakan WebSocket untuk memberikan update langsung kepada user. Database optimization dengan indexing dan caching menggunakan Redis untuk meningkatkan performa.',

        'project.wmp_gnow.responsibilities.1': 'Mengimplementasikan Design System dari UI/UX, sehingga tampilan aplikasi yang mudah digunakan dan responsif di berbagai perangkat',
        'project.wmp_gnow.responsibilities.2': 'Mengembangkan backend API dengan arsitektur microservices untuk mendukung multiple aplikasi',
        'project.wmp_gnow.responsibilities.3': 'Membuat sistem scheduler untuk automated tasks dan background processing',
        'project.wmp_gnow.responsibilities.4': 'Mengimplementasikan sistem login dan kontrol akses berdasarkan jabatan dengan JWT authentication',
        'project.wmp_gnow.responsibilities.5': 'Mengoptimalkan kecepatan aplikasi agar loading lebih cepat dengan caching dan database optimization',
        'project.wmp_gnow.responsibilities.6': 'Membuat sistem notifikasi real-time untuk mengingatkan user tentang tugas yang perlu diselesaikan',
        'project.wmp_gnow.responsibilities.7': 'Mengembangkan reusable services yang dapat digunakan oleh aplikasi lain dalam ekosistem',
        'project.wmp_gnow.responsibilities.8': 'Mengimplementasikan sistem backup otomatis dan data synchronization',
        'project.wmp_gnow.responsibilities.9': 'Membuat fitur export data ke Excel untuk keperluan reporting dengan background processing',
        'project.wmp_gnow.responsibilities.10': 'Mengintegrasikan dengan external APIs dan third-party services',

        'project.wmp_gnow.features.1': 'Sistem pembuatan proposal yang mudah dengan panduan step-by-step',
        'project.wmp_gnow.features.2': 'Dashboard yang menampilkan status proposal secara real-time',
        'project.wmp_gnow.features.3': 'Sistem approval yang dapat disesuaikan dengan struktur organisasi',
        'project.wmp_gnow.features.4': 'Fitur upload dokumen pendukung dengan drag & drop',
        'project.wmp_gnow.features.5': 'Sistem notifikasi real-time yang mengingatkan user tentang tugas yang perlu diselesaikan',
        'project.wmp_gnow.features.6': 'Fitur pencarian dan filter untuk memudahkan pencarian data',
        'project.wmp_gnow.features.7': 'Export data ke Excel untuk keperluan laporan dengan background processing',
        'project.wmp_gnow.features.8': 'Sistem backup otomatis dengan scheduler untuk mencegah kehilangan data',
        'project.wmp_gnow.features.9': 'RESTful API dengan arsitektur microservices untuk multiple aplikasi',
        'project.wmp_gnow.features.10': 'Sistem scheduler untuk automated tasks dan background processing',
        'project.wmp_gnow.features.11': 'Reusable services yang dapat digunakan oleh aplikasi lain',
        'project.wmp_gnow.features.12': 'JWT authentication dengan role-based access control',
        'project.wmp_gnow.features.13': 'Database optimization dengan caching menggunakan Redis',
        'project.wmp_gnow.features.14': 'WebSocket integration untuk real-time updates',
        'project.wmp_gnow.features.15': 'Tampilan yang responsif untuk desktop dan mobile',
        'project.wmp_gnow.features.16': 'Sistem offline detection untuk mencegah kehilangan data saat koneksi terputus',

        'project.wmp_gnow.technical_highlights.1': 'Arsitektur modular dengan 15+ domain stores menggunakan Pinia',
        'project.wmp_gnow.technical_highlights.2': 'Backend API dengan 30+ endpoints menggunakan Express.js',
        'project.wmp_gnow.technical_highlights.3': 'Sistem routing dengan 50+ routes dan nested navigation',
        'project.wmp_gnow.technical_highlights.4': 'Komponen reusable dengan 20+ custom components',
        'project.wmp_gnow.technical_highlights.5': 'Microservices architecture dengan 5+ independent services',
        'project.wmp_gnow.technical_highlights.6': 'Sistem scheduler dengan 10+ automated cron jobs',
        'project.wmp_gnow.technical_highlights.7': 'JWT authentication dengan role-based middleware',
        'project.wmp_gnow.technical_highlights.8': 'Database optimization dengan MongoDB indexing dan Redis caching',
        'project.wmp_gnow.technical_highlights.9': 'WebSocket implementation untuk real-time notifications',
        'project.wmp_gnow.technical_highlights.10': 'RESTful API dengan comprehensive error handling',
        'project.wmp_gnow.technical_highlights.11': 'Background processing untuk heavy tasks',
        'project.wmp_gnow.technical_highlights.12': 'Unit testing dengan Jest dan Vitest',
        'project.wmp_gnow.technical_highlights.13': 'Code quality dengan ESLint dan Prettier',
        'project.wmp_gnow.technical_highlights.14': 'Performance optimization dengan lazy loading dan caching',
        'project.wmp_gnow.technical_highlights.15': 'Security implementation dengan token-based authentication',

        'project.wmp_gnow.business_impact.1': 'Meningkatkan akurasi pricing dengan sistem validasi otomatis',
        'project.wmp_gnow.business_impact.2': 'Mengurangi error human dengan form validation yang komprehensif',
        'project.wmp_gnow.business_impact.3': 'Meningkatkan transparansi dengan real-time status tracking',
        'project.wmp_gnow.business_impact.4': 'Mengoptimalkan workflow dengan role-based access control',
        'project.wmp_gnow.business_impact.5': 'Meningkatkan user experience dengan responsive design',

        'project.riplay.title': 'Riplay',
        'project.riplay.description': 'Sebuah sistem untuk mengelola dokumen kontrak dengan tanda tangan digital dan manajemen dokumen. Peran saya melibatkan pembangunan aplikasi seluler dan API backend.',
        'project.riplay.full_description': 'Riplay adalah sistem manajemen dokumen kontrak yang inovatif yang dirancang untuk memudahkan proses penandatanganan dokumen secara digital. Platform ini menyediakan solusi end-to-end untuk manajemen dokumen kontrak, tanda tangan digital, dan workflow approval yang terstruktur. Sistem ini memungkinkan berbagai stakeholder untuk mengelola dokumen kontrak dengan efisien dan aman.',
        'project.riplay.role': 'Mobile Developer & Backend Engineer',
        'project.riplay.challenge': 'Proyek ini memiliki kompleksitas tinggi dalam mengintegrasikan multiple sistem: aplikasi mobile, backend API, database Oracle, Redis caching, dan sistem eksternal. Tantangan utama adalah membuat sistem yang dapat menangani digital signature dengan kualitas tinggi, memastikan sinkronisasi data real-time antara mobile dan backend, mengelola dokumen PDF yang besar dengan performa optimal, dan mengintegrasikan dengan sistem legacy yang sudah ada. Selain itu, perlu mempertimbangkan aspek keamanan dalam digital signature dan manajemen dokumen sensitif, serta UX yang intuitif untuk pengguna mobile.',
        'project.riplay.solution': 'Saya mengimplementasikan arsitektur hybrid dengan React Native untuk cross-platform mobile development dan Spring Boot untuk backend API yang robust. Digital signature menggunakan canvas drawing dengan konversi ke base64 untuk transmisi yang aman. PDF management menggunakan react-native-pdf dengan optimasi caching. Backend menggunakan Spring Boot dengan JPA untuk database operations dan Redis untuk session management. Sistem autentikasi menggunakan JWT dengan refresh token mechanism. Database design menggunakan Oracle dengan proper indexing untuk performa optimal. Integrasi sistem eksternal menggunakan REST API dengan proper error handling dan timeout management.',

        'project.riplay.responsibilities.1': 'Mengembangkan aplikasi mobile React Native untuk manajemen dokumen kontrak',
        'project.riplay.responsibilities.2': 'Membuat backend API dengan Spring Boot untuk layanan kontrak dan autentikasi',
        'project.riplay.responsibilities.3': 'Mengimplementasikan sistem digital signature dengan canvas drawing',
        'project.riplay.responsibilities.4': 'Mengintegrasikan PDF viewer untuk preview dan manajemen dokumen',
        'project.riplay.responsibilities.5': 'Mengembangkan sistem autentikasi JWT dengan role-based access control',
        'project.riplay.responsibilities.6': 'Membuat sistem manajemen metadata dokumen dengan Redis caching',
        'project.riplay.responsibilities.7': 'Mengintegrasikan JasperReports untuk generasi dokumen PDF',
        'project.riplay.responsibilities.8': 'Mengimplementasikan sistem pencarian kontrak berdasarkan nomor aplikasi',
        'project.riplay.responsibilities.9': 'Mengembangkan fitur manajemen cabang dan organisasi unit',
        'project.riplay.responsibilities.10': 'Membuat sistem upload dan download dokumen dengan validasi',
        'project.riplay.responsibilities.11': 'Mengintegrasikan dengan sistem eksternal (ECM, Adiraku, Maple)',
        'project.riplay.responsibilities.12': 'Mengoptimalkan performa aplikasi mobile dengan proper state management',
        'project.riplay.responsibilities.13': 'Mengimplementasikan sistem notifikasi dan error handling',
        'project.riplay.responsibilities.14': 'Membuat sistem logging dan monitoring untuk debugging',

        'project.riplay.features.1': 'Sistem login dengan autentikasi JWT dan manajemen session',
        'project.riplay.features.2': 'Pemilihan cabang dan organisasi unit untuk multi-branch support',
        'project.riplay.features.3': 'Pencarian kontrak berdasarkan nomor aplikasi dengan real-time validation',
        'project.riplay.features.4': 'Digital signature dengan canvas drawing dan konversi ke PDF',
        'project.riplay.features.5': 'PDF viewer terintegrasi untuk preview dan navigasi dokumen',
        'project.riplay.features.6': 'Sistem manajemen metadata dokumen dengan caching Redis',
        'project.riplay.features.7': 'Upload dan download dokumen dengan progress tracking',
        'project.riplay.features.8': 'Sistem notifikasi dan error handling yang komprehensif',
        'project.riplay.features.9': 'Manajemen spesimen signature untuk multiple user',
        'project.riplay.features.10': 'Integrasi dengan sistem asuransi dan pembiayaan',
        'project.riplay.features.11': 'Sistem logging dan audit trail untuk compliance',
        'project.riplay.features.12': 'Responsive design untuk berbagai ukuran layar mobile',
        'project.riplay.features.13': 'Offline capability dengan AsyncStorage untuk data caching',
        'project.riplay.features.14': 'Sistem backup dan recovery untuk dokumen penting',
        'project.riplay.features.15': 'Multi-language support untuk dokumentasi',
        'project.riplay.features.16': 'Sistem approval workflow untuk dokumen kontrak',

        'project.riplay.technical_highlights.1': 'Mobile application dengan React Native 0.63.2 dan React Navigation v5',
        'project.riplay.technical_highlights.2': 'Backend API dengan Spring Boot 2.3.3 dan Java 8',
        'project.riplay.technical_highlights.3': 'Database integration dengan Oracle menggunakan JPA/Hibernate',
        'project.riplay.technical_highlights.4': 'Redis caching untuk session management dan data optimization',
        'project.riplay.technical_highlights.5': 'Digital signature dengan react-native-signature-canvas',
        'project.riplay.technical_highlights.6': 'PDF management dengan react-native-pdf dan iText library',
        'project.riplay.technical_highlights.7': 'JasperReports integration untuk document generation',
        'project.riplay.technical_highlights.8': 'JWT authentication dengan refresh token mechanism',
        'project.riplay.technical_highlights.9': 'REST API design dengan proper error handling dan validation',
        'project.riplay.technical_highlights.10': 'Mobile state management dengan Context API dan AsyncStorage',
        'project.riplay.technical_highlights.11': 'Cross-platform development untuk Android dan iOS',

        'project.riplay.business_impact.1': 'Meningkatkan efisiensi proses kontrak dengan digitalisasi dokumen',
        'project.riplay.business_impact.2': 'Meningkatkan akurasi dan keamanan dengan digital signature',
        'project.riplay.business_impact.3': 'Mengoptimalkan resource dengan automated document management',
        'project.riplay.business_impact.4': 'Mengurangi biaya operasional dengan paperless workflow',
        'project.riplay.business_impact.5': 'Meningkatkan customer experience dengan mobile accessibility',
        'project.riplay.business_impact.6': 'Memungkinkan remote work dengan cloud-based document access',

        'project.4c_ilabs.title': '4c-ilabs',
        'project.4c_ilabs.description': 'Sebuah sistem manajemen pembelajaran komprehensif yang dirancang khusus untuk pengalaman laboratorium siswa. Fitur utamanya mencakup pelacakan kehadiran, koding Arduino secara langsung, dan sesi virtual interaktif.',
        'project.4c_ilabs.full_description': '4c-ilabs adalah platform pembelajaran laboratorium yang komprehensif yang dirancang khusus untuk pengalaman belajar mahasiswa di laboratorium. Platform ini mengatasi tantangan pembelajaran jarak jauh dengan menyediakan lingkungan virtual yang interaktif untuk eksperimen Arduino dan sesi laboratorium real-time. Sistem ini memungkinkan dosen untuk melacak kehadiran mahasiswa, memberikan instruksi coding langsung, dan memfasilitasi kolaborasi dalam sesi virtual yang mendalam.',
        'project.4c_ilabs.role': 'Frontend Developer & IoT Integration Specialist',
        'project.4c_ilabs.challenge': 'Fitur live coding Arduino melalui web browser memiliki latensi yang tinggi, sehingga kode yang diketik mahasiswa tidak langsung ter-compile dan berjalan di perangkat keras secara real-time. Hal ini mengganggu pengalaman belajar dan membuat mahasiswa frustasi karena tidak bisa melihat hasil kode mereka secara langsung.',
        'project.4c_ilabs.solution': 'Saya mengimplementasikan WebSocket untuk menciptakan koneksi dua arah yang persisten antara browser klien dan server Node.js. Ini memungkinkan pengiriman kode secara instan ke server, yang kemudian meneruskannya ke mikrokontroler, sehingga berhasil mengurangi latensi hingga di bawah 500ms dan menciptakan pengalaman coding yang mulus. Selain itu, saya juga mengoptimalkan buffer management dan implementasi queue system untuk memastikan kode dieksekusi secara berurutan.',

        'project.4c_ilabs.responsibilities.1': 'Mengembangkan platform pembelajaran laboratorium virtual',
        'project.4c_ilabs.responsibilities.2': 'Mengimplementasikan live Arduino coding melalui web browser',
        'project.4c_ilabs.responsibilities.3': 'Membuat sistem pelacakan kehadiran mahasiswa',
        'project.4c_ilabs.responsibilities.4': 'Mengembangkan sesi virtual interaktif untuk eksperimen',
        'project.4c_ilabs.responsibilities.5': 'Mengintegrasikan IoT devices dengan platform web',
        'project.4c_ilabs.responsibilities.6': 'Mengoptimalkan performa dengan WebSocket dan real-time communication',
        'project.4c_ilabs.responsibilities.7': 'Mengimplementasikan buffer management dan queue system',
        'project.4c_ilabs.responsibilities.8': 'Mengembangkan responsive design untuk berbagai device',

        'project.4c_ilabs.features.1': 'Live Arduino coding melalui web browser',
        'project.4c_ilabs.features.2': 'Sistem pelacakan kehadiran mahasiswa',
        'project.4c_ilabs.features.3': 'Sesi virtual interaktif untuk eksperimen',
        'project.4c_ilabs.features.4': 'Integrasi IoT devices dengan platform',
        'project.4c_ilabs.features.5': 'Real-time communication dengan WebSocket',
        'project.4c_ilabs.features.6': 'Buffer management dan queue system',
        'project.4c_ilabs.features.7': 'Responsive design untuk mobile dan desktop',
        'project.4c_ilabs.features.8': 'Low latency coding experience',

        'project.4c_ilabs.technical_highlights.1': 'WebSocket implementation untuk real-time communication',
        'project.4c_ilabs.technical_highlights.2': 'Node.js backend dengan IoT integration',
        'project.4c_ilabs.technical_highlights.3': 'Arduino coding melalui web browser',
        'project.4c_ilabs.technical_highlights.4': 'Buffer management optimization',
        'project.4c_ilabs.technical_highlights.5': 'Queue system untuk code execution',
        'project.4c_ilabs.technical_highlights.6': 'Low latency communication (< 500ms)',
        'project.4c_ilabs.technical_highlights.7': 'Responsive design dengan modern CSS',
        'project.4c_ilabs.technical_highlights.8': 'IoT device integration',

        'project.4c_ilabs.business_impact.1': 'Meningkatkan akses pembelajaran laboratorium jarak jauh',
        'project.4c_ilabs.business_impact.2': 'Memudahkan monitoring kehadiran mahasiswa',
        'project.4c_ilabs.business_impact.3': 'Meningkatkan interaksi virtual dalam pembelajaran',
        'project.4c_ilabs.business_impact.4': 'Mengoptimalkan pengalaman coding real-time',

        'project.basis.title': 'BASIS',
        'project.basis.description': 'Platform untuk diskusi mahasiswa dan survei. Peran saya melibatkan pembuatan antarmuka pengguna yang responsif untuk menyederhanakan manajemen item dan memfasilitasi transaksi berbasis komunitas.',
        'project.basis.full_description': 'BASIS adalah platform diskusi dan survei mahasiswa yang inovatif yang dirancang untuk memudahkan komunikasi dan kolaborasi antar mahasiswa. Platform ini menyediakan berbagai fitur seperti forum diskusi, sistem survei, dan manajemen konten yang terintegrasi. Sistem ini memungkinkan mahasiswa untuk berpartisipasi dalam diskusi akademik, mengisi survei, dan berkolaborasi dalam proyek-proyek kelompok.',
        'project.basis.role': 'Frontend Developer & UI/UX Designer',
        'project.basis.challenge': 'Membuat antarmuka yang user-friendly untuk mahasiswa dengan berbagai tingkat kemampuan teknis, serta memastikan platform dapat menangani traffic tinggi saat periode ujian atau survei besar.',
        'project.basis.solution': 'Saya mengimplementasikan responsive design dengan mobile-first approach menggunakan React.js dan Tailwind CSS. Untuk performa, saya menggunakan lazy loading dan code splitting untuk mengurangi loading time. Sistem juga dilengkapi dengan real-time notifications dan progressive web app features untuk pengalaman yang optimal di semua device.',

        'project.basis.responsibilities.1': 'Mengembangkan platform diskusi mahasiswa dengan fitur forum dan thread management',
        'project.basis.responsibilities.2': 'Membuat sistem survei online dengan berbagai tipe pertanyaan dan analisis data',
        'project.basis.responsibilities.3': 'Mengimplementasikan sistem user management dan role-based access control',
        'project.basis.responsibilities.4': 'Mengembangkan fitur real-time notifications untuk update diskusi',
        'project.basis.responsibilities.5': 'Membuat sistem voting dan polling untuk partisipasi mahasiswa',
        'project.basis.responsibilities.6': 'Mengintegrasikan sistem file sharing untuk dokumen dan materi',
        'project.basis.responsibilities.7': 'Mengoptimalkan performa dengan lazy loading dan code splitting',
        'project.basis.responsibilities.8': 'Mengimplementasikan responsive design untuk berbagai device',

        'project.basis.features.1': 'Forum diskusi dengan kategori dan sub-kategori yang terorganisir',
        'project.basis.features.2': 'Sistem survei online dengan berbagai tipe pertanyaan',
        'project.basis.features.3': 'User management dengan role-based access control',
        'project.basis.features.4': 'Real-time notifications untuk update diskusi',
        'project.basis.features.5': 'Sistem voting dan polling untuk partisipasi',
        'project.basis.features.6': 'File sharing untuk dokumen dan materi',
        'project.basis.features.7': 'Search dan filter untuk konten',
        'project.basis.features.8': 'Responsive design untuk mobile dan desktop',

        'project.basis.technical_highlights.1': 'Frontend dengan React.js dan modern JavaScript',
        'project.basis.technical_highlights.2': 'Responsive design dengan Tailwind CSS',
        'project.basis.technical_highlights.3': 'State management dengan Context API',
        'project.basis.technical_highlights.4': 'Lazy loading dan code splitting untuk performa',
        'project.basis.technical_highlights.5': 'Real-time notifications dengan WebSocket',
        'project.basis.technical_highlights.6': 'Progressive Web App features',
        'project.basis.technical_highlights.7': 'Mobile-first responsive design',
        'project.basis.technical_highlights.8': 'Optimized performance dengan caching',

        'project.basis.business_impact.1': 'Meningkatkan partisipasi mahasiswa dalam diskusi akademik',
        'project.basis.business_impact.2': 'Memudahkan pengumpulan data survei dan feedback',
        'project.basis.business_impact.3': 'Meningkatkan kolaborasi antar mahasiswa',
        'project.basis.business_impact.4': 'Mengoptimalkan proses pembelajaran online',

        'project.tukerin.title': 'Tukerin',
        'project.tukerin.description': 'Platform untuk pertukaran barang, lelang, dan donasi amal. Peran saya melibatkan pembuatan antarmuka pengguna yang responsif untuk menyederhanakan manajemen barang dan memfasilitasi transaksi berbasis komunitas.',
        'project.tukerin.full_description': 'Tukerin adalah platform inovatif yang memfasilitasi pertukaran barang, lelang, dan donasi amal dalam satu ekosistem terintegrasi. Platform ini dirancang untuk memudahkan masyarakat dalam mengelola barang-barang yang tidak terpakai, melakukan transaksi yang aman, dan berkontribusi pada kegiatan amal. Dengan fokus pada sustainability dan circular economy, Tukerin membantu mengurangi limbah dan menciptakan nilai ekonomi baru dari barang-barang yang sudah tidak digunakan.',
        'project.tukerin.role': 'Frontend Developer & UI/UX Designer',
        'project.tukerin.challenge': 'Membuat sistem bidding yang real-time dan fair untuk lelang barang, dimana banyak user bisa bid bersamaan tanpa ada konflik atau data yang hilang. Selain itu, perlu memastikan UI yang responsif di berbagai device karena target user adalah masyarakat umum yang menggunakan smartphone.',
        'project.tukerin.solution': 'Saya mengimplementasikan real-time bidding system menggunakan WebSocket dengan conflict resolution mechanism. Setiap bid akan divalidasi di server sebelum disimpan, dan menggunakan optimistic UI updates untuk memberikan feedback instant kepada user. Untuk responsivitas, saya menggunakan mobile-first approach dengan Tailwind CSS dan membuat komponen yang adaptive untuk berbagai ukuran layar. Sistem juga dilengkapi dengan notification system untuk memberitahu user tentang status bid mereka.',

        'project.tukerin.responsibilities.1': 'Mengembangkan platform pertukaran barang dengan sistem marketplace',
        'project.tukerin.responsibilities.2': 'Membuat sistem lelang real-time dengan bidding mechanism',
        'project.tukerin.responsibilities.3': 'Mengimplementasikan sistem donasi amal terintegrasi',
        'project.tukerin.responsibilities.4': 'Mengembangkan user management dan profile system',
        'project.tukerin.responsibilities.5': 'Membuat sistem payment gateway untuk transaksi',
        'project.tukerin.responsibilities.6': 'Mengimplementasikan rating dan review system',
        'project.tukerin.responsibilities.7': 'Mengoptimalkan performa dengan lazy loading dan caching',
        'project.tukerin.responsibilities.8': 'Mengembangkan responsive design untuk mobile dan desktop',

        'project.tukerin.features.1': 'Marketplace untuk pertukaran barang dengan kategori',
        'project.tukerin.features.2': 'Sistem lelang real-time dengan bidding mechanism',
        'project.tukerin.features.3': 'Platform donasi amal terintegrasi',
        'project.tukerin.features.4': 'User profile dan management system',
        'project.tukerin.features.5': 'Payment gateway untuk transaksi aman',
        'project.tukerin.features.6': 'Rating dan review system untuk kepercayaan',
        'project.tukerin.features.7': 'Search dan filter untuk barang',
        'project.tukerin.features.8': 'Responsive design untuk semua device',

        'project.tukerin.technical_highlights.1': 'Frontend dengan React.js dan modern JavaScript',
        'project.tukerin.technical_highlights.2': 'Real-time bidding dengan WebSocket',
        'project.tukerin.technical_highlights.3': 'Responsive design dengan Tailwind CSS',
        'project.tukerin.technical_highlights.4': 'State management dengan Context API',
        'project.tukerin.technical_highlights.5': 'Payment integration dengan gateway',
        'project.tukerin.technical_highlights.6': 'Mobile-first responsive design',
        'project.tukerin.technical_highlights.7': 'Optimized performance dengan caching',
        'project.tukerin.technical_highlights.8': 'Real-time notifications system',

        'project.tukerin.business_impact.1': 'Meningkatkan circular economy dan sustainability',
        'project.tukerin.business_impact.2': 'Memudahkan akses donasi amal',
        'project.tukerin.business_impact.3': 'Mengurangi limbah dengan reuse barang',
        'project.tukerin.business_impact.4': 'Menciptakan komunitas yang saling membantu',

        'project.text_summarization.title': 'Text-Summarization',
        'project.text_summarization.description': 'Mengembangkan aplikasi model bahasa berbasis AI untuk meringkas artikel berita dan teks panjang secara otomatis. Mengimplementasikan metode CLSA (Cross Latent Semantic Analysis) untuk mengekstrak informasi kunci dan menghasilkan ringkasan yang koheren.',
        'project.text_summarization.full_description': 'Text-Summarization adalah aplikasi AI yang menggunakan teknologi machine learning untuk meringkas artikel berita dan teks panjang secara otomatis. Aplikasi ini mengimplementasikan metode CLSA (Cross Latent Semantic Analysis) yang merupakan pendekatan advanced untuk mengekstrak informasi kunci dan menghasilkan ringkasan yang koheren. Platform ini sangat berguna untuk jurnalis, peneliti, dan mahasiswa yang perlu memproses informasi dalam jumlah besar dengan efisien.',
        'project.text_summarization.role': 'Full-Stack Developer & AI Engineer',
        'project.text_summarization.challenge': 'Algoritma CLSA membutuhkan komputasi yang sangat intensif untuk teks panjang, sehingga menyebabkan loading time yang sangat lama (bisa sampai 30-60 detik untuk artikel panjang). Selain itu, hasil summarization kadang tidak konsisten dan terkadang kehilangan konteks penting dari teks asli.',
        'project.text_summarization.solution': 'Saya mengoptimalkan algoritma dengan implementasi parallel processing menggunakan multiprocessing Python, dan menambahkan text chunking strategy untuk memproses teks panjang secara bertahap. Untuk meningkatkan kualitas summarization, saya mengimplementasikan semantic similarity scoring dan context preservation mechanism. Selain itu, saya menambahkan progress indicator dan background processing agar user tidak perlu menunggu di halaman yang sama. Hasilnya, loading time berkurang hingga 70% dan kualitas summarization meningkat signifikan.',

        'project.text_summarization.responsibilities.1': 'Mengembangkan aplikasi AI untuk text summarization menggunakan Python',
        'project.text_summarization.responsibilities.2': 'Mengimplementasikan algoritma CLSA (Cross Latent Semantic Analysis)',
        'project.text_summarization.responsibilities.3': 'Mengoptimalkan performa dengan parallel processing dan multiprocessing',
        'project.text_summarization.responsibilities.4': 'Mengembangkan text chunking strategy untuk teks panjang',
        'project.text_summarization.responsibilities.5': 'Mengimplementasikan semantic similarity scoring',
        'project.text_summarization.responsibilities.6': 'Membuat context preservation mechanism',
        'project.text_summarization.responsibilities.7': 'Mengembangkan progress indicator dan background processing',
        'project.text_summarization.responsibilities.8': 'Mengoptimalkan loading time dan kualitas output',

        'project.text_summarization.features.1': 'Automatic text summarization untuk artikel berita',
        'project.text_summarization.features.2': 'CLSA algorithm untuk ekstraksi informasi kunci',
        'project.text_summarization.features.3': 'Parallel processing untuk performa optimal',
        'project.text_summarization.features.4': 'Text chunking untuk teks panjang',
        'project.text_summarization.features.5': 'Semantic similarity scoring',
        'project.text_summarization.features.6': 'Context preservation mechanism',
        'project.text_summarization.features.7': 'Progress indicator untuk user experience',
        'project.text_summarization.features.8': 'Background processing untuk efisiensi',

        'project.text_summarization.technical_highlights.1': 'Python dengan machine learning libraries',
        'project.text_summarization.technical_highlights.2': 'CLSA algorithm implementation',
        'project.text_summarization.technical_highlights.3': 'Parallel processing dengan multiprocessing',
        'project.text_summarization.technical_highlights.4': 'Text chunking strategy',
        'project.text_summarization.technical_highlights.5': 'Semantic similarity algorithms',
        'project.text_summarization.technical_highlights.6': 'Context preservation techniques',
        'project.text_summarization.technical_highlights.7': 'Performance optimization',
        'project.text_summarization.technical_highlights.8': 'Background processing implementation',

        'project.text_summarization.business_impact.1': 'Meningkatkan efisiensi pemrosesan informasi',
        'project.text_summarization.business_impact.2': 'Mengurangi waktu untuk memahami konten panjang',
        'project.text_summarization.business_impact.3': 'Meningkatkan produktivitas jurnalis dan peneliti',
        'project.text_summarization.business_impact.4': 'Memudahkan akses informasi kunci',

        // Common
        'common.loading': 'Memuat...',
        'common.error': 'Terjadi kesalahan',
        'common.success': 'Berhasil',
        'common.close': 'Tutup',
        'common.back': 'Kembali',
      },
      en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Hello, I am',
        'hero.name': 'Arfan Dwi Sukmajaya',
        'hero.title': 'Full-Stack Developer',
        'hero.description': 'Hi, I’m Arfan Dwi Sukmajaya. I’m a Fullstack Developer who loves turning ideas into high-quality, scalable web applications. With hands-on experience in both frontend and backend development, I create solutions that are not just functional, but also fast, reliable, and user-friendly.',
        'hero.cta': 'Let\'s Collaborate',

        // About Section
        'about.title': 'About Me',
        'about.description': 'I am a Full-Stack Developer with experience in developing modern web applications using various cutting-edge technologies.',
        'about.tag': 'it is me',
        'about.journey': 'My journey into the tech world began with a simple curiosity about how things work, and it quickly evolved into a passion for building intuitive and impactful digital experiences. As a Full-Stack Developer, I believe that great code is not just about functionality—it is about creating a seamless and delightful user experience. I constantly strive to merge beautiful design with optimal performance, ensuring every project I build is not only visually stunning but also works flawlessly.',
        'about.thinking': 'Thinking',
        'about.design': 'Design',
        'about.execution': 'Execution',

        // Skills Section
        'skills.title': 'Skills',
        'skills.frontend': 'Frontend Development',
        'skills.backend': 'Backend Development',
        'skills.database': 'Database Management',
        'skills.tools': 'Tools & Technologies',

        // Experience Section
        'experience.title': 'Experience',
        'experience.current': 'Current',
        'experience.adira_finance.company': 'Adira Finance',
        'experience.adira_finance.role': 'Software Developer',
        'experience.adira_finance.date': 'February 2023 - Now',
        'experience.adira_finance.description.1': 'Fully responsible for the application development lifecycle, from design and implementation to maintenance.',
        'experience.adira_finance.description.2': 'Revamped and modernized legacy systems using cutting-edge technologies, transforming platforms like G-NOW and Riplay into high-performance, scalable solutions.',
        'experience.adira_finance.description.3': 'Optimized and improved system performance on projects such as Enhance Pencairan Dana NDS Fase 3 and Enhancement WMP Fase 1.',
        'experience.adira_finance.description.4': 'Participated in the development of JATI (Jaringan Automotif Terintegrasi Interaktif) to integrate automotive services.',
        'experience.adira_finance.description.5': 'Worked within an Agile team to address technical challenges and ensure timely project completion.',

        // Portfolio Section
        'portfolio.title': 'Portfolio',
        'portfolio.view_details': 'View Details',
        'portfolio.view_code': 'View Code',

        // Contact Section
        'contact.title': 'Contact',
        'contact.subtitle': 'Let\'s collaborate and create something amazing',
        'contact.description': 'Let\'s connect! I am open to new project collaborations and job opportunities. You can reach me through the links below.',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Send Message',
        'contact.social': 'Or reach me through',

        // Project Details
        'project.overview': 'Project Overview',
        'project.features': 'Key Features',
        'project.challenge': 'Challenge',
        'project.solution': 'Solution',
        'project.tech_stack': 'Tech Stack',
        'project.role': 'My Role & Responsibilities',
        'project.responsibilities': 'Responsibilities:',
        'project.links': 'Links',
        'project.live_demo': 'Live Demo',
        'project.view_code': 'View Code',
        'project.back_to_portfolio': 'Back to Portfolio',
        'project.design_process': 'Design Process',
        'project.figma_design': 'Figma Design',
        'project.screenshots': 'Project Screenshots',

        // Project Translations
        'project.wmp_gnow.title': 'WMP GNOW',
        'project.wmp_gnow.description': 'The Workflow Marketing Proposal (WMP) constitutes an agreement between Adira and a Dealer, stipulating the boundaries for pricing and the commission that will be granted to the recipient dealer.',
        'project.wmp_gnow.full_description': 'The Workflow Marketing Proposal (WMP) constitutes an agreement between Adira and a Dealer, stipulating the boundaries for pricing and the commission that will be granted to the recipient dealer.',
        'project.wmp_gnow.role': 'Full-Stack Developer',
        'project.wmp_gnow.challenge': 'This application has high complexity with multiple user roles (Administrator, RSM, Branch Manager, Director, etc.) that require different access to the same features. The main challenge is creating a system that can handle complex approval workflows, proposal management with various types (Regular, Appreciation, Deviation), and dynamic pricing systems with different configurations for each role.',
        'project.wmp_gnow.solution': 'I implemented a full-stack architecture with integrated Vue.js frontend and Node.js backend. In the frontend, I used separate Pinia stores for each domain (proposal, pricing, scheme, auth) with independent state management. For the backend, I developed RESTful APIs with microservices architecture that supports multiple applications. The scheduler system uses cron jobs for automated tasks such as data backup, report generation, and data synchronization. For role-based access, I created backend middleware that validates JWT tokens and access based on user roles. The real-time notification system uses WebSocket to provide direct updates to users. Database optimization with indexing and Redis caching to improve performance.',

        'project.wmp_gnow.responsibilities.1': 'Implemented Design System from UI/UX, resulting in an application interface that is user-friendly and responsive across various devices.',
        'project.wmp_gnow.responsibilities.2': 'Developed backend APIs with a microservices architecture to support multiple applications.',
        'project.wmp_gnow.responsibilities.3': 'Created a scheduler system for automated tasks and background processing.',
        'project.wmp_gnow.responsibilities.4': 'Implemented a login system and role-based access control using JWT authentication.',
        'project.wmp_gnow.responsibilities.5': 'Optimized application speed for faster loading times using caching and database optimization.',
        'project.wmp_gnow.responsibilities.6': 'Built a real-time notification system to remind users about pending tasks.',
        'project.wmp_gnow.responsibilities.7': 'Developed reusable services that can be utilized by other applications within the ecosystem.',
        'project.wmp_gnow.responsibilities.8': 'Implemented an automated backup and data synchronization system.',
        'project.wmp_gnow.responsibilities.9': 'Created an export data feature to Excel for reporting purposes with background processing.',
        'project.wmp_gnow.responsibilities.10': 'Integrated with external APIs and third-party services.',

        'project.wmp_gnow.features.1': 'Easy proposal creation system with step-by-step guidance.',
        'project.wmp_gnow.features.2': 'Dashboard displaying real-time proposal status.',
        'project.wmp_gnow.features.3': 'Customizable approval system based on the organizational structure.',
        'project.wmp_gnow.features.4': 'Support document upload feature with drag & drop functionality.',
        'project.wmp_gnow.features.5': 'Real-time notification system to remind users about pending tasks.',
        'project.wmp_gnow.features.6': 'Search and filter features to facilitate data retrieval.',
        'project.wmp_gnow.features.7': 'Data export to Excel for reporting purposes with background processing.',
        'project.wmp_gnow.features.8': 'Automated backup system with a scheduler to prevent data loss.',
        'project.wmp_gnow.features.9': 'RESTful API with microservices architecture for multiple applications.',
        'project.wmp_gnow.features.10': 'Scheduler system for automated tasks and background processing.',
        'project.wmp_gnow.features.11': 'Reusable services that can be used by other applications.',
        'project.wmp_gnow.features.12': 'JWT authentication with role-based access control.',
        'project.wmp_gnow.features.13': 'Database optimization with Redis caching.',
        'project.wmp_gnow.features.14': 'WebSocket integration for real-time updates.',
        'project.wmp_gnow.features.15': 'Responsive interface for both desktop and mobile.',
        'project.wmp_gnow.features.16': 'Offline detection system to prevent data loss during connection interruptions.',

        'project.wmp_gnow.technical_highlights.1': 'Modular architecture with 15+ domain stores using Pinia.',
        'project.wmp_gnow.technical_highlights.2': 'Backend API with 30+ endpoints using Express.js.',
        'project.wmp_gnow.technical_highlights.3': 'Routing system with 50+ routes and nested navigation.',
        'project.wmp_gnow.technical_highlights.4': 'Reusable components with 20+ custom components.',
        'project.wmp_gnow.technical_highlights.5': 'Microservices architecture with 5+ independent services.',
        'project.wmp_gnow.technical_highlights.6': 'Scheduler system with 10+ automated cron jobs.',
        'project.wmp_gnow.technical_highlights.7': 'JWT authentication with role-based middleware.',
        'project.wmp_gnow.technical_highlights.8': 'Database optimization using MongoDB indexing and Redis caching.',
        'project.wmp_gnow.technical_highlights.9': 'WebSocket implementation for real-time notifications.',
        'project.wmp_gnow.technical_highlights.10': 'RESTful API with comprehensive error handling.',
        'project.wmp_gnow.technical_highlights.11': 'Background processing for heavy tasks.',
        'project.wmp_gnow.technical_highlights.12': 'Unit testing with Jest and Vitest.',
        'project.wmp_gnow.technical_highlights.13': 'Code quality with ESLint and Prettier.',
        'project.wmp_gnow.technical_highlights.14': 'Performance optimization with lazy loading and caching.',
        'project.wmp_gnow.technical_highlights.15': 'Security implementation with token-based authentication.',

        'project.wmp_gnow.business_impact.1': 'Increased pricing accuracy with an automated validation system.',
        'project.wmp_gnow.business_impact.2': 'Reduced human error with comprehensive form validation.',
        'project.wmp_gnow.business_impact.3': 'Enhanced transparency with real-time status tracking.',
        'project.wmp_gnow.business_impact.4': 'Optimized workflow with role-based access control.',
        'project.wmp_gnow.business_impact.5': 'Improved user experience with responsive design.',

        'project.riplay.title': 'Riplay',
        'project.riplay.description': 'A system for managing contract documents with digital signature and document management. My role involved building the mobile application and backend API.',
        'project.riplay.full_description': 'Riplay is an innovative contract document management system designed to facilitate digital document signing processes. This platform provides end-to-end solutions for contract document management, digital signatures, and structured approval workflows. The system enables various stakeholders to manage contract documents efficiently and securely.',
        'project.riplay.role': 'Mobile Developer & Backend Engineer',
        'project.riplay.challenge': 'The project involved high complexity in integrating multiple systems: a mobile application, backend API, Oracle database, Redis caching, and external systems. The main challenges were creating a system capable of high-quality digital signatures, ensuring real-time data synchronization between mobile and backend, managing large PDF documents with optimal performance, and integrating with existing legacy systems. Furthermore, security aspects for digital signatures and sensitive document management, as well as an intuitive UX for mobile users, had to be considered.',
        'project.riplay.solution': 'I implemented a hybrid architecture using React Native for cross-platform mobile development and Spring Boot for a robust backend API. Digital signatures utilized canvas drawing with conversion to base64 for secure transmission. PDF management was handled using react-native-pdf with caching optimization. The backend leveraged Spring Boot with JPA for database operations and Redis for session management. The authentication system employed JWT with a refresh token mechanism. The database design used Oracle with proper indexing for optimal performance. External system integration was done via REST API with proper error handling and timeout management.',

        'project.riplay.responsibilities.1': 'Developed a React Native mobile application for contract document management.',
        'project.riplay.responsibilities.2': 'Created a Spring Boot backend API for contract services and authentication.',
        'project.riplay.responsibilities.3': 'Implemented a digital signature system using canvas drawing.',
        'project.riplay.responsibilities.4': 'Integrated a PDF viewer for document preview and management.',
        'project.riplay.responsibilities.5': 'Developed a JWT authentication system with role-based access control.',
        'project.riplay.responsibilities.6': 'Built a document metadata management system with Redis caching.',
        'project.riplay.responsibilities.7': 'Integrated JasperReports for PDF document generation.',
        'project.riplay.responsibilities.8': 'Implemented a contract search system based on application number.',
        'project.riplay.responsibilities.9': 'Developed features for branch and organizational unit management.',
        'project.riplay.responsibilities.10': 'Created a document upload and download system with validation.',
        'project.riplay.responsibilities.11': 'Integrated with external systems (ECM, Adiraku, Maple).',
        'project.riplay.responsibilities.12': 'Optimized mobile application performance with proper state management.',
        'project.riplay.responsibilities.13': 'Implemented a notification system and comprehensive error handling.',
        'project.riplay.responsibilities.14': 'Built a logging and monitoring system for debugging.',

        'project.riplay.features.1': 'Login system with JWT authentication and session management.',
        'project.riplay.features.2': 'Branch and organizational unit selection for multi-branch support.',
        'project.riplay.features.3': 'Contract search based on application number with real-time validation.',
        'project.riplay.features.4': 'Digital signature with canvas drawing and conversion to PDF.',
        'project.riplay.features.5': 'Integrated PDF viewer for document preview and navigation.',
        'project.riplay.features.6': 'Document metadata management system with Redis caching.',
        'project.riplay.features.7': 'Document upload and download with progress tracking.',
        'project.riplay.features.8': 'Comprehensive notification and error handling system.',
        'project.riplay.features.9': 'Specimen signature management for multiple users.',
        'project.riplay.features.10': 'Integration with insurance and financing systems.',
        'project.riplay.features.11': 'Logging and audit trail system for compliance.',
        'project.riplay.features.12': 'Responsive design for various mobile screen sizes.',
        'project.riplay.features.13': 'Offline capability using AsyncStorage for data caching.',
        'project.riplay.features.14': 'Backup and recovery system for critical documents.',
        'project.riplay.features.15': 'Multi-language support for documentation.',
        'project.riplay.features.16': 'Approval workflow system for contract documents.',

        'project.riplay.technical_highlights.1': 'Mobile application with React Native 0.63.2 and React Navigation v5.',
        'project.riplay.technical_highlights.2': 'Backend API with Spring Boot 2.3.3 and Java 8.',
        'project.riplay.technical_highlights.3': 'Database integration with Oracle using JPA/Hibernate.',
        'project.riplay.technical_highlights.4': 'Redis caching for session management and data optimization.',
        'project.riplay.technical_highlights.5': 'Digital signature using react-native-signature-canvas.',
        'project.riplay.technical_highlights.6': 'PDF management with react-native-pdf and iText library.',
        'project.riplay.technical_highlights.7': 'JasperReports integration for document generation.',
        'project.riplay.technical_highlights.8': 'JWT authentication with refresh token mechanism.',
        'project.riplay.technical_highlights.9': 'REST API design with proper error handling and validation.',
        'project.riplay.technical_highlights.10': 'Mobile state management with Context API and AsyncStorage.',
        'project.riplay.technical_highlights.11': 'Cross-platform development for Android and iOS.',

        'project.riplay.business_impact.1': 'Increased contract process efficiency through document digitalization.',
        'project.riplay.business_impact.2': 'Enhanced accuracy and security with digital signature.',
        'project.riplay.business_impact.3': 'Optimized resources with automated document management.',
        'project.riplay.business_impact.4': 'Reduced operational costs with a paperless workflow.',
        'project.riplay.business_impact.5': 'Improved customer experience with mobile accessibility.',
        'project.riplay.business_impact.6': 'Enabled remote work with cloud-based document access.',

        'project.4c_ilabs.title': '4c-ilabs',
        'project.4c_ilabs.description': 'A comprehensive learning management system tailored for student lab experiences. Key features include attendance tracking, live Arduino coding, and interactive virtual sessions.',
        'project.4c_ilabs.full_description': '4c-ilabs is a comprehensive laboratory learning platform specifically designed for student laboratory learning experiences. This platform addresses distance learning challenges by providing an interactive virtual environment for Arduino experiments and real-time laboratory sessions. The system enables lecturers to track student attendance, provide direct coding instructions, and facilitate collaboration in in-depth virtual sessions.',
        'project.4c_ilabs.role': 'Frontend Developer & IoT Integration Specialist',
        'project.4c_ilabs.challenge': 'The live Arduino coding feature through web browsers has high latency, so code typed by students is not immediately compiled and runs on hardware in real-time. This disrupts the learning experience and frustrates students because they cannot see their code results immediately.',
        'project.4c_ilabs.solution': 'I implemented WebSocket to create a persistent two-way connection between client browsers and Node.js servers. This enables instant code transmission to the server, which then forwards it to microcontrollers, successfully reducing latency to below 500ms and creating a smooth coding experience. Additionally, I also optimized buffer management and implemented a queue system to ensure code execution in order.',

        'project.4c_ilabs.responsibilities.1': 'Developed virtual laboratory learning platform',
        'project.4c_ilabs.responsibilities.2': 'Implemented live Arduino coding through web browser',
        'project.4c_ilabs.responsibilities.3': 'Created student attendance tracking system',
        'project.4c_ilabs.responsibilities.4': 'Developed interactive virtual sessions for experiments',
        'project.4c_ilabs.responsibilities.5': 'Integrated IoT devices with web platform',
        'project.4c_ilabs.responsibilities.6': 'Optimized performance with WebSocket and real-time communication',
        'project.4c_ilabs.responsibilities.7': 'Implemented buffer management and queue system',
        'project.4c_ilabs.responsibilities.8': 'Developed responsive design for various devices',

        'project.4c_ilabs.features.1': 'Live Arduino coding through web browser',
        'project.4c_ilabs.features.2': 'Student attendance tracking system',
        'project.4c_ilabs.features.3': 'Interactive virtual sessions for experiments',
        'project.4c_ilabs.features.4': 'IoT device integration with platform',
        'project.4c_ilabs.features.5': 'Real-time communication with WebSocket',
        'project.4c_ilabs.features.6': 'Buffer management and queue system',
        'project.4c_ilabs.features.7': 'Responsive design for mobile and desktop',
        'project.4c_ilabs.features.8': 'Low latency coding experience',

        'project.4c_ilabs.technical_highlights.1': 'WebSocket implementation for real-time communication',
        'project.4c_ilabs.technical_highlights.2': 'Node.js backend with IoT integration',
        'project.4c_ilabs.technical_highlights.3': 'Arduino coding through web browser',
        'project.4c_ilabs.technical_highlights.4': 'Buffer management optimization',
        'project.4c_ilabs.technical_highlights.5': 'Queue system for code execution',
        'project.4c_ilabs.technical_highlights.6': 'Low latency communication (< 500ms)',
        'project.4c_ilabs.technical_highlights.7': 'Responsive design with modern CSS',
        'project.4c_ilabs.technical_highlights.8': 'IoT device integration',

        'project.4c_ilabs.business_impact.1': 'Enhanced access to remote laboratory learning',
        'project.4c_ilabs.business_impact.2': 'Facilitated student attendance monitoring',
        'project.4c_ilabs.business_impact.3': 'Improved virtual interaction in learning',
        'project.4c_ilabs.business_impact.4': 'Optimized real-time coding experience',

        'project.basis.title': 'BASIS',
        'project.basis.description': 'A platform for student discussion and surveys. My role involved building a responsive user interface to simplify item management and facilitate community-based transactions.',
        'project.basis.full_description': 'BASIS is an innovative student discussion and survey platform designed to facilitate communication and collaboration among students. This platform provides various features such as discussion forums, survey systems, and integrated content management. The system enables students to participate in academic discussions, fill out surveys, and collaborate on group projects.',
        'project.basis.role': 'Frontend Developer & UI/UX Designer',
        'project.basis.challenge': 'Creating a user-friendly interface for students with various technical skill levels, and ensuring the platform can handle high traffic during exam periods or large surveys.',
        'project.basis.solution': 'I implemented responsive design with a mobile-first approach using React.js and Tailwind CSS. For performance, I used lazy loading and code splitting to reduce loading time. The system is also equipped with real-time notifications and progressive web app features for optimal experience across all devices.',

        'project.basis.responsibilities.1': 'Developed a student discussion platform with forum and thread management features',
        'project.basis.responsibilities.2': 'Created an online survey system with various question types and data analysis',
        'project.basis.responsibilities.3': 'Implemented user management system with role-based access control',
        'project.basis.responsibilities.4': 'Developed real-time notifications for discussion updates',
        'project.basis.responsibilities.5': 'Created voting and polling system for student participation',
        'project.basis.responsibilities.6': 'Integrated file sharing system for documents and materials',
        'project.basis.responsibilities.7': 'Optimized performance with lazy loading and code splitting',
        'project.basis.responsibilities.8': 'Implemented responsive design for various devices',

        'project.basis.features.1': 'Discussion forum with organized categories and sub-categories',
        'project.basis.features.2': 'Online survey system with various question types',
        'project.basis.features.3': 'User management with role-based access control',
        'project.basis.features.4': 'Real-time notifications for discussion updates',
        'project.basis.features.5': 'Voting and polling system for participation',
        'project.basis.features.6': 'File sharing for documents and materials',
        'project.basis.features.7': 'Search and filter for content',
        'project.basis.features.8': 'Responsive design for mobile and desktop',

        'project.basis.technical_highlights.1': 'Frontend with React.js and modern JavaScript',
        'project.basis.technical_highlights.2': 'Responsive design with Tailwind CSS',
        'project.basis.technical_highlights.3': 'State management with Context API',
        'project.basis.technical_highlights.4': 'Lazy loading and code splitting for performance',
        'project.basis.technical_highlights.5': 'Real-time notifications with WebSocket',
        'project.basis.technical_highlights.6': 'Progressive Web App features',
        'project.basis.technical_highlights.7': 'Mobile-first responsive design',
        'project.basis.technical_highlights.8': 'Optimized performance with caching',

        'project.basis.business_impact.1': 'Increased student participation in academic discussions',
        'project.basis.business_impact.2': 'Facilitated data collection for surveys and feedback',
        'project.basis.business_impact.3': 'Enhanced collaboration among students',
        'project.basis.business_impact.4': 'Optimized online learning processes',

        'project.tukerin.title': 'Tukerin',
        'project.tukerin.description': 'A platform for item exchange, auctions, and charitable donations. My role involved building the responsive user interface to simplify item management and facilitate community-based transactions.',
        'project.tukerin.full_description': 'Tukerin is an innovative platform that facilitates item exchange, auctions, and charitable donations in one integrated ecosystem. This platform is designed to make it easier for the community to manage unused items, conduct secure transactions, and contribute to charitable activities. With a focus on sustainability and circular economy, Tukerin helps reduce waste and create new economic value from unused items.',
        'project.tukerin.role': 'Frontend Developer & UI/UX Designer',
        'project.tukerin.challenge': 'Creating a real-time and fair bidding system for item auctions, where many users can bid simultaneously without conflicts or data loss. Additionally, ensuring responsive UI across various devices because the target users are the general public who use smartphones.',
        'project.tukerin.solution': 'I implemented a real-time bidding system using WebSocket with conflict resolution mechanisms. Each bid is validated on the server before being saved, and uses optimistic UI updates to provide instant feedback to users. For responsiveness, I used a mobile-first approach with Tailwind CSS and created adaptive components for various screen sizes. The system is also equipped with a notification system to inform users about their bid status.',

        'project.tukerin.responsibilities.1': 'Developed item exchange platform with marketplace system',
        'project.tukerin.responsibilities.2': 'Created real-time auction system with bidding mechanism',
        'project.tukerin.responsibilities.3': 'Implemented integrated charitable donation system',
        'project.tukerin.responsibilities.4': 'Developed user management and profile system',
        'project.tukerin.responsibilities.5': 'Created payment gateway system for transactions',
        'project.tukerin.responsibilities.6': 'Implemented rating and review system',
        'project.tukerin.responsibilities.7': 'Optimized performance with lazy loading and caching',
        'project.tukerin.responsibilities.8': 'Developed responsive design for mobile and desktop',

        'project.tukerin.features.1': 'Marketplace for item exchange with categories',
        'project.tukerin.features.2': 'Real-time auction system with bidding mechanism',
        'project.tukerin.features.3': 'Integrated charitable donation platform',
        'project.tukerin.features.4': 'User profile and management system',
        'project.tukerin.features.5': 'Payment gateway for secure transactions',
        'project.tukerin.features.6': 'Rating and review system for trust',
        'project.tukerin.features.7': 'Search and filter for items',
        'project.tukerin.features.8': 'Responsive design for all devices',

        'project.tukerin.technical_highlights.1': 'Frontend with React.js and modern JavaScript',
        'project.tukerin.technical_highlights.2': 'Real-time bidding with WebSocket',
        'project.tukerin.technical_highlights.3': 'Responsive design with Tailwind CSS',
        'project.tukerin.technical_highlights.4': 'State management with Context API',
        'project.tukerin.technical_highlights.5': 'Payment integration with gateway',
        'project.tukerin.technical_highlights.6': 'Mobile-first responsive design',
        'project.tukerin.technical_highlights.7': 'Optimized performance with caching',
        'project.tukerin.technical_highlights.8': 'Real-time notifications system',

        'project.tukerin.business_impact.1': 'Enhanced circular economy and sustainability',
        'project.tukerin.business_impact.2': 'Facilitated access to charitable donations',
        'project.tukerin.business_impact.3': 'Reduced waste through item reuse',
        'project.tukerin.business_impact.4': 'Created a supportive community',

        'project.text_summarization.title': 'Text-Summarization',
        'project.text_summarization.description': 'Developed an AI-based language model application to automatically summarize news articles and long-form texts. Implemented the CLSA (Cross Latent Semantic Analysis) method to extract key information and generate coherent summaries.',
        'project.text_summarization.full_description': 'Text-Summarization is an AI application that uses machine learning technology to automatically summarize news articles and long-form texts. This application implements the CLSA (Cross Latent Semantic Analysis) method, which is an advanced approach for extracting key information and generating coherent summaries. This platform is very useful for journalists, researchers, and students who need to process large amounts of information efficiently.',
        'project.text_summarization.role': 'Full-Stack Developer & AI Engineer',
        'project.text_summarization.challenge': 'The CLSA algorithm requires very intensive computation for long texts, causing very long loading times (can reach 30-60 seconds for long articles). Additionally, summarization results are sometimes inconsistent and sometimes lose important context from the original text.',
        'project.text_summarization.solution': 'I optimized the algorithm by implementing parallel processing using Python multiprocessing, and added text chunking strategy to process long texts in stages. To improve summarization quality, I implemented semantic similarity scoring and context preservation mechanisms. Additionally, I added progress indicators and background processing so users don\'t have to wait on the same page. The result is a 70% reduction in loading time and significantly improved summarization quality.',

        'project.text_summarization.responsibilities.1': 'Developed AI application for text summarization using Python',
        'project.text_summarization.responsibilities.2': 'Implemented CLSA (Cross Latent Semantic Analysis) algorithm',
        'project.text_summarization.responsibilities.3': 'Optimized performance with parallel processing and multiprocessing',
        'project.text_summarization.responsibilities.4': 'Developed text chunking strategy for long texts',
        'project.text_summarization.responsibilities.5': 'Implemented semantic similarity scoring',
        'project.text_summarization.responsibilities.6': 'Created context preservation mechanism',
        'project.text_summarization.responsibilities.7': 'Developed progress indicator and background processing',
        'project.text_summarization.responsibilities.8': 'Optimized loading time and output quality',

        'project.text_summarization.features.1': 'Automatic text summarization for news articles',
        'project.text_summarization.features.2': 'CLSA algorithm for key information extraction',
        'project.text_summarization.features.3': 'Parallel processing for optimal performance',
        'project.text_summarization.features.4': 'Text chunking for long texts',
        'project.text_summarization.features.5': 'Semantic similarity scoring',
        'project.text_summarization.features.6': 'Context preservation mechanism',
        'project.text_summarization.features.7': 'Progress indicator for user experience',
        'project.text_summarization.features.8': 'Background processing for efficiency',

        'project.text_summarization.technical_highlights.1': 'Python with machine learning libraries',
        'project.text_summarization.technical_highlights.2': 'CLSA algorithm implementation',
        'project.text_summarization.technical_highlights.3': 'Parallel processing with multiprocessing',
        'project.text_summarization.technical_highlights.4': 'Text chunking strategy',
        'project.text_summarization.technical_highlights.5': 'Semantic similarity algorithms',
        'project.text_summarization.technical_highlights.6': 'Context preservation techniques',
        'project.text_summarization.technical_highlights.7': 'Performance optimization',
        'project.text_summarization.technical_highlights.8': 'Background processing implementation',

        'project.text_summarization.business_impact.1': 'Improved information processing efficiency',
        'project.text_summarization.business_impact.2': 'Reduced time to understand long content',
        'project.text_summarization.business_impact.3': 'Increased productivity for journalists and researchers',
        'project.text_summarization.business_impact.4': 'Facilitated access to key information',

        // Common
        'common.loading': 'Loading...',
        'common.error': 'An error occurred',
        'common.success': 'Success',
        'common.close': 'Close',
        'common.back': 'Back',
      }
    };

    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
