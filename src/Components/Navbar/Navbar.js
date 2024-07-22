import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () =>{
    return(
        <div className="navbaroption">
                {/* <h1>Hello</h1> */}
                {/* <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid mx-auto">
    <div class="navbar-brand d-flex align-items-center position-relative">
        <img src="https://iconape.com/wp-content/png_logo_vector/leetcode-logo-white-no-text.png" alt="not found" className="logoImage"/>
        <h1 className="position-absolute logoText">CheatCode</h1>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}



{/* <nav class="navbar navbar-expand-lg navbar-light bg-Secondary d-flex gap-3">
  <div class="container-fluid d-flex justify-content-between align-items-center">
    <div className="navbar-brand d-flex align-items-center position-relative">
    <img src="https://iconape.com/wp-content/png_logo_vector/leetcode-logo-white-no-text.png" alt="not found" className="logoImage"/>
    <h1 className="position-absolute logoText">CheatCode</h1>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse  navbar-collapse d-flex  justify-content-end" className="optionWidth"  id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active customColor" aria-current="page" href="#">Premium</a>
        <a class="nav-link text-white" href="#">Explore</a>
        <a class="nav-link text-white" href="#">Product</a>
        <a class="nav-link text-white" href="#">Developer</a>
        <a class="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">Sign in</a>
      </div>
    </div>
  </div>
</nav> */}


<nav class="navbar navbar-expand-lg navbar-light bg-Secondary">
  <div class="container-fluid " >
    {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
    <div className="navbar-brand d-flex align-items-center position-relative">
    <img src="https://iconape.com/wp-content/png_logo_vector/leetcode-logo-white-no-text.png" alt="not found" className="logoImage"/>
    <h1 className="position-absolute logoText">CheatCode</h1>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" className="optionWidth" id="navbarText">
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul> */}
      {/* <span class="navbar-text"> */}
     {/* <div > */}
     <div class=" collapse  navbar-collapse"   id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active customColor" aria-current="page" href="#">Premium</a>
        <a class="nav-link text-white signInBtn" href="#">Explore</a>
        <a class="nav-link text-white signInBtn" href="#">Product</a>
        <a class="nav-link text-white signInBtn" href="#">Developer</a>
        <a class="nav-link  signInBtn text-white signInBtn"  href="#" tabindex="-1" aria-disabled="true">Sign in</a>
      </div>
    </div>
     {/* </div> */}
      {/* </span> */}
    </div>
  </div>
</nav>


        </div>
    )
}

export default Navbar;