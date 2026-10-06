import mongoose, { Schema } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { collection: 'teams', timestamps: true },
);

export default mongoose.models.Team ?? mongoose.model('Team', teamSchema);
