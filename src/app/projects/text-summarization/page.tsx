import ProjectDetail from '../../component/ProjectDetail';

const projectData = {
  title: "Text-Summarization",
  description: "Developed an AI-based language model application to automatically summarize news articles and long-form texts. Implemented the CLSA (Cross Latent Semantic Analysis) method to extract key information and generate coherent summaries.",
  fullDescription: "Text-Summarization adalah aplikasi AI yang menggunakan teknologi machine learning untuk meringkas artikel berita dan teks panjang secara otomatis. Aplikasi ini mengimplementasikan metode CLSA (Cross Latent Semantic Analysis) yang merupakan pendekatan advanced untuk mengekstrak informasi kunci dan menghasilkan ringkasan yang koheren. Platform ini sangat berguna untuk jurnalis, peneliti, dan mahasiswa yang perlu memproses informasi dalam jumlah besar dengan efisien.",
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
  role: "Full-Stack Developer & AI Engineer",
  responsibilities: [
    "Mengimplementasikan algoritma CLSA untuk text summarization",
    "Mengembangkan web interface yang user-friendly",
    "Mengoptimalkan performa algoritma untuk teks panjang",
    "Membuat sistem preprocessing text yang robust",
    "Mengintegrasikan machine learning model dengan web application",
    "Melakukan testing dan validasi hasil summarization"
  ],
  challenge: "Algoritma CLSA membutuhkan komputasi yang sangat intensif untuk teks panjang, sehingga menyebabkan loading time yang sangat lama (bisa sampai 30-60 detik untuk artikel panjang). Selain itu, hasil summarization kadang tidak konsisten dan terkadang kehilangan konteks penting dari teks asli.",
  solution: "Saya mengoptimalkan algoritma dengan implementasi parallel processing menggunakan multiprocessing Python, dan menambahkan text chunking strategy untuk memproses teks panjang secara bertahap. Untuk meningkatkan kualitas summarization, saya mengimplementasikan semantic similarity scoring dan context preservation mechanism. Selain itu, saya menambahkan progress indicator dan background processing agar user tidak perlu menunggu di halaman yang sama. Hasilnya, loading time berkurang hingga 70% dan kualitas summarization meningkat signifikan.",
  features: [
    "Automatic text summarization dengan CLSA algorithm",
    "Support untuk berbagai format teks (plain text, HTML)",
    "Adjustable summary length (short, medium, long)",
    "Real-time processing dengan progress indicator",
    "Export hasil dalam berbagai format (PDF, Word, TXT)",
    "Batch processing untuk multiple documents",
    "Quality scoring untuk hasil summarization",
    "API endpoint untuk integration dengan aplikasi lain"
  ],
  additionalScreenshots: [
    "/screenshots/text-summarization-interface.png",
    "/screenshots/text-summarization-result.png",
    "/screenshots/text-summarization-batch.png"
  ]
};

export default function TextSummarizationPage() {
  return <ProjectDetail project={projectData} />;
}
