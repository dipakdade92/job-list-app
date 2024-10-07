import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface JobFormValues {
  title: string;
  description: string;
  experience: number;
}

interface JobFormProps {
  initialValues: JobFormValues;
  onSubmit: (values: JobFormValues) => void;
}

const JobForm: React.FC<JobFormProps> = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    experience: Yup.number().required('Experience is required').min(0, 'Experience must be a positive number'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title
            </label>
            <Field
              className={`border rounded px-3 py-2 w-full ${errors.title && touched.title ? 'border-red-500' : 'border-gray-300'}`}
              type="text"
              name="title"
              id="title"
            />
            {errors.title && touched.title && <div className="text-red-500 text-sm">{errors.title}</div>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="description">
              Description
            </label>
            <Field
              className={`border rounded px-3 py-2 w-full ${errors.description && touched.description ? 'border-red-500' : 'border-gray-300'}`}
              component="textarea"
              name="description"
              id="description"
              rows={4}
            />
            {errors.description && touched.description && <div className="text-red-500 text-sm">{errors.description}</div>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="experience">
              Experience (in years)
            </label>
            <Field
              className={`border rounded px-3 py-2 w-full ${errors.experience && touched.experience ? 'border-red-500' : 'border-gray-300'}`}
              type="number"
              name="experience"
              id="experience"
            />
            {errors.experience && touched.experience && <div className="text-red-500 text-sm">{errors.experience}</div>}
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default JobForm;
