import { updateJob } from '../redux/jobs/jobsSlice';
import { useAppDispatch } from '../redux/jobs/store';
import JobForm from './JobForm';

type Job = {
  id: number;
  title: string;
  description: string;
  experience: number;
};

interface EditJobModalProps {
  job: Job;
  closeModal: () => void;
}

const EditJobModal: React.FC<EditJobModalProps> = ({ job, closeModal }) => {

  const dispatch = useAppDispatch();

  const handleSubmit = async (values: { title: string; description: string; experience: number }) => {
    await dispatch(updateJob({ id: job.id, data: values }));
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-55">
      <div className="bg-white text-blue-900 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Edit Job</h2>
        <JobForm initialValues={job} onSubmit={handleSubmit} />
        <div className="flex justify-end mt-4">
          <button onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditJobModal;
