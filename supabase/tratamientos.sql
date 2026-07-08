-- ============================================================
--  OdontoSano — tabla de TRATAMIENTOS (editables desde el panel)
--  Pega esto en Supabase → SQL Editor → New query → Run.
-- ============================================================

create table if not exists public.tratamientos (
  slug         text primary key,
  nombre       text not null,
  resumen      text,
  detalle      text,
  duracion     text,
  para_quien   text,
  orden        int not null default 0,
  activo       boolean not null default true,
  updated_at   timestamptz not null default now()
);

alter table public.tratamientos enable row level security;

-- El público solo ve los tratamientos activos.
drop policy if exists "tratamientos_select_publico" on public.tratamientos;
create policy "tratamientos_select_publico"
  on public.tratamientos for select
  to anon, authenticated
  using (activo = true);

-- Editar/crear se hace desde el panel con la llave secreta (salta RLS).

notify pgrst, 'reload schema';
