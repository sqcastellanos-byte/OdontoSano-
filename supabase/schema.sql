-- ============================================================
--  OdontoSano — tablas de base de datos (Supabase / PostgreSQL)
--  Pega TODO esto en Supabase → SQL Editor → New query → Run.
--  (El depósito de imágenes "casos-fotos" ya se crea aparte por la API.)
-- ============================================================

-- 1) CITAS (formulario "Agendar valoración")
create table if not exists public.citas (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  nombre       text not null,
  sede         text not null,
  telefono     text not null,
  tratamiento  text,
  estado       text not null default 'nueva'
);

alter table public.citas enable row level security;

-- Cualquier visitante puede CREAR una cita; nadie puede leerlas con la
-- llave pública (solo el panel, que usa la llave secreta del servidor).
drop policy if exists "citas_insert_publico" on public.citas;
create policy "citas_insert_publico"
  on public.citas for insert
  to anon, authenticated
  with check (true);

-- 2) CASOS CLÍNICOS (galería antes/después)
create table if not exists public.casos (
  id                          uuid primary key default gen_random_uuid(),
  created_at                  timestamptz not null default now(),
  tratamiento                 text not null,
  titulo                      text not null,
  descripcion                 text,
  duracion                    text,
  antes_url                   text,
  despues_url                 text,
  consentimiento_verificado   boolean not null default false,
  publicado                   boolean not null default false
);

alter table public.casos enable row level security;

-- El público solo ve casos publicados Y con consentimiento verificado.
drop policy if exists "casos_select_publicados" on public.casos;
create policy "casos_select_publicados"
  on public.casos for select
  to anon, authenticated
  using (publicado = true and consentimiento_verificado = true);

-- Refrescar la caché de la API para que reconozca las tablas de inmediato.
notify pgrst, 'reload schema';
