"use client";
import '../styles/globals.css';
import { Provider } from 'react-redux';
import JobList from '../../components/JobList';
import store from '../../redux/jobs/store';
const Home = () => {
  return (
    <Provider store={store}>
      <JobList />
    </Provider>
  );
};
export default Home; 