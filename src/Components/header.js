//Header Component

export function registerHeader() {

    document.getElementById("header").innerHTML = `   
        <div class="nav-container" style="background-color: #343a40 !important; width: 100%">
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ml-auto">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> 
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav d-flex justify-content-center">
                    <li class="nav-item active">
                    <a class="nav-link" href="index.html">Registration<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="featured.html">Featured</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
        `
}