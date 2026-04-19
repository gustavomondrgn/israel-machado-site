import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "artigos" ADD COLUMN "cycle_number" numeric;
  ALTER TABLE "artigos" ADD COLUMN "order_in_cycle" numeric;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "artigos" DROP COLUMN "cycle_number";
  ALTER TABLE "artigos" DROP COLUMN "order_in_cycle";`)
}
