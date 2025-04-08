import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="bg-primary text-white">
    
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4">
        <a className="navbar-brand text-primary fw-bold" href="#">Software Recruitment Co.</a>

        <div className="ms-auto d-flex align-items-center mx-auto">
        
          <div className="dropdown mx-3">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Jobs 🔍
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Software Engineering</a></li>
              <li><a className="dropdown-item" href="#">DevOps</a></li>
              <li><a className="dropdown-item" href="#">Cloud</a></li>
            </ul>
          </div>

          <div className="dropdown mx-3">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Sectors 🏢
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Finance</a></li>
              <li><a className="dropdown-item" href="#">Healthcare</a></li>
              <li><a className="dropdown-item" href="#">Technology</a></li>
            </ul>
          </div>

          <div className="dropdown mx-3">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Services 🛠️
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Resume Review</a></li>
              <li><a className="dropdown-item" href="#">Interview Prep</a></li>
              <li><a className="dropdown-item" href="#">Career Coaching</a></li>
            </ul>
          </div>

          <div className="dropdown mx-3">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Resources 📚
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Blog</a></li>
              <li><a className="dropdown-item" href="#">Guides</a></li>
              <li><a className="dropdown-item" href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

       
        <div className="d-flex">
          <button className="btn btn-warning me-2">Upload CV</button>
          <button className="btn btn-orange">Contact Us</button>
        </div>
      </nav>

      <header className="hero-section container text-center text-lg-start py-5 position-relative">

<div
  className="position-absolute"
  style={{
    top: '-1px', 
    left: '-170px', 
    width: '180px', 
    height: '180px',
    backgroundColor: '#FFD700',
    borderRadius: '50%', 
    opacity: 0.6,
    transform: 'scaleY(-1)', 
    zIndex: 0,
  }}
></div>


<div
  className="position-absolute"
  style={{
    bottom: '-0px', 
    right: '-190px', 
    width: '250px', 
    height: '220px',
    backgroundColor: '#28a745',
    borderRadius: '50%', 
    opacity: 0.6,
    transform: 'scaleY(1)', 
    zIndex: 0,
  }}
></div>


<div
  className="position-absolute top-0 start-0 w-100 h-100"
  style={{
    background: 'linear-gradient(45deg, rgba(0,123,255,0.7), rgba(255,193,7,0.7))',
    zIndex: -1,
  }}
></div>


<div className="row align-items-center">
  <div className="col-lg-6">
    <h1 className="lead mb-4 text-white">Software Recruitment Specialists</h1>
    <p className="display-4 mb-4 text-white fw-bold">Elevate Your Career</p>
    <div
  className="d-flex mt-4"
  style={{
    maxWidth: '600px',
    backgroundColor: '#ffffff',
    borderRadius: '50px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  }}
>
  <input
    type="text"
    className="form-control border-0"
    placeholder="E.g. networking"
    style={{
      borderRadius: 0,
      padding: '16px 24px',
      fontSize: '16px',
      flex: 1,
    }}
  />
  <button
    className="btn"
    style={{
      backgroundColor: '#f7c948', // yellow-ish
      borderRadius: 0,
      padding: '0 28px',
      fontWeight: '500',
      fontSize: '15px',
      whiteSpace: 'nowrap',
    }}
  >
    Search jobs
  </button>
</div>

  </div>
  <div className="col-lg-6 text-center">
    <Image src="/woman-holding-laptop4.webp" width={500} height={400} alt="Professional woman" className="rounded-3 shadow-none" />
  </div>
</div>
</header>


      
      <section className="bg-white py-4 text-center">
        <div className="container">
          <h5 className="text-muted mb-4">Who we work with</h5>
          <div className="row justify-content-center align-items-center">
            <div className="col-auto mx-3"><Image src="/microsoft.jpg" alt="Microsoft" width={105} height={60} /></div>
            <div className="col-auto mx-3"><Image src="/oracle.jpg" alt="Oracle" width={100} height={30} /></div>
            <div className="col-auto mx-3"><Image src="/atlassian.jpg" alt="Atlassian" width={100} height={60} /></div>
            <div className="col-auto mx-3"><Image src="/cloudflare.jpg" alt="Cloudflare" width={100} height={100} /></div>
            <div className="col-auto mx-3"><Image src="/vmware.jpg" alt="VMware" width={100} height={70} /></div>
          </div>
        </div>
      </section>

      
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="text-primary">Latest Jobs</h2>
          <div className="row justify-content-center mt-4">
            {["warning", "primary", "danger"].map((color, index) => (
              <div key={index} className={`col-md-3 p-4 text-white bg-${color} rounded mx-2`}>
                <div className="d-flex align-items-start mb-3">
                  <span className="badge bg-white text-primary" style={{ padding: "5px 10px", fontSize: "14px", display: "flex", alignItems: "center" }}>
                    <img src="/python.jpg" alt="Python Logo" style={{ width: "20px", marginRight: "5px" }} />
                    Python
                  </span>
                </div>
                <h3 className="fw-bold">Software Engineer</h3>
                <p>📍 London</p>
                <p>💰 £65,000</p>
                <p className="text-start" style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                  Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.
                </p>
                <button className="btn btn-light text-dark mt-1" style={{ width: "220px", padding: "12px", borderRadius: "25px", fontWeight: "bold" }}>
                  View this job
                </button>
                <p className="text-start mt-2" style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                  Posted on 29/08/2023
                </p>
              </div>
            ))}
          </div>

         
          <div className="mt-4 d-flex justify-content-start gap-3">
            <button
              className="btn btn-outline-primary rounded-circle border-2 shadow-sm d-flex align-items-center justify-content-center"
              style={{ width: '55px', height: '55px', fontSize: '24px' }}
            >
              ←
            </button>
            <button
              className="btn btn-outline-primary rounded-circle border-2 shadow-sm d-flex align-items-center justify-content-center"
              style={{ width: '55px', height: '55px', fontSize: '24px' }}
            >
              →
            </button>
          </div>
        </div>
      </section>

    
      <footer className="bg-primary text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>Software Recruitment Co.</h3>
              <div className="d-flex gap-3 mt-2">
                <a href="#" className="text-white" style={{ fontSize: '24px', fontWeight: 'bold' }}>in</a>
                <a href="#" className="text-white" style={{ fontSize: '24px', fontWeight: 'bold' }}>f</a>
                <a href="#" className="text-white" style={{ fontSize: '24px' }}>📸</a>
                <a href="#" className="text-white" style={{ fontSize: '24px' }}>🕊️</a>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="fw-bold mb-1">Explore</h4>
              <p>Homepage</p>
              <p>For jobseekers</p>
              <p>For clients</p>
              <p>Our sectors</p>
              <p>Resources</p>
              <p>Contact us</p>
            </div>
            <div className="col-md-3">
              <h4 className="fw-bold mb-1">Sectors</h4>
              <p>Software Engineering</p>
              <p>DevOps</p>
              <p>Cloud</p>
              <p>Infrastructure</p>
              <p>Testing</p>
              <p>Security</p>
            </div>
            <div className="col-md-3">
              <h4 className="fw-bold mb-1">Services</h4>
              <p>Career Coaching</p>
              <p>Resume Review</p>
              <p>Job Matching</p>
              <p>Interview Preparation</p>
              <p>Mock Interview Sessions</p>
              <p>Free QnA Sessions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
