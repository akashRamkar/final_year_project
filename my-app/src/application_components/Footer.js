import "./footer.css";
import "./card-style.css";
export default function Footer() {
  let footerstyle = {
    backgroundColor: "rgba(231, 221, 221, 0.2)",
    height: "35vh",
    padding: "55px 0px 0px 0px"
  }
  let back={
    backgroundColor:"rgb(59, 59, 94)",
    height: "70px",
    
  }

  return (
    <footer class="bg-light text-center text-lg-start">
      <div class="text-center" style={footerstyle}>
       

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <p className="lasttitle">
        © Final_year_project_Group_1
        </p>
        <div className="mainfooter" style={back}>
        <p className="copy">© 2022 Copyright:</p>
        </div>
      </div>
      
    </footer>
  );
}
