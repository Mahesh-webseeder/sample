import React from "react";

const PastExperience = ({
  formData,
  handleChange,
  handleAddMore,
  handleToggleVisibility,
  errors,
}) => {
  const handleHide = (index) => {
    if (index > 0) {
      const updatedExperience = formData.experience.map((exp, idx) =>
        idx === index ? { ...exp, hidden: true } : exp
      );
      handleChange({ target: { name: "experience", value: updatedExperience } });
    }
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = formData.experience.map((exp, idx) =>
      idx === index ? { ...exp, [name.split('-')[0]]: value } : exp
    );
    handleChange({ target: { name: "experience", value: updatedExperience } });
  };

  return (
    <>
      {formData.experience.map((experience, index) => (
        <div key={index} className="mb-4 p-4 ">
          <div className="flex justify-between items-center mb-2">
            {index > 0 && !experience.hidden && (
              <button
                type="button"
                onClick={() => handleHide(index)}
                className="text-green-500"
              >
                (Hide)
              </button>
            )}
          </div>
          {!experience.hidden && (
            <>
              <div className="flex items-center mb-2">
                <label className="block text-gray-700 w-1/4 font-bold">
                  Company Name
                </label>
                <div className="w-[70%]">
                  <input
                    type="text"
                    name={`companyName-${index}`}
                    value={experience.companyName}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <label className="block text-gray-700 w-1/4 font-bold">
                  Working Period
                </label>
                <div className="w-[70%]">
                  <input
                    type="text"
                    name={`workingPeriod-${index}`}
                    value={experience.workingPeriod}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="Working Period"
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <label className="block text-gray-700 w-1/4 font-bold">
                  Duties
                </label>
                <div className="w-[70%]">
                  <input
                    type="text"
                    name={`duties-${index}`}
                    value={experience.duties}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="Duties"
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <label className="block text-gray-700 w-1/4 font-bold">
                  Supervisor
                </label>
                <div className="w-[70%]">
                  <input
                    type="text"
                    name={`supervisor-${index}`}
                    value={experience.supervisor}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="Supervisor"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
      <div className="text-left mt-4">
        <button
          type="button"
          onClick={() => handleAddMore('experience')}
          className="text-green-500"
        >
          (Add more info)
        </button>
      </div>
    </>
  );
};

export default PastExperience;
