import SkillCard from "../components/SkillsCard";

function Skills () {
    return (
    <section className="section">
        <div className="skills">
            <div className="container">
                <h2 className="h2-title skills-title">Skills</h2>
                <h3 className="skills-subtitle">I work in such programs as</h3>
                <div className="skills-programs">
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                </div>
            </div>
        </div>
    </section>

    )
}

export default Skills;


