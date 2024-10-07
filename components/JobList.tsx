import { useJobs } from '../hooks/useJobs';
import { useState } from 'react';
import EditJobModal from './EditJobModal';

type Job = {
  id: number;
  title: string;
  description: string;
  experience: number;
};

const JobList = () => {
  const { jobs, loading } = useJobs();
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="h-screen py-4 px-12 bg-blue-900 text-white overflow-auto ">
      <h2 className="text-2xl text-center font-bold py-4 mb-4 uppercase">Job List</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-blue-400 uppercase ">
            <th className="border-b border-gray-200 p-4 text-lg text-center">Title</th>
            <th className="border-b border-gray-200 p-4 text-lg text-center">Description</th>
            <th className="border-b border-gray-200 p-4 text-lg text-center">Experience</th>
            <th className="border-b border-gray-200 p-4 text-lg text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <tr key={job.id} className="hover:bg-blue-300/40 text-center">
                <td className="border-b border-gray-200 px-4 py-3 text-lg">{job.title}</td>
                <td className="border-b border-gray-200 px-4 py-3 text-lg">{job.description}</td>
                <td className="border-b border-gray-200 px-4 py-3 text-lg">{job.experience} years</td>
                <td className="border-b border-gray-200 px-4 py-3 text-lg">
                  <button
                    onClick={() => setEditingJob(job)}
                    className="bg-white text-black px-4 py-2 text-base uppercase rounded hover:bg-blue-300 hover:text-white"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="border-b border-gray-200 px-4 py-3 text-lg text-center">
                No jobs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {editingJob && (
        <EditJobModal job={editingJob} closeModal={() => setEditingJob(null)} />
      )}
    </div>
  );
};

export default JobList;
