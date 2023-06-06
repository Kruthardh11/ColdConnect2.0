import React from 'react'

const StepFour = ({formData, setFormData}) => {

  const handleAddSkill = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: [...prevFormData.skills, ''],
    }));
  };

  const handleSkillChange = (index, value) => {
    setFormData((prevFormData) => {
      const updatedSkills = [...prevFormData.skills];
      updatedSkills[index] = value;
      return {
        ...prevFormData,
        skills: updatedSkills,
      };
    });
  }

  const handleRemoveSkill = (index) => {
    const skills = [...formData.skills];
    skills.splice(index, 1);
    setFormData({ ...formData, skills });
  };

  const renderSkills = () => {
    return formData.skills.map((skill, index) => (
      <div key={index} className="skill">
        <span className="skill-text">{skill}</span>
        <button className="remove-skill" onClick={() => handleRemoveSkill(index)}>
          &times;
        </button>
      </div>
    ));
  };
  return (
    <div>
      <div className="skills-input">
        <h4>Add Skills</h4>
        {formData.skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            placeholder="Skill"
            className="input-boxy"
          />
        ))}
        <button className="add-skill" onClick={handleAddSkill}>
          +
        </button>
      </div>
      <div className="skills-list">{renderSkills()}</div>
    </div>
  )
}

export default StepFour