import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () =>{
    return(
        <div className="navbaroption">
             


<nav class="navbar navbar-expand-lg navbar-light bg-Secondary">
  <div class="container-fluid " >
    <div className="navbar-brand d-flex align-items-center position-relative">
    <img src="https://iconape.com/wp-content/png_logo_vector/leetcode-logo-white-no-text.png" alt="not found" className="logoImage"/>
    <h1 className="position-absolute logoText">CheatCode</h1>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" className="optionWidth" id="navbarText">
     <div class=" collapse  navbar-collapse"   id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active customColor" aria-current="page" href="#">Premium</a>
        <a class="nav-link text-white signInBtn" href="/explore">Explore</a>
        <a class="nav-link text-white signInBtn" href="#">Product</a>
        <a class="nav-link text-white signInBtn" href="#">Developer</a>
        <a class="nav-link  signInBtn text-white signInBtn"  href="/signin" tabindex="-1" aria-disabled="true">Sign in</a>
      </div>
    </div>
    </div>
  </div>
</nav>


        </div>
    )
}

export default Navbar;