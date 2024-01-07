DROP DATABASE IF EXISTS checklist;
CREATE DATABASE checklist WITH TEMPLATE = template0 ENCODING = 'UTF8';

ALTER DATABASE checklist OWNER TO postgres;

\connect checklist

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE TABLE public.checklist(
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE public.checklist_item(
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  checklist_id uuid NOT NULL REFERENCES public.checklist(id),
  title text NOT NULL,
  checked boolean NOT NULL DEFAULT FALSE,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE INDEX checklist_item_parent ON public.checklist_item (checklist_id);
