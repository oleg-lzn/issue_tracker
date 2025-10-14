--
-- PostgreSQL database dump
--

\restrict 9GR7lj2loeElunG7hranxrNWdJdho0PC8yOsSWsEEJdJa1dVD21spVSDMT6u75f

-- Dumped from database version 17.6 (Postgres.app)
-- Dumped by pg_dump version 17.6 (Postgres.app)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: priority; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.priority AS ENUM (
    'low',
    'medium',
    'high'
);


--
-- Name: status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.status AS ENUM (
    'backlog',
    'todo',
    'in_progress',
    'done'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: issues; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.issues (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    status public.status DEFAULT 'backlog'::public.status NOT NULL,
    priority public.priority DEFAULT 'medium'::public.priority NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL
);


--
-- Name: issues_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.issues_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: issues_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.issues_id_seq OWNED BY public.issues.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: issues id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issues ALTER COLUMN id SET DEFAULT nextval('public.issues_id_seq'::regclass);


--
-- Data for Name: issues; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.issues (id, title, description, status, priority, created_at, updated_at, user_id) FROM stdin;
1	Hello There	This is test issue	backlog	medium	2025-10-07 18:02:52.614972	2025-10-07 18:02:52.614972	Jb6KJJnXJJ3Ti4d0eESKp
2	People pleasing issue	Some description	todo	low	2025-10-08 14:47:17.851407	2025-10-08 14:47:17.851407	Jb6KJJnXJJ3Ti4d0eESKp
7	Created new one	asd	in_progress	high	2025-10-08 19:25:21.213592	2025-10-08 19:25:21.213592	Jb6KJJnXJJ3Ti4d0eESKp
8	Should see this one	ont	backlog	medium	2025-10-09 14:58:04.951354	2025-10-09 14:58:04.951354	Jb6KJJnXJJ3Ti4d0eESKp
6	Some update	To DELETEASDASD	backlog	medium	2025-10-08 16:22:29.716195	2025-10-08 16:22:29.716195	Jb6KJJnXJJ3Ti4d0eESKp
14	Первая задача	Да, это задача	backlog	medium	2025-10-14 14:55:25.939427	2025-10-14 14:55:25.939427	t88XE8WmnbrgSpkpXvnSF
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, email, password, created_at) FROM stdin;
8hk1AbbMeLp_WL0b1mkGI	data@gmail.com	$2b$10$2OlmbJ6d6lhbqFAxffCt8OnV7fqiyDGEhC0yeZ6fYrX0l6o4lcU4W	2025-10-06 18:54:41.976764
Jb6KJJnXJJ3Ti4d0eESKp	a@a.com	$2b$10$gBfcOXLGlIvohFzQ776jieivr.cgcT4BFvfqa6fbiZYEVJO3tiQYa	2025-10-06 19:08:14.621929
{}	luzeninoleg2012@gmail.com	$2b$10$SjYkgSu9zr0lCFo0tRXuvuSL8EKk66qtNukCPknqw.eBf.dLAt6ki	2025-10-12 17:58:08.458552
1ybWflflksUPZ2bsh84Xn	olegluzenin@gmail.com	$2b$10$OMmlXfstUoc/v6.NzUE/sOAOSn2O.9E2wNrTuRZQG2WKXKSCkfUWi	2025-10-12 18:20:05.526181
pJH2QpcIAcz5r5CcJG7ZW	c@c.com	$2b$10$rx04oK0P18frbkeiBRRsOOEEnIoOKdmtTu8Yzqs8UG7dO5Ma5kl9S	2025-10-14 14:43:00.097289
t88XE8WmnbrgSpkpXvnSF	d@d.com	$2b$10$xnUA7XDM0jdESss.2z.JiOOqcToy4ngLGUiVnA1zGwjHsnSI6SJs.	2025-10-14 14:50:35.011718
\.


--
-- Name: issues_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.issues_id_seq', 14, true);


--
-- Name: issues issues_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issues
    ADD CONSTRAINT issues_pkey PRIMARY KEY (id);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict 9GR7lj2loeElunG7hranxrNWdJdho0PC8yOsSWsEEJdJa1dVD21spVSDMT6u75f

