import { useState } from 'react';

const FillAdditionalInfo = ({ onSubmit }: { onSubmit: (info: { project: string; achievement: string }) => void }) => {
  const [project, setProject] = useState('');
  const [achievement, setAchievement] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ project, achievement });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white shadow-md rounded-lg">
      <label className="block">
        <span className="text-gray-700">Project</span>
        <input
          type="text"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          placeholder="Enter your project details"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Achievement</span>
        <input
          type="text"
          value={achievement}
          onChange={(e) => setAchievement(e.target.value)}
          placeholder="Enter your achievement details"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </label>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default FillAdditionalInfo;
