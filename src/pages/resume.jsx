import { Link } from 'react-router-dom';

function resume() {
  return (
    <div>
      <h1>Samuel Adu</h1>
      <Link to="">github.com/samuel-adu</Link>

      <p>
        I build aesthetically pleasing and functionally robust user-centric
        applications
      </p>

      <h2>Skills</h2>
      <p>Languages & Libraries</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>

      <p>Tools & Platforms</p>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
        <li>Figma</li>
        <li>Vercel</li>
      </ul>
    </div>
  );
}

export default resume;
