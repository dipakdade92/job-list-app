import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Job {
  id: number;
  title: string;
  description: string;
  experience: number;
}

interface JobsState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk<Job[]>('jobs/fetchJobs', async () => {
  const response = await fetch('/api/jobs');
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return response.json();
});

export const updateJob = createAsyncThunk<Job, { id: number; data: Omit<Job, 'id'> }>(
  'jobs/updateJob',
  async ({ id, data }) => {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to update job');
    }
    return response.json();
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.loading = false;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch jobs';
        state.loading = false;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        const index = state.jobs.findIndex(job => job.id === action.payload.id);
        if (index !== -1) {
          state.jobs[index] = action.payload; // Update the job in the list
        }
      });
  },
});

export default jobsSlice.reducer;
