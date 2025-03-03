const Details = () => {
    return ( 
      
      <body>
      {/* <header class="header">
        <div class="container">
          <h1 class="logo">Workout Buddy</h1>
          <nav class="nav">
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header> */}
    
      <main class="main">
        <section class="hero">
          <div class="hero-content">
            <h1>Your One Place for All Workout Planning</h1>
            <p>Say goodbye to chaos and hello to a structured fitness journey. Create personalized plans, track progress, and stay motivated—all in one app.</p>
            <a href="/know-us" class="btn-primary">Get Started</a>
          </div>
        </section>
    
        <section id="features" class="features">
          <div class="container">
            <h2>Features</h2>
            <div class="features-grid">
              <div class="feature">
                <i class="icon">💪</i>
                <h3>Personalized Plans</h3>
                <p>Get tailored workout routines that fit your goals and lifestyle.</p>
              </div>
              <div class="feature">
                <i class="icon">📊</i>
                <h3>Progress Tracking</h3>
                <p>Monitor your improvements and stay on track with our analytics tools.</p>
              </div>
              <div class="feature">
                <i class="icon">🕒</i>
                <h3>Time Optimization</h3>
                <p>Schedule your workouts effectively, no matter how busy you are.</p>
              </div>
            </div>
          </div>
        </section>
    
        <section id="about" class="about">
          <div class="container">
            <h2>About Workout Buddy</h2>
            <p>At Workout Buddy, we believe fitness is not one-size-fits-all. Our mission is to empower individuals to achieve their fitness goals through personalized, intuitive, and effective workout planning. Whether you're a beginner or an athlete, we're here to guide you every step of the way.</p>
          </div>
        </section>
      </main>
    
      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 Workout Buddy. All rights reserved.</p>
        </div>
      </footer>
    </body>

     );
}
 
export default Details;