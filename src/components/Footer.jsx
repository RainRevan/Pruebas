import Facebook from "./Facebook.png";
import { Link } from "react-router-dom";
function Footer(props) {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center border-top bg-primary">
                <p class="col-md-0 mb-0 text-dark">© 2022 Hogar de paso DivAngel, Inc</p>
                <a
                    href="/"
                    class="d-flex align-items-center text-dark text-decoration-none"
                >
                    <img src={Facebook} className="newLogo" alt="logo" width="40" height="40" />

                    <span class="fs-4">
                        <Link to={"/Home"}></Link>
                    </span>
                </a>
                <ul class="nav col-md-0 justify-content-end">
                    <Link to={"/Home"}></Link>
                </ul>
            </footer>
        </div>
    );
}
export default Footer;