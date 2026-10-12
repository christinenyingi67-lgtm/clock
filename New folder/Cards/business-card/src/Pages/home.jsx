import './home.css';

function home() {
  return (
    <div className="page">
      <div className="business-card">
        <h1>Christine Wangeci</h1>

        <h3>Web Developer</h3>

        <p>
          Creating beautiful and useful
          digital experiences.
        </p>

        <div className="contact">
          <p>Email: christine@example.com</p>
          <p>Location: Kenya</p>
        </div>

        <button onClick={() => alert('Thank you for visiting!')}>
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default home;