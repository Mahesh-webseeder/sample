import React from "react";

const EducationalInformation = ({
  formData,
  handleChange,
  handleAddMore,
  handleToggleVisibility,
  errors,
}) => {
  const handleHide = (index) => {
    if (index > 0) {
      const updatedEducation = [...formData.education];
      updatedEducation.splice(index, 1);
      handleChange({ target: { name: "education", value: updatedEducation } });
    } else {
      handleToggleVisibility(index);
    }
  };

  return (
    <>
      {formData.education.map((education, index) => (
        <div key={index} className="mb-4  p-4 ">
          <div className="flex justify-between items-center mb-2">
            <div>{index > 0 && (
              <button
                type="button"
                onClick={() => handleHide(index)}
                className="text-green-500 "
              >
                (Hide)
              </button>
            )}</div>
          </div>
          {education.visible && (
            <>
              <div className="flex items-center mb-2">
                <label className="block text-gray-700 w-1/4 font-bold">
                  Obtained Degree
                </label>
                <div className="w-[70%]">
                  <input
                    type="text"
                    name={`obtainedDegree-${index}`}
                    value={education.obtainedDegree}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="Obtained Degree"
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <label className="block text-gray-700 w-1/4 font-bold">
                  University
                </label>
                <div className="w-[70%]">
                  <input
                    type="text"
                    name={`university-${index}`}
                    value={education.university}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="University"
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <label className="block text-gray-700 w-1/4 font-bold">
                  CGPA
                </label>
                <div className="w-[70%]">
                  <input
                    type="text"
                    name={`cgpa-${index}`}
                    value={education.cgpa}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="CGPA"
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <label className="block text-gray-700 w-1/4 font-bold">
                  Comments
                </label>
                <div className="w-[70%]">
                  <textarea
                    name={`comments-${index}`}
                    value={education.comments}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="Comments"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
      <div className="text-left mt-4">
        {formData.education.length > 0 && (
          <button
            type="button"
            onClick={handleAddMore}
            className="text-green-500"
          >
            (Add more info)
          </button>
        )}
      </div>
    </>
  );
};

export default EducationalInformation;
