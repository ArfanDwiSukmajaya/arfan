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
        'hero.description': 'Saya seorang Full-Stack Developer yang bersemangat dalam menciptakan solusi teknologi yang inovatif dan efisien.',
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

        // Portfolio Section
        'portfolio.title': 'Portofolio',
        'portfolio.view_details': 'Lihat Detail',
        'portfolio.view_code': 'Lihat Kode',

        // Contact Section
        'contact.title': 'Kontak',
        'contact.subtitle': 'Mari berkolaborasi dan ciptakan sesuatu yang luar biasa',
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
        'project.wmp_gnow.description': 'Platform manajemen kekayaan yang komprehensif untuk layanan keuangan dengan manajemen proposal, konfigurasi pricing, dan sistem kontrol akses multi-role.',
        'project.wmp_gnow.full_description': 'GNOW WMP adalah platform manajemen kekayaan yang komprehensif yang dirancang khusus untuk industri jasa keuangan. Platform ini menyediakan solusi end-to-end untuk manajemen proposal, konfigurasi pricing, skema produk, dan kontrol akses berbasis peran. Sistem ini memungkinkan berbagai stakeholder mulai dari Administrator, Regional Sales Manager, Branch Manager, hingga Director untuk mengelola proposal finansial dengan workflow approval yang terstruktur dan sistem keamanan yang robust.',
        'project.wmp_gnow.role': 'Full-Stack Developer',
        'project.wmp_gnow.challenge': 'Aplikasi ini memiliki kompleksitas tinggi dengan multiple user roles (Administrator, RSM, Branch Manager, Director, dll) yang memerlukan akses berbeda ke fitur yang sama. Tantangan utama adalah membuat sistem yang dapat menangani workflow approval yang kompleks, manajemen proposal dengan berbagai tipe (Regular, Appreciation, Deviation), dan sistem pricing yang dinamis dengan konfigurasi yang berbeda untuk setiap role.',
        'project.wmp_gnow.solution': 'Saya mengimplementasikan arsitektur full-stack dengan frontend Vue.js dan backend Node.js yang terintegrasi. Di frontend, saya menggunakan Pinia store yang terpisah untuk setiap domain (proposal, pricing, scheme, auth) dengan state management yang independen. Untuk backend, saya mengembangkan RESTful API dengan arsitektur microservices yang mendukung multiple aplikasi. Sistem scheduler menggunakan cron jobs untuk automated tasks seperti backup data, generate reports, dan sync data. Untuk role-based access, saya membuat middleware backend yang memvalidasi JWT token dan akses berdasarkan role user. Sistem real-time notification menggunakan WebSocket untuk memberikan update langsung kepada user. Database optimization dengan indexing dan caching menggunakan Redis untuk meningkatkan performa.',

        'project.riplay.title': 'Riplay',
        'project.riplay.description': 'Sistem untuk mengelola dokumen kontrak dengan tanda tangan digital dan manajemen dokumen. Peran saya melibatkan pembuatan aplikasi mobile dan backend API.',
        'project.riplay.full_description': 'Riplay adalah sistem manajemen dokumen kontrak yang inovatif yang dirancang untuk memudahkan proses penandatanganan dokumen secara digital. Platform ini menyediakan solusi end-to-end untuk manajemen dokumen kontrak, tanda tangan digital, dan workflow approval yang terstruktur. Sistem ini memungkinkan berbagai stakeholder untuk mengelola dokumen kontrak dengan efisien dan aman.',
        'project.riplay.role': 'Mobile Developer & Backend Engineer',
        'project.riplay.challenge': 'Membuat sistem tanda tangan digital yang aman dan dapat dipercaya, serta memastikan dokumen dapat diakses dan ditandatangani dari berbagai device mobile. Selain itu, perlu memastikan keamanan data dan integritas dokumen.',
        'project.riplay.solution': 'Saya mengimplementasikan sistem tanda tangan digital menggunakan cryptographic algorithms dan blockchain technology untuk memastikan keamanan dan integritas dokumen. Untuk mobile app, saya menggunakan React Native dengan native modules untuk performa optimal. Backend API dikembangkan dengan Node.js dan Express.js dengan sistem autentikasi yang robust. Sistem juga dilengkapi dengan audit trail untuk tracking semua aktivitas dokumen.',

        'project.4c_ilabs.title': '4c-ilabs',
        'project.4c_ilabs.description': 'Sistem manajemen pembelajaran laboratorium yang komprehensif yang dirancang khusus untuk pengalaman belajar mahasiswa di laboratorium. Fitur utama meliputi pelacakan kehadiran, live Arduino coding, dan sesi virtual interaktif.',
        'project.4c_ilabs.full_description': '4c-ilabs adalah platform pembelajaran laboratorium yang komprehensif yang dirancang khusus untuk pengalaman belajar mahasiswa di laboratorium. Platform ini mengatasi tantangan pembelajaran jarak jauh dengan menyediakan lingkungan virtual yang interaktif untuk eksperimen Arduino dan sesi laboratorium real-time. Sistem ini memungkinkan dosen untuk melacak kehadiran mahasiswa, memberikan instruksi coding langsung, dan memfasilitasi kolaborasi dalam sesi virtual yang mendalam.',
        'project.4c_ilabs.role': 'Frontend Developer & IoT Integration Specialist',
        'project.4c_ilabs.challenge': 'Fitur live coding Arduino melalui web browser memiliki latensi yang tinggi, sehingga kode yang diketik mahasiswa tidak langsung ter-compile dan berjalan di perangkat keras secara real-time. Hal ini mengganggu pengalaman belajar dan membuat mahasiswa frustasi karena tidak bisa melihat hasil kode mereka secara langsung.',
        'project.4c_ilabs.solution': 'Saya mengimplementasikan WebSocket untuk menciptakan koneksi dua arah yang persisten antara browser klien dan server Node.js. Ini memungkinkan pengiriman kode secara instan ke server, yang kemudian meneruskannya ke mikrokontroler, sehingga berhasil mengurangi latensi hingga di bawah 500ms dan menciptakan pengalaman coding yang mulus. Selain itu, saya juga mengoptimalkan buffer management dan implementasi queue system untuk memastikan kode dieksekusi secara berurutan.',

        'project.basis.title': 'BASIS',
        'project.basis.description': 'Platform untuk diskusi mahasiswa dan survei. Peran saya melibatkan pembuatan antarmuka pengguna yang responsif untuk menyederhanakan manajemen item dan memfasilitasi transaksi berbasis komunitas.',
        'project.basis.full_description': 'BASIS adalah platform diskusi dan survei mahasiswa yang inovatif yang dirancang untuk memudahkan komunikasi dan kolaborasi antar mahasiswa. Platform ini menyediakan berbagai fitur seperti forum diskusi, sistem survei, dan manajemen konten yang terintegrasi. Sistem ini memungkinkan mahasiswa untuk berpartisipasi dalam diskusi akademik, mengisi survei, dan berkolaborasi dalam proyek-proyek kelompok.',
        'project.basis.role': 'Frontend Developer & UI/UX Designer',
        'project.basis.challenge': 'Membuat antarmuka yang user-friendly untuk mahasiswa dengan berbagai tingkat kemampuan teknis, serta memastikan platform dapat menangani traffic tinggi saat periode ujian atau survei besar.',
        'project.basis.solution': 'Saya mengimplementasikan responsive design dengan mobile-first approach menggunakan React.js dan Tailwind CSS. Untuk performa, saya menggunakan lazy loading dan code splitting untuk mengurangi loading time. Sistem juga dilengkapi dengan real-time notifications dan progressive web app features untuk pengalaman yang optimal di semua device.',

        'project.tukerin.title': 'Tukerin',
        'project.tukerin.description': 'Platform untuk pertukaran barang, lelang, dan donasi amal. Peran saya melibatkan pembuatan antarmuka pengguna yang responsif untuk menyederhanakan manajemen barang dan memfasilitasi transaksi berbasis komunitas.',
        'project.tukerin.full_description': 'Tukerin adalah platform inovatif yang memfasilitasi pertukaran barang, lelang, dan donasi amal dalam satu ekosistem terintegrasi. Platform ini dirancang untuk memudahkan masyarakat dalam mengelola barang-barang yang tidak terpakai, melakukan transaksi yang aman, dan berkontribusi pada kegiatan amal. Dengan fokus pada sustainability dan circular economy, Tukerin membantu mengurangi limbah dan menciptakan nilai ekonomi baru dari barang-barang yang sudah tidak digunakan.',
        'project.tukerin.role': 'Frontend Developer & UI/UX Designer',
        'project.tukerin.challenge': 'Membuat sistem bidding yang real-time dan fair untuk lelang barang, dimana banyak user bisa bid bersamaan tanpa ada konflik atau data yang hilang. Selain itu, perlu memastikan UI yang responsif di berbagai device karena target user adalah masyarakat umum yang menggunakan smartphone.',
        'project.tukerin.solution': 'Saya mengimplementasikan real-time bidding system menggunakan WebSocket dengan conflict resolution mechanism. Setiap bid akan divalidasi di server sebelum disimpan, dan menggunakan optimistic UI updates untuk memberikan feedback instant kepada user. Untuk responsivitas, saya menggunakan mobile-first approach dengan Tailwind CSS dan membuat komponen yang adaptive untuk berbagai ukuran layar. Sistem juga dilengkapi dengan notification system untuk memberitahu user tentang status bid mereka.',

        'project.text_summarization.title': 'Text-Summarization',
        'project.text_summarization.description': 'Mengembangkan aplikasi model bahasa berbasis AI untuk meringkas artikel berita dan teks panjang secara otomatis. Mengimplementasikan metode CLSA (Cross Latent Semantic Analysis) untuk mengekstrak informasi kunci dan menghasilkan ringkasan yang koheren.',
        'project.text_summarization.full_description': 'Text-Summarization adalah aplikasi AI yang menggunakan teknologi machine learning untuk meringkas artikel berita dan teks panjang secara otomatis. Aplikasi ini mengimplementasikan metode CLSA (Cross Latent Semantic Analysis) yang merupakan pendekatan advanced untuk mengekstrak informasi kunci dan menghasilkan ringkasan yang koheren. Platform ini sangat berguna untuk jurnalis, peneliti, dan mahasiswa yang perlu memproses informasi dalam jumlah besar dengan efisien.',
        'project.text_summarization.role': 'Full-Stack Developer & AI Engineer',
        'project.text_summarization.challenge': 'Algoritma CLSA membutuhkan komputasi yang sangat intensif untuk teks panjang, sehingga menyebabkan loading time yang sangat lama (bisa sampai 30-60 detik untuk artikel panjang). Selain itu, hasil summarization kadang tidak konsisten dan terkadang kehilangan konteks penting dari teks asli.',
        'project.text_summarization.solution': 'Saya mengoptimalkan algoritma dengan implementasi parallel processing menggunakan multiprocessing Python, dan menambahkan text chunking strategy untuk memproses teks panjang secara bertahap. Untuk meningkatkan kualitas summarization, saya mengimplementasikan semantic similarity scoring dan context preservation mechanism. Selain itu, saya menambahkan progress indicator dan background processing agar user tidak perlu menunggu di halaman yang sama. Hasilnya, loading time berkurang hingga 70% dan kualitas summarization meningkat signifikan.',

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
        'hero.description': 'I am a passionate Full-Stack Developer dedicated to creating innovative and efficient technological solutions.',
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

        // Portfolio Section
        'portfolio.title': 'Portfolio',
        'portfolio.view_details': 'View Details',
        'portfolio.view_code': 'View Code',

        // Contact Section
        'contact.title': 'Contact',
        'contact.subtitle': 'Let\'s collaborate and create something amazing',
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
        'project.wmp_gnow.description': 'A comprehensive wealth management platform for financial services with proposal management, pricing configuration, and multi-role access control system.',
        'project.wmp_gnow.full_description': 'GNOW WMP is a comprehensive wealth management platform specifically designed for the financial services industry. This platform provides end-to-end solutions for proposal management, pricing configuration, product schemes, and role-based access control. The system enables various stakeholders from Administrators, Regional Sales Managers, Branch Managers, to Directors to manage financial proposals with structured approval workflows and robust security systems.',
        'project.wmp_gnow.role': 'Full-Stack Developer',
        'project.wmp_gnow.challenge': 'This application has high complexity with multiple user roles (Administrator, RSM, Branch Manager, Director, etc.) that require different access to the same features. The main challenge is creating a system that can handle complex approval workflows, proposal management with various types (Regular, Appreciation, Deviation), and dynamic pricing systems with different configurations for each role.',
        'project.wmp_gnow.solution': 'I implemented a full-stack architecture with integrated Vue.js frontend and Node.js backend. In the frontend, I used separate Pinia stores for each domain (proposal, pricing, scheme, auth) with independent state management. For the backend, I developed RESTful APIs with microservices architecture that supports multiple applications. The scheduler system uses cron jobs for automated tasks such as data backup, report generation, and data synchronization. For role-based access, I created backend middleware that validates JWT tokens and access based on user roles. The real-time notification system uses WebSocket to provide direct updates to users. Database optimization with indexing and Redis caching to improve performance.',

        'project.riplay.title': 'Riplay',
        'project.riplay.description': 'A system for managing contract documents with digital signature and document management. My role involved building the mobile application and backend API.',
        'project.riplay.full_description': 'Riplay is an innovative contract document management system designed to facilitate digital document signing processes. This platform provides end-to-end solutions for contract document management, digital signatures, and structured approval workflows. The system enables various stakeholders to manage contract documents efficiently and securely.',
        'project.riplay.role': 'Mobile Developer & Backend Engineer',
        'project.riplay.challenge': 'Creating a secure and trustworthy digital signature system, and ensuring documents can be accessed and signed from various mobile devices. Additionally, ensuring data security and document integrity.',
        'project.riplay.solution': 'I implemented a digital signature system using cryptographic algorithms and blockchain technology to ensure document security and integrity. For the mobile app, I used React Native with native modules for optimal performance. The backend API was developed with Node.js and Express.js with a robust authentication system. The system is also equipped with an audit trail for tracking all document activities.',

        'project.4c_ilabs.title': '4c-ilabs',
        'project.4c_ilabs.description': 'A comprehensive learning management system tailored for student lab experiences. Key features include attendance tracking, live Arduino coding, and interactive virtual sessions.',
        'project.4c_ilabs.full_description': '4c-ilabs is a comprehensive laboratory learning platform specifically designed for student laboratory learning experiences. This platform addresses distance learning challenges by providing an interactive virtual environment for Arduino experiments and real-time laboratory sessions. The system enables lecturers to track student attendance, provide direct coding instructions, and facilitate collaboration in in-depth virtual sessions.',
        'project.4c_ilabs.role': 'Frontend Developer & IoT Integration Specialist',
        'project.4c_ilabs.challenge': 'The live Arduino coding feature through web browsers has high latency, so code typed by students is not immediately compiled and runs on hardware in real-time. This disrupts the learning experience and frustrates students because they cannot see their code results immediately.',
        'project.4c_ilabs.solution': 'I implemented WebSocket to create a persistent two-way connection between client browsers and Node.js servers. This enables instant code transmission to the server, which then forwards it to microcontrollers, successfully reducing latency to below 500ms and creating a smooth coding experience. Additionally, I also optimized buffer management and implemented a queue system to ensure code execution in order.',

        'project.basis.title': 'BASIS',
        'project.basis.description': 'A platform for student discussion and surveys. My role involved building a responsive user interface to simplify item management and facilitate community-based transactions.',
        'project.basis.full_description': 'BASIS is an innovative student discussion and survey platform designed to facilitate communication and collaboration among students. This platform provides various features such as discussion forums, survey systems, and integrated content management. The system enables students to participate in academic discussions, fill out surveys, and collaborate on group projects.',
        'project.basis.role': 'Frontend Developer & UI/UX Designer',
        'project.basis.challenge': 'Creating a user-friendly interface for students with various technical skill levels, and ensuring the platform can handle high traffic during exam periods or large surveys.',
        'project.basis.solution': 'I implemented responsive design with a mobile-first approach using React.js and Tailwind CSS. For performance, I used lazy loading and code splitting to reduce loading time. The system is also equipped with real-time notifications and progressive web app features for optimal experience across all devices.',

        'project.tukerin.title': 'Tukerin',
        'project.tukerin.description': 'A platform for item exchange, auctions, and charitable donations. My role involved building the responsive user interface to simplify item management and facilitate community-based transactions.',
        'project.tukerin.full_description': 'Tukerin is an innovative platform that facilitates item exchange, auctions, and charitable donations in one integrated ecosystem. This platform is designed to make it easier for the community to manage unused items, conduct secure transactions, and contribute to charitable activities. With a focus on sustainability and circular economy, Tukerin helps reduce waste and create new economic value from unused items.',
        'project.tukerin.role': 'Frontend Developer & UI/UX Designer',
        'project.tukerin.challenge': 'Creating a real-time and fair bidding system for item auctions, where many users can bid simultaneously without conflicts or data loss. Additionally, ensuring responsive UI across various devices because the target users are the general public who use smartphones.',
        'project.tukerin.solution': 'I implemented a real-time bidding system using WebSocket with conflict resolution mechanisms. Each bid is validated on the server before being saved, and uses optimistic UI updates to provide instant feedback to users. For responsiveness, I used a mobile-first approach with Tailwind CSS and created adaptive components for various screen sizes. The system is also equipped with a notification system to inform users about their bid status.',

        'project.text_summarization.title': 'Text-Summarization',
        'project.text_summarization.description': 'Developed an AI-based language model application to automatically summarize news articles and long-form texts. Implemented the CLSA (Cross Latent Semantic Analysis) method to extract key information and generate coherent summaries.',
        'project.text_summarization.full_description': 'Text-Summarization is an AI application that uses machine learning technology to automatically summarize news articles and long-form texts. This application implements the CLSA (Cross Latent Semantic Analysis) method, which is an advanced approach for extracting key information and generating coherent summaries. This platform is very useful for journalists, researchers, and students who need to process large amounts of information efficiently.',
        'project.text_summarization.role': 'Full-Stack Developer & AI Engineer',
        'project.text_summarization.challenge': 'The CLSA algorithm requires very intensive computation for long texts, causing very long loading times (can reach 30-60 seconds for long articles). Additionally, summarization results are sometimes inconsistent and sometimes lose important context from the original text.',
        'project.text_summarization.solution': 'I optimized the algorithm by implementing parallel processing using Python multiprocessing, and added text chunking strategy to process long texts in stages. To improve summarization quality, I implemented semantic similarity scoring and context preservation mechanisms. Additionally, I added progress indicators and background processing so users don\'t have to wait on the same page. The result is a 70% reduction in loading time and significantly improved summarization quality.',

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
