import { z } from 'zod';

export const vehicleSchema = z.object({
  model: z.string({
    required_error: 'Model is required',
  }).min(3, { message: 'Model must be 3 or more characters long' }),

  year: z.number({
    required_error: 'Year is required',
  }).gte(1900, { message: 'Year must be greater or equal than 1900' })
    .lte(2022, { message: 'Year must be less or equal than 2022' }),

  color: z.string({
    required_error: 'Color is required',
  }).min(3, { message: 'Color must be 3 or more characters long' }),

  status: z.boolean({
    required_error: 'Status is required',
  }).optional(),

  buyValue: z.number({
    required_error: 'Value is required',
  }).int({ message: 'Value must be a number' }),

});

export type Vehicle = z.infer<typeof vehicleSchema>;