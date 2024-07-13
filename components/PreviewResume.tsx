interface ResumeData {
  name: string;
  headline: string;
  experience: {
    id: number;
    title: string;
    company: string;
    description: string;
  }[];
}

interface Props {
  resumeData: ResumeData;
  additionalInfo: { project: string; achievement: string };
}

const PreviewResume: React.FC<Props> = ({ resumeData, additionalInfo }) => {
  return (
    <div className="p-4 space-y-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold">Preview Resume</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{resumeData.name}</h3>
        <p className="text-gray-600">{resumeData.headline}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Experience</h4>
        {resumeData.experience.map((job) => (
          <div key={job.id} className="mt-2">
            <h5 className="font-semibold">{job.title}</h5>
            <p className="text-gray-600">{job.company}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Additional Information</h4>
        <p>
          <span className="font-semibold">Project:</span> {additionalInfo.project}
        </p>
        <p>
          <span className="font-semibold">Achievement:</span> {additionalInfo.achievement}
        </p>
      </div>
    </div>
  );
};

export default PreviewResume;
