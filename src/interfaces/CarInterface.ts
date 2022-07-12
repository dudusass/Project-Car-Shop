import { Document } from 'mongoose';
import { z } from 'zod';
import { vehicleSchema } from './VehicleInterface';

export const CarSchema = vehicleSchema.extend({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

export type Car = z.infer<typeof CarSchema>;
export interface CarDocument extends Document, Car {};