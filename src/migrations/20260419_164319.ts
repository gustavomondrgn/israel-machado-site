import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_ensaios_status" AS ENUM('draft', 'coming_soon', 'published');
  CREATE TYPE "public"."enum_artigos_status" AS ENUM('draft', 'coming_soon', 'briefing', 'esboco', 'redigido', 'a_fazer', 'bonus', 'published');
  CREATE TYPE "public"."enum_depoimentos_testimonials_category" AS ENUM('Consultas', 'Aulas, Palestras e Seminários', 'Coral');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "ensaios_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar NOT NULL
  );
  
  CREATE TABLE "ensaios" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"subtitle" varchar,
  	"excerpt" varchar,
  	"category_id" integer NOT NULL,
  	"serie_id" integer,
  	"order_in_serie" numeric,
  	"content" jsonb,
  	"notes" jsonb,
  	"references" jsonb,
  	"status" "enum_ensaios_status" DEFAULT 'draft' NOT NULL,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "ensaio_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "ensaio_series" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar,
  	"category_id" integer NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "artigos_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar NOT NULL
  );
  
  CREATE TABLE "artigos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"excerpt" varchar,
  	"serie_id" integer,
  	"order_in_serie" numeric,
  	"content" jsonb,
  	"notes" jsonb,
  	"references" jsonb,
  	"status" "enum_artigos_status" DEFAULT 'draft' NOT NULL,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "artigo_series_cycles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cycle_number" numeric NOT NULL,
  	"cycle_name" varchar NOT NULL
  );
  
  CREATE TABLE "artigo_series" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"ensaios_id" integer,
  	"ensaio_categories_id" integer,
  	"ensaio_series_id" integer,
  	"artigos_id" integer,
  	"artigo_series_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_config" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"whatsapp_number" varchar DEFAULT '5554999141101',
  	"whatsapp_message" varchar DEFAULT 'Olá, gostaria de agendar uma consulta.',
  	"instagram_url" varchar DEFAULT 'https://www.instagram.com/israelkmachado',
  	"doctoralia_url" varchar DEFAULT 'https://www.doctoralia.com.br/israel-machado/psicologo/passo-fundo',
  	"crp" varchar DEFAULT 'CRP 07/43950',
  	"address" varchar DEFAULT 'Rua Uruguai, 1969 — Passo Fundo, RS',
  	"contact_email" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_content" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar,
  	"hero_subtitle" varchar,
  	"hero_description" varchar,
  	"hero_note" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "depoimentos_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"initials" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"date" varchar,
  	"location" varchar,
  	"verified" boolean DEFAULT true,
  	"category" "enum_depoimentos_testimonials_category" NOT NULL
  );
  
  CREATE TABLE "depoimentos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "servicos_content" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"price_presencial" numeric DEFAULT 200,
  	"price_online" numeric DEFAULT 180,
  	"footer_note" varchar DEFAULT 'Os valores podem ser conversados. A ideia é que o custo não seja um impedimento para quem precisa de atendimento.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ensaios_tags" ADD CONSTRAINT "ensaios_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ensaios"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ensaios" ADD CONSTRAINT "ensaios_category_id_ensaio_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."ensaio_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ensaios" ADD CONSTRAINT "ensaios_serie_id_ensaio_series_id_fk" FOREIGN KEY ("serie_id") REFERENCES "public"."ensaio_series"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ensaio_series" ADD CONSTRAINT "ensaio_series_category_id_ensaio_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."ensaio_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "artigos_tags" ADD CONSTRAINT "artigos_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."artigos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "artigos" ADD CONSTRAINT "artigos_serie_id_artigo_series_id_fk" FOREIGN KEY ("serie_id") REFERENCES "public"."artigo_series"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "artigo_series_cycles" ADD CONSTRAINT "artigo_series_cycles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."artigo_series"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ensaios_fk" FOREIGN KEY ("ensaios_id") REFERENCES "public"."ensaios"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ensaio_categories_fk" FOREIGN KEY ("ensaio_categories_id") REFERENCES "public"."ensaio_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ensaio_series_fk" FOREIGN KEY ("ensaio_series_id") REFERENCES "public"."ensaio_series"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_artigos_fk" FOREIGN KEY ("artigos_id") REFERENCES "public"."artigos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_artigo_series_fk" FOREIGN KEY ("artigo_series_id") REFERENCES "public"."artigo_series"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "depoimentos_testimonials" ADD CONSTRAINT "depoimentos_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."depoimentos"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "ensaios_tags_order_idx" ON "ensaios_tags" USING btree ("_order");
  CREATE INDEX "ensaios_tags_parent_id_idx" ON "ensaios_tags" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "ensaios_slug_idx" ON "ensaios" USING btree ("slug");
  CREATE INDEX "ensaios_category_idx" ON "ensaios" USING btree ("category_id");
  CREATE INDEX "ensaios_serie_idx" ON "ensaios" USING btree ("serie_id");
  CREATE INDEX "ensaios_updated_at_idx" ON "ensaios" USING btree ("updated_at");
  CREATE INDEX "ensaios_created_at_idx" ON "ensaios" USING btree ("created_at");
  CREATE UNIQUE INDEX "ensaio_categories_slug_idx" ON "ensaio_categories" USING btree ("slug");
  CREATE INDEX "ensaio_categories_updated_at_idx" ON "ensaio_categories" USING btree ("updated_at");
  CREATE INDEX "ensaio_categories_created_at_idx" ON "ensaio_categories" USING btree ("created_at");
  CREATE UNIQUE INDEX "ensaio_series_slug_idx" ON "ensaio_series" USING btree ("slug");
  CREATE INDEX "ensaio_series_category_idx" ON "ensaio_series" USING btree ("category_id");
  CREATE INDEX "ensaio_series_updated_at_idx" ON "ensaio_series" USING btree ("updated_at");
  CREATE INDEX "ensaio_series_created_at_idx" ON "ensaio_series" USING btree ("created_at");
  CREATE INDEX "artigos_tags_order_idx" ON "artigos_tags" USING btree ("_order");
  CREATE INDEX "artigos_tags_parent_id_idx" ON "artigos_tags" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "artigos_slug_idx" ON "artigos" USING btree ("slug");
  CREATE INDEX "artigos_serie_idx" ON "artigos" USING btree ("serie_id");
  CREATE INDEX "artigos_updated_at_idx" ON "artigos" USING btree ("updated_at");
  CREATE INDEX "artigos_created_at_idx" ON "artigos" USING btree ("created_at");
  CREATE INDEX "artigo_series_cycles_order_idx" ON "artigo_series_cycles" USING btree ("_order");
  CREATE INDEX "artigo_series_cycles_parent_id_idx" ON "artigo_series_cycles" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "artigo_series_slug_idx" ON "artigo_series" USING btree ("slug");
  CREATE INDEX "artigo_series_updated_at_idx" ON "artigo_series" USING btree ("updated_at");
  CREATE INDEX "artigo_series_created_at_idx" ON "artigo_series" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_ensaios_id_idx" ON "payload_locked_documents_rels" USING btree ("ensaios_id");
  CREATE INDEX "payload_locked_documents_rels_ensaio_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("ensaio_categories_id");
  CREATE INDEX "payload_locked_documents_rels_ensaio_series_id_idx" ON "payload_locked_documents_rels" USING btree ("ensaio_series_id");
  CREATE INDEX "payload_locked_documents_rels_artigos_id_idx" ON "payload_locked_documents_rels" USING btree ("artigos_id");
  CREATE INDEX "payload_locked_documents_rels_artigo_series_id_idx" ON "payload_locked_documents_rels" USING btree ("artigo_series_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "depoimentos_testimonials_order_idx" ON "depoimentos_testimonials" USING btree ("_order");
  CREATE INDEX "depoimentos_testimonials_parent_id_idx" ON "depoimentos_testimonials" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "ensaios_tags" CASCADE;
  DROP TABLE "ensaios" CASCADE;
  DROP TABLE "ensaio_categories" CASCADE;
  DROP TABLE "ensaio_series" CASCADE;
  DROP TABLE "artigos_tags" CASCADE;
  DROP TABLE "artigos" CASCADE;
  DROP TABLE "artigo_series_cycles" CASCADE;
  DROP TABLE "artigo_series" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_config" CASCADE;
  DROP TABLE "home_content" CASCADE;
  DROP TABLE "depoimentos_testimonials" CASCADE;
  DROP TABLE "depoimentos" CASCADE;
  DROP TABLE "servicos_content" CASCADE;
  DROP TYPE "public"."enum_ensaios_status";
  DROP TYPE "public"."enum_artigos_status";
  DROP TYPE "public"."enum_depoimentos_testimonials_category";`)
}
