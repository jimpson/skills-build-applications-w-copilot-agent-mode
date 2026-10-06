import mongoose, { Schema } from 'mongoose';

const activitySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    activityType: {
      type: String,
      enum: ['Run', 'Ride', 'Swim', 'Walk', 'Strength'],
      required: true,
    },
    durationMinutes: { type: Number, required: true, min: 1 },
    distanceKm: { type: Number, min: 0 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true },
  },
  { collection: 'activities', timestamps: true },
);

export default mongoose.models.Activity ?? mongoose.model('Activity', activitySchema);
