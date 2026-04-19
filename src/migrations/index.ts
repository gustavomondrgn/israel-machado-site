import * as migration_20260419_163832 from './20260419_163832';
import * as migration_20260419_172331 from './20260419_172331';

export const migrations = [
  {
    up: migration_20260419_163832.up,
    down: migration_20260419_163832.down,
    name: '20260419_163832',
  },
  {
    up: migration_20260419_172331.up,
    down: migration_20260419_172331.down,
    name: '20260419_172331'
  },
];
