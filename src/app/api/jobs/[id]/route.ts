import { NextResponse } from 'next/server';
import db from '../../../../../lib/db';

type Job = {
  id: number;
  title: string;
  description: string;
  experience: number;
};

const validateJob = (job: Partial<Job>): string | null => {
  if (!job.title || job.title.length < 3) {
    return 'Title is required and must be at least 3 characters long.';
  }
  if (!job.description || job.description.length < 5) {
    return 'Description is required and must be at least 5 characters long.';
  }
  if (typeof job.experience !== 'number' || job.experience < 1) {
    return 'Experience must be a number and at least 1.';
  }
  return null;
};

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const job = db.prepare('SELECT * FROM jobs WHERE id = ?').get(id) as Job | undefined;

  if (job) {
    return NextResponse.json(job, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Job not found' }, { status: 404 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { title, description, experience }: Partial<Job> = await req.json();

  const validationError = validateJob({ title, description, experience });
  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const stmt = db.prepare('UPDATE jobs SET title = ?, description = ?, experience = ? WHERE id = ?');
  const result = stmt.run(title, description, experience, Number(id));

  if (result.changes > 0) {
    return NextResponse.json({ id: Number(id), title, description, experience }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Job not found' }, { status: 404 });
  }
}
