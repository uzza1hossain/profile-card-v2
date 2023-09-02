import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];
function App() {
  return (
    <div className="card">
      <Avatar imageName="jonas.jpeg" />
      <div className="data">
        <Intro
          name="Jonas Schmedtmann"
          bio="Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skillObj={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.imageName} alt={props.imageName} className="avatar" />;
}
function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill color={skill.color} skill={skill.skill} level={skill.level} />
      ))}
      {/* <Skill color={skillObj.color} skill="React" emoji="💪" />
      <Skill color="orange" skill="HTML+CSS" emoji="💪" />
      <Skill color="yellow" skill="JavaScript" emoji="💪" />
      <Skill color="red" skill="Svelte" emoji="👶" /> */}
    </div>
  );
}

function Skill({ color, skill, level }) {
  // let emoji;
  // if (level === 'beginner') {
  //   emoji = '👶';
  // } else if (level === 'intermediate') {
  //   emoji = '👍';
  // } else if (level === 'advanced') {
  //   emoji = '💪';
  // }
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
        {/* {emoji} */}
      </span>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
