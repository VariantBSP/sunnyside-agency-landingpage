import Navbar from "./Navbar";

const App = () => {
  return ( 
    <>
    <div className="hero">
      <Navbar />
      <div>
        <h1 className="center">WE ARE CREATIVES</h1>
        <img className="small" src="images/icon-arrow-down.svg" alt="arrow" />
      </div>
    </div>
    
    
    <div className="container">
    <div className="image mobile">
        <img src="/images/mobile/image-transform.jpg" alt="egg" />
    </div>
      <div className="text">
        <div>
          <h1>Transform your brand</h1>
          <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compeling visuals that do most of the marketing for you.</p>
          <div className="box"><a href="#">LEARN MORE</a>
          <div className="line"></div></div>
        </div>
      </div>
      <div className="image desktop">
        <img src="/images/desktop/image-transform.jpg" alt="egg" />
      </div>

      <div className="image desktop">
        <img src="/images/desktop/image-stand-out.jpg" alt="egg" />
      </div>
      <div className="image mobile">
        <img src="/images/mobile/image-stand-out.jpg" alt="egg" />
      </div>
      <div className="text">
        <div>
          <h1>Stand out to the right audience</h1>
          <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places</p>
          <div className="box"><a className="red" href="#">LEARN MORE</a>
          <div className="line"></div></div>
        </div>
      </div>

      <div className="btm-image0">
        <div>
        <h1>Graphic Design</h1>
        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
        </div>
      </div>
      <div className="btm-image1">
        <div>
        <h1>Photograghy</h1>
        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
    </div>

    <div className="testimonial">
      <h2>CLIENT TESTIMONIALS</h2>

      <div className="clients">
          <div className="card">
            <img src="/images/image-emily.jpg" alt="" />
            <p>We put our trust in Sunnyside and they delivered. making sure our needs were met and deadlines were always hit.</p>
            <h3>Emily R.</h3>
            <p className="gray">Marketing Director</p>
          </div>
          <div className="card">
          <img src="/images/image-thomas.jpg" alt="" />
            <p>We put our trust in Sunnyside and they delivered. making sure our needs were met and deadlines were always hit.</p>
            <h3>Thomas S.</h3>
            <p className="gray">Chief Operating Officer</p>
          </div>
          <div className="card">
          <img src="/images/image-jennie.jpg" alt="" />
            <p>We put our trust in Sunnyside and they delivered. making sure our needs were met and deadlines were always hit.</p>
            <h3>Jennie F.</h3>
            <p className="gray">Business Owner</p>
          </div>
      </div>
  
    </div>

    <div className="foot-img">
      <img className="desktop" src="/images/desktop/image-gallery-milkbottles.jpg" alt="" />
      <img className="mobile" src="/images/mobile/image-gallery-milkbottles.jpg" alt="" />
      <img className="desktop" src="/images/desktop/image-gallery-orange.jpg" alt="" />
      <img className="mobile" src="/images/mobile/image-gallery-orange.jpg" alt="" />
      <img className="desktop" src="/images/desktop/image-gallery-cone.jpg" alt="" />
      <img className="mobile" src="/images/mobile/image-gallery-cone.jpg" alt="" />
      <img className="desktop" src="/images/desktop/image-gallery-sugarcubes.jpg" alt="" />
      <img className="mobile" src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="" />
    </div>
    

    <div className="footer">
      <img src="/images/logoCyan.svg" alt="" />
      <div className="link">
        <a>About</a>
        <a>Services</a>
        <a>Projects</a>
      </div>
      <div className="link-img">
        <img src="/images/icon-facebook.svg" alt="" />
        <img src="/images/icon-instagram.svg" alt="" />
        <img src="/images/icon-twitter.svg" alt="" />
        <img src="/images/icon-pinterest.svg" alt="" />
      </div>
    </div>
  </>
   );
}
 
export default App;