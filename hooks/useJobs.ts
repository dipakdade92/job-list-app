import { useEffect } from 'react';
import { fetchJobs } from '../redux/jobs/jobsSlice';
import { useAppDispatch, useAppSelector } from '../redux/jobs/store';

export const useJobs = () => {
  const dispatch = useAppDispatch();
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const loading = useAppSelector((state) => state.jobs.loading);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return { jobs, loading };
};
