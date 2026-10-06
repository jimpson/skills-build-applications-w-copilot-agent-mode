import mongoose, { Schema } from 'mongoose';

const workoutSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
    targetAreas: [{ type: String, trim: true }],
  },
  { collection: 'workouts', timestamps: true },
);

export default mongoose.models.Workout ?? mongoose.model('Workout', workoutSchema);
