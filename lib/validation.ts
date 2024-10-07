import Joi from 'joi';

export const validateJob = (job: { title: string, description: string, experience: number }) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
    experience: Joi.number().min(1).required(),
  });

  return schema.validate(job);
};
