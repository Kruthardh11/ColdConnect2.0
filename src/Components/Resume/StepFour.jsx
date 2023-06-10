import React from 'react';

const StepFour = ({ formData, setFormData }) => {
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
  };

  const handleRemoveSkill = (index) => {
    const skills = [...formData.skills];
    skills.splice(index, 1);
    setFormData({ ...formData, skills });
  };

  const renderSkills = () => {
    return formData.skills.map((skill, index) => (
      <div key={index} className="card  rounded-lg p-4 mb-4">
        <input
          type="text"
          value={skill}
          onChange={(e) => handleSkillChange(index, e.target.value)}
          placeholder="Skill"
          className="input-box mb-2 w-full h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end">
          <button
            className="remove-skill bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => handleRemoveSkill(index)}
          >
            Remove
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className='sm:mx-[15%] sm:my-[5%] sm:px-[5%] bg-gray-200 shadow-xl rounded-lg py-[3%]'>
      <div className="skills-input">
        <h4 className="text-lg font-bold mb-2">Add Skills</h4>
        {renderSkills()}
        <button
          className="add-skill bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddSkill}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default StepFour;
