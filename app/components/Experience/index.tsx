import { BsCheck2Circle } from "react-icons/bs";

import { Container, Skills, Section, Content, Skill } from "./styles";

const Experience = () => {
  return (
    <Section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <Container>
        <Skills>
          <h3>Frontend Development</h3>
          <Content>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>Vite</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>Remix</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
          </Content>
        </Skills>
        <Skills>
          <h3>Backend Development</h3>
          <Content>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>Prisma ORM</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
            <Skill>
              <BsCheck2Circle className="skill_icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </Skill>
          </Content>
        </Skills>
      </Container>
    </Section>
  );
};

export default Experience;
