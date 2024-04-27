import { Link } from 'react-router-dom';
import '../styles/resume.css';

function Resume() {
  return (
    <div className="container flex justify-center items-center h-screen">
      <Link to="/">go back to homepage</Link>
    </div>
  );
}

export default Resume;
