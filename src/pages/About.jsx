import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate()
  const navigateHomeHandler = () => { 
    navigate("/")
  }
  return (
    <section className="container">
      <p>아래 버튼을 누르면 Home으로 돌아갑니다.</p>
      <button className="home_btn" onClick={navigateHomeHandler}>Home으로가기</button>
    </section>
  );
};

export default About;
