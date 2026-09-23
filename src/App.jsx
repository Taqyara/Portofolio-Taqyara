import React, { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Dynamically add Bootstrap 5 CSS
    const bootstrapCss = document.createElement('link');
    bootstrapCss.rel = 'stylesheet';
    bootstrapCss.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCss);

    // Dynamically add Bootstrap Icons
    const bootstrapIcons = document.createElement('link');
    bootstrapIcons.rel = 'stylesheet';
    bootstrapIcons.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';
    document.head.appendChild(bootstrapIcons);

    // Track scroll for navbar dynamic blur/shadow
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(bootstrapCss)) document.head.removeChild(bootstrapCss);
      if (document.head.contains(bootstrapIcons)) document.head.removeChild(bootstrapIcons);
    };
  }, []);

  const stats = [
    { label: 'Tahun Pengalaman', count: '3+' },
    { label: 'Projek Selesai', count: '25+' },
    { label: 'Klien Puas', count: '18+' },
    { label: 'Sertifikasi', count: '10+' }
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'bi-window-stack',
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'HTML5 / CSS3 / Tailwind / Bootstrap', level: 95 },
        { name: 'JavaScript (ES6+) / TypeScript', level: 85 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      icon: 'bi-server',
      skills: [
        { name: 'Node.js / Express', level: 88 },
        { name: 'Laravel / PHP', level: 80 },
        { name: 'RESTful API / GraphQL', level: 85 },
        { name: 'PostgreSQL / MongoDB / MySQL', level: 82 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: 'bi-tools',
      skills: [
        { name: 'Git / GitHub / GitLab', level: 92 },
        { name: 'Docker / Containerization', level: 70 },
        { name: 'Figma / UI/UX Design', level: 80 },
        { name: 'Vercel / AWS Cloud', level: 78 }
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Lokavent',
      category: 'Web App',
      image: '/public/Lokavent.jpeg',
      description: 'Aplikasi dashboard manajemen analitik toko online modern dengan visualisasi data interaktif.',
      tech: ['React', 'Tailwind CSS', 'Chart.js', 'Node.js'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Top Up Game',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
      description: 'Aplikasi kolaborasi tim waktu nyata dengan papan Kanban dan pengingat otomatis.',
      tech: ['Vue.js', 'Firebase', 'Bootstrap 5'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Website Portofolio Interaktif',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'Website portofolio pribadi modern dengan animasi halus dan dukungan tema gelap/terang.',
      tech: ['React', 'Bootstrap 5', 'CSS Modules'],
      demoUrl: '#',
      githubUrl: '#'
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'} style={{ fontFamily: "'Inter', sans-serif", transition: 'all 0.3s ease' }}>
      {/* Custom Styles Injector */}
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
        }
        .glass-card {
          background: ${darkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.8)'};
          backdrop-filter: blur(12px);
          border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'};
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
        }
        .nav-link-custom {
          color: ${darkMode ? '#cbd5e1' : '#475569'};
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link-custom:hover {
          color: #6366f1;
        }
      `}</style>

      {}
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? (darkMode ? 'bg-dark border-bottom border-secondary shadow' : 'bg-white border-bottom shadow-sm') : 'bg-transparent'}`} style={{ transition: 'all 0.3s ease' }}>
        <div className="container py-1">
          <a className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="#home">
            <span className="p-2 gradient-bg text-white rounded-3 me-2 d-inline-flex justify-content-center align-items-center" style={{ width: '36px', height: '36px' }}>R</span>
            <span className={darkMode ? 'text-white' : 'text-dark'}>Taqyara<span className="gradient-text">.dev</span></span>
          </a>
          
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <i className={`bi bi-list fs-1 ${darkMode ? 'text-light' : 'text-dark'}`}></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-lg-3">
              <li className="nav-item"><a className="nav-link nav-link-custom" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link nav-link-custom" href="#about">Tentang</a></li>
              <li className="nav-item"><a className="nav-link nav-link-custom" href="#skills">Keahlian</a></li>
              <li className="nav-item"><a className="nav-link nav-link-custom" href="#projects">Portofolio</a></li>
              <li className="nav-item"><a className="nav-link nav-link-custom" href="#contact">Kontak</a></li>
              <li className="nav-item mt-2 mt-lg-0">
                <button 
                  onClick={() => setDarkMode(!darkMode)} 
                  className={`btn rounded-circle p-2 d-flex align-items-center justify-content-center ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
                  style={{ width: '40px', height: '40px' }}
                  title="Ubah Tema"
                >
                  <i className={`bi ${darkMode ? 'bi-sun-fill text-warning' : 'bi-moon-stars-fill text-primary'}`}></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {}
      <section id="home" className="min-vh-100 d-flex align-items-center pt-5">
        <div className="container py-5">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7 text-center text-lg-start">
              <span className="badge gradient-bg px-3 py-2 rounded-pill mb-3 text-white fs-6 shadow-sm">
                👋 Selamat Datang di Portofolio Saya
              </span>
              <h1 className="display-3 fw-extrabold mb-3 lh-sm">
                Halo, Saya <span className="gradient-text">Taqyara Zashil Chriswanto</span>
              </h1>
              <h2 className="h3 mb-4 text-secondary fw-semibold">
                Web Developer
              </h2>
              <p className={`lead mb-4 max-w-xl ${darkMode ? 'text-light opacity-75' : 'text-secondary'}`}>
                Saya berdedikasi membangun aplikasi web yang cepat, responsif, dan interaktif dengan desain UI/UX yang modern serta arsitektur kode yang bersih.
              </p>
              
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
                <a href="#projects" className="btn btn-primary gradient-bg border-0 px-4 py-3 rounded-3 fw-semibold shadow">
                  <i className="bi bi-briefcase me-2"></i>Lihat Project
                </a>
                <a href="#contact" className={`btn px-4 py-3 rounded-3 fw-semibold ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}>
                  <i className="bi bi-envelope me-2"></i>Hubungi Saya
                </a>
              </div>

              {/* Social links */}
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start pt-2">
                {['github', 'linkedin', 'twitter', 'instagram'].map((platform) => (
                  <a 
                    key={platform} 
                    href={`https://${platform}.com`} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`btn rounded-circle d-flex align-items-center justify-content-center ${darkMode ? 'btn-outline-secondary text-light' : 'btn-light border'}`}
                    style={{ width: '44px', height: '44px' }}
                  >
                    <i className={`bi bi-${platform} fs-5`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div className="position-relative d-inline-block">
                {/* Glow ring effect */}
                <div 
                  className="position-absolute top-50 start-50 translate-middle gradient-bg rounded-circle opacity-25 blur-3xl"
                  style={{ width: '320px', height: '320px', filter: 'blur(40px)', zIndex: 0 }}
                ></div>
                <img 
                  src="/public/pasfoto.jpg" 
                  alt="Profile Avatar" 
                  className="img-fluid rounded-circle border border-4 border-white shadow-lg position-relative"
                  style={{ width: '300px', height: '300px', objectFit: 'cover', zIndex: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="about" className={`py-5 ${darkMode ? 'bg-black bg-opacity-25' : 'bg-white'}`}>
        <div className="container py-5">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Tentang <span className="gradient-text">Saya</span></h2>
            <div className="mx-auto gradient-bg rounded" style={{ width: '60px', height: '4px' }}></div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-4 p-md-5 rounded-4 glass-card shadow-sm text-center">
              <h3 className="h4 fw-bold mb-3">Mengubah Ide Menjadi Solusi Digital</h3>
                <p className={darkMode ? 'text-light opacity-75' : 'text-secondary'}>
                  Saya seorang Software Engineer berdomisili di Indonesia dengan pengalaman lebih 1 tahun dalam merancang dan mengembangkan aplikasi berkinerja tinggi.
                </p>
                <p className={darkMode ? 'text-light opacity-75' : 'text-secondary'}>
                  Fokus utama saya adalah menciptakan pengalaman pengguna yang mulus dan arsitektur backend yang dapat ditingkatkan (scalable). Selalu antusias mempelajari teknologi baru dan berkolaborasi dalam tim inovatif.
                </p>
                <div className="mt-4 pt-2">
                  <a href="#contact" className="btn gradient-bg text-white fw-semibold px-4 py-2 rounded-3">
                    <i className="bi bi-download me-2"></i>Unduh CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="skills" className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Keahlian <span className="gradient-text">Teknis</span></h2>
              <p className={darkMode ? 'text-light opacity-75' : 'text-secondary'}>Teknologi dan tools yang biasa saya gunakan dalam pengerjaan projek</p>
              <div className="mx-auto gradient-bg rounded" style={{ width: '60px', height: '4px' }}></div>
            </div>
          </div>

          <div className="row g-4">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="p-4 rounded-4 glass-card card-hover h-100">
                  <div className="d-flex align-items-center mb-4">
                    <div className="p-3 gradient-bg rounded-3 text-white me-3 d-flex align-items-center justify-content-center">
                      <i className={`bi ${cat.icon} fs-4`}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">{cat.title}</h3>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-semibold small">{skill.name}</span>
                          <span className="small gradient-text fw-bold">{skill.level}%</span>
                        </div>
                        <div className="progress" style={{ height: '8px', backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : '#e9ecef' }}>
                          <div 
                            className="progress-bar gradient-bg rounded" 
                            role="progressbar" 
                            style={{ width: `${skill.level}%` }}
                            aria-valuenow={skill.level} 
                            aria-valuemin="0" 
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="projects" className={`py-5 ${darkMode ? 'bg-black bg-opacity-25' : 'bg-white'}`}>
        <div className="container py-5">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Portofolio <span className="gradient-text">Projek</span></h2>
              <p className={darkMode ? 'text-light opacity-75' : 'text-secondary'}>Kumpulan hasil karya dan projek yang pernah saya selesaikan</p>
              <div className="mx-auto gradient-bg rounded mb-4" style={{ width: '60px', height: '4px' }}></div>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
            {['All', 'Web App', 'Mobile', 'AI & ML'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`btn px-4 py-2 rounded-pill fw-medium transition-all ${
                  activeFilter === filter
                    ? 'btn-primary gradient-bg border-0 text-white shadow'
                    : darkMode
                    ? 'btn-outline-light opacity-75'
                    : 'btn-outline-dark'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div className="rounded-4 glass-card card-hover overflow-hidden h-100 d-flex flex-column">
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 end-0 m-3 badge gradient-bg text-white shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="h5 fw-bold mb-2">{project.title}</h3>
                    <p className={`small mb-3 flex-grow-1 ${darkMode ? 'text-light opacity-75' : 'text-secondary'}`}>
                      {project.description}
                    </p>

                    <div className="d-flex flex-wrap gap-1 mb-4">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className={`badge ${darkMode ? 'bg-secondary bg-opacity-50 text-light' : 'bg-light text-dark border'}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2 pt-2 border-top border-secondary border-opacity-25">
                      <a href={project.demoUrl} className="btn btn-sm gradient-bg text-white flex-grow-1 fw-semibold rounded-2">
                        <i className="bi bi-box-arrow-up-right me-1"></i> Demo
                      </a>
                      <a href={project.githubUrl} className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} flex-grow-1 fw-semibold rounded-2`}>
                        <i className="bi bi-github me-1"></i> Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="contact" className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Hubungi <span className="gradient-text">Saya</span></h2>
              <p className={darkMode ? 'text-light opacity-75' : 'text-secondary'}>Punya ide projek menarik atau ingin berdiskusi? Jangan ragu untuk mengirim pesan!</p>
              <div className="mx-auto gradient-bg rounded" style={{ width: '60px', height: '4px' }}></div>
            </div>
          </div>

          <div className="row gy-4 justify-content-center">
            {/* Contact Details */}
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-3">
                <div className="p-4 rounded-4 glass-card d-flex align-items-center">
                  <div className="p-3 gradient-bg text-white rounded-3 me-3 fs-4 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <h4 className="h6 fw-bold mb-1">Email</h4>
                    <p className={`mb-0 small ${darkMode ? 'text-light opacity-75' : 'text-secondary'}`}>rarataqyara@gmail.com</p>
                  </div>
                </div>

                <div className="p-4 rounded-4 glass-card d-flex align-items-center">
                  <div className="p-3 gradient-bg text-white rounded-3 me-3 fs-4 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <h4 className="h6 fw-bold mb-1">Telepon / WhatsApp</h4>
                    <p className={`mb-0 small ${darkMode ? 'text-light opacity-75' : 'text-secondary'}`}>+62 899 0917 927</p>
                  </div>
                </div>

                <div className="p-4 rounded-4 glass-card d-flex align-items-center">
                  <div className="p-3 gradient-bg text-white rounded-3 me-3 fs-4 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <h4 className="h6 fw-bold mb-1">Lokasi</h4>
                    <p className={`mb-0 small ${darkMode ? 'text-light opacity-75' : 'text-secondary'}`}>Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="col-lg-7">
              <div className="p-4 p-md-5 rounded-4 glass-card">
                {formSubmitted ? (
                  <div className="alert alert-success d-flex align-items-center rounded-3 p-4" role="alert">
                    <i className="bi bi-check-circle-fill fs-3 me-3"></i>
                    <div>
                      <h4 className="h5 alert-heading mb-1 fw-bold">Pesan Terkirim!</h4>
                      <p className="mb-0">Terima kasih telah menghubungi saya. Saya akan membalas pesan Anda sesegera mungkin.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-medium">Nama Lengkap</label>
                        <input 
                          type="text" 
                          required 
                          className={`form-control p-3 rounded-3 ${darkMode ? 'bg-dark text-light border-secondary' : 'bg-light border-0'}`} 
                          placeholder="Masukkan nama"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-medium">Email Anda</label>
                        <input 
                          type="email" 
                          required 
                          className={`form-control p-3 rounded-3 ${darkMode ? 'bg-dark text-light border-secondary' : 'bg-light border-0'}`} 
                          placeholder="nama@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-medium">Pesan</label>
                        <textarea 
                          rows="4" 
                          required 
                          className={`form-control p-3 rounded-3 ${darkMode ? 'bg-dark text-light border-secondary' : 'bg-light border-0'}`} 
                          placeholder="Tuliskan pesan atau detail projek Anda..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn gradient-bg text-white fw-bold w-100 p-3 rounded-3 shadow">
                          <i className="bi bi-send me-2"></i>Kirim Pesan
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className={`py-4 border-top ${darkMode ? 'border-secondary border-opacity-25 bg-black' : 'border-light bg-light'}`}>
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-md-6 text-center text-md-start">
              <p className={`mb-0 small ${darkMode ? 'text-light opacity-50' : 'text-secondary'}`}>
                &copy; {new Date().getFullYear()} Taqyara Zashil Chriswanto. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#home" className={`small text-decoration-none ${darkMode ? 'text-light opacity-75' : 'text-secondary'}`}>Kembali ke Atas ↑</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}