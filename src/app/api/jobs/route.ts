import { NextResponse } from 'next/server';
import db from '../../../../lib/db';
import { validateJob } from '../../../../lib/validation';  // Server-side validation

type Job = {
  id: number;
  title: string;
  description: string;
  experience: number;
};

// GET All Jobs
export async function GET() {
  const jobs = db.prepare('SELECT * FROM jobs').all() as Job[];
  return NextResponse.json(jobs, { status: 200 });
}

// POST: Create a Job with validation
export async function POST(req: Request) {
  const { title, description, experience }: Job = await req.json();

  const { error } = validateJob({ title, description, experience });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const stmt = db.prepare('INSERT INTO jobs (title, description, experience) VALUES (?, ?, ?)');
  const result = stmt.run(title, description, experience);
  return NextResponse.json({ id: result.lastInsertRowid, title, description, experience }, { status: 201 });
}
