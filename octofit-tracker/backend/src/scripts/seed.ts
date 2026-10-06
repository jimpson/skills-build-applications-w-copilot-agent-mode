import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import activity from '../models/activity.js';
import leaderboard from '../models/leaderboard.js';
import team from '../models/team.js';
import user from '../models/user.js';
import workout from '../models/workout.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  await connectDatabase();

  const ids = {
    users: {
      maya: new mongoose.Types.ObjectId('670000000000000000000001'),
      noah: new mongoose.Types.ObjectId('670000000000000000000002'),
      ava: new mongoose.Types.ObjectId('670000000000000000000003'),
    },
    teams: {
      trailblazers: new mongoose.Types.ObjectId('670000000000000000000011'),
      sunrise: new mongoose.Types.ObjectId('670000000000000000000012'),
    },
    activities: {
      maya: new mongoose.Types.ObjectId('670000000000000000000021'),
      noah: new mongoose.Types.ObjectId('670000000000000000000022'),
      ava: new mongoose.Types.ObjectId('670000000000000000000023'),
    },
    leaderboard: {
      maya: new mongoose.Types.ObjectId('670000000000000000000031'),
      noah: new mongoose.Types.ObjectId('670000000000000000000032'),
      ava: new mongoose.Types.ObjectId('670000000000000000000033'),
    },
    workouts: {
      interval: new mongoose.Types.ObjectId('670000000000000000000041'),
      mobility: new mongoose.Types.ObjectId('670000000000000000000042'),
      strength: new mongoose.Types.ObjectId('670000000000000000000043'),
    },
  };

  const users = [
    {
      _id: ids.users.maya,
      username: 'maya-chen',
      email: 'maya.chen@example.com',
      firstName: 'Maya',
      lastName: 'Chen',
      team: ids.teams.trailblazers,
    },
    {
      _id: ids.users.noah,
      username: 'noah-williams',
      email: 'noah.williams@example.com',
      firstName: 'Noah',
      lastName: 'Williams',
      team: ids.teams.trailblazers,
    },
    {
      _id: ids.users.ava,
      username: 'ava-patel',
      email: 'ava.patel@example.com',
      firstName: 'Ava',
      lastName: 'Patel',
      team: ids.teams.sunrise,
    },
  ];

  const teams = [
    {
      _id: ids.teams.trailblazers,
      name: 'Trailblazers',
      description: 'A team focused on outdoor runs and steady progress.',
      members: [ids.users.maya, ids.users.noah],
    },
    {
      _id: ids.teams.sunrise,
      name: 'Sunrise Striders',
      description: 'Early risers building healthy habits together.',
      members: [ids.users.ava],
    },
  ];

  const activities = [
    {
      _id: ids.activities.maya,
      user: ids.users.maya,
      activityType: 'Run',
      durationMinutes: 34,
      distanceKm: 5.2,
      caloriesBurned: 345,
      date: new Date('2026-10-04T07:30:00.000Z'),
    },
    {
      _id: ids.activities.noah,
      user: ids.users.noah,
      activityType: 'Ride',
      durationMinutes: 52,
      distanceKm: 18.4,
      caloriesBurned: 490,
      date: new Date('2026-10-04T08:15:00.000Z'),
    },
    {
      _id: ids.activities.ava,
      user: ids.users.ava,
      activityType: 'Walk',
      durationMinutes: 41,
      distanceKm: 3.6,
      caloriesBurned: 185,
      date: new Date('2026-10-05T06:45:00.000Z'),
    },
  ];

  const leaderboardEntries = [
    {
      _id: ids.leaderboard.maya,
      user: ids.users.maya,
      team: ids.teams.trailblazers,
      points: 860,
      rank: 1,
      period: '2026-10',
    },
    {
      _id: ids.leaderboard.noah,
      user: ids.users.noah,
      team: ids.teams.trailblazers,
      points: 740,
      rank: 2,
      period: '2026-10',
    },
    {
      _id: ids.leaderboard.ava,
      user: ids.users.ava,
      team: ids.teams.sunrise,
      points: 610,
      rank: 3,
      period: '2026-10',
    },
  ];

  const workouts = [
    {
      _id: ids.workouts.interval,
      name: 'Beginner Run Intervals',
      description: 'Alternate brisk jogging and recovery walking to build endurance.',
      type: 'Cardio',
      durationMinutes: 25,
      difficulty: 'Beginner',
      targetAreas: ['cardiovascular endurance', 'legs'],
    },
    {
      _id: ids.workouts.mobility,
      name: 'Post-Run Mobility',
      description: 'A gentle sequence of hip, calf, and hamstring mobility exercises.',
      type: 'Recovery',
      durationMinutes: 15,
      difficulty: 'Beginner',
      targetAreas: ['hips', 'calves', 'hamstrings'],
    },
    {
      _id: ids.workouts.strength,
      name: 'Full-Body Strength Circuit',
      description: 'A balanced bodyweight circuit with squats, push-ups, and planks.',
      type: 'Strength',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      targetAreas: ['full body', 'core'],
    },
  ];

  try {
    for (const [model, records] of [
      [user, users],
      [team, teams],
      [activity, activities],
      [leaderboard, leaderboardEntries],
      [workout, workouts],
    ] as const) {
      await model.deleteMany({ _id: { $in: records.map(({ _id }) => _id) } });
    }

    await user.insertMany(users);
    await team.insertMany(teams);
    await activity.insertMany(activities);
    await leaderboard.insertMany(leaderboardEntries);
    await workout.insertMany(workouts);

    console.log('Seeded users, teams, activities, leaderboard, and workouts');
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase().catch((error: unknown) => {
  console.error('Error seeding database:', error);
  process.exitCode = 1;
});
