import db from '../lib/db';

const jobs = [
  { title: 'Software Engineer', description: 'Develop web applications', experience: 2 },
  { title: 'Product Manager', description: 'Manage product development', experience: 5 },
  { title: 'Data Analyst', description: 'Analyze data trends', experience: 3 },
  { title: 'UX Designer', description: 'Design user experiences', experience: 4 },
  { title: 'QA Engineer', description: 'Ensure software quality', experience: 2 },
  { title: 'DevOps Engineer', description: 'Manage deployment processes', experience: 6 },
  { title: 'Business Analyst', description: 'Analyze business needs', experience: 4 },
  { title: 'Project Coordinator', description: 'Coordinate project tasks', experience: 2 },
  { title: 'Frontend Developer', description: 'Build user interfaces', experience: 3 },
  { title: 'Backend Developer', description: 'Develop server-side logic', experience: 4 },
];

const seedDatabase = async () => {
  const stmt = db.prepare('INSERT INTO jobs (title, description, experience) VALUES (?, ?, ?)');

  jobs.forEach(job => {
    stmt.run(job.title, job.description, job.experience);
  });

  console.log('Database seeded with dummy job data.');
};

seedDatabase().catch(err => console.error('Error seeding database:', err));
