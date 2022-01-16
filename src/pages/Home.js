import { Link } from "react-router-dom";
const Home=()=>{
    return(
            <div className="home-container">
              <div className="left-info">
                    <span> WELCOME </span>
                    <span> TO </span>
                    <span> GENIEGRADZ</span>
              </div>
              <div className="right-info">
                <div className="all-tabs">
                    <Link to="/student" className="studentTab">
                        <img src="https://www.nicepng.com/png/detail/32-326591_banner-library-college-vector-graduated-student-male-student.png" 
                        alt=""></img>
                        <div className="title">Student</div></Link>
                    <Link to="/admin" className="adminTab"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNq-fhMeQRIAFfcfgPFaQDO8yTQ_SOW1-6raA_0HgiiKDJTV0TkDiojPT98h40g8T4FAk&usqp=CAU" 
                        alt=""></img>
                        <div className="title">Admin</div></Link>
                </div>
              </div>
          </div>
    )
}
export default Home;