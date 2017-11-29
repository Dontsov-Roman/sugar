--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.10
-- Dumped by pg_dump version 9.5.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE orders (
    id integer NOT NULL,
    user_id integer,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    date timestamp without time zone DEFAULT now() NOT NULL,
    is_read boolean DEFAULT false,
    prices_ids integer[]
);


ALTER TABLE orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE orders_id_seq OWNED BY orders.id;


--
-- Name: prices; Type: TABLE; Schema: public; Owner: sugar
--

CREATE TABLE prices (
    id integer NOT NULL,
    name character varying(256),
    description text,
    price_uah numeric(6,2),
    time_hours numeric(6,2)
);


ALTER TABLE prices OWNER TO sugar;

--
-- Name: prices_id_seq; Type: SEQUENCE; Schema: public; Owner: sugar
--

CREATE SEQUENCE prices_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE prices_id_seq OWNER TO sugar;

--
-- Name: prices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sugar
--

ALTER SEQUENCE prices_id_seq OWNED BY prices.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    id integer NOT NULL,
    type integer,
    email character varying(50),
    phone character varying(20),
    name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY orders ALTER COLUMN id SET DEFAULT nextval('orders_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: sugar
--

ALTER TABLE ONLY prices ALTER COLUMN id SET DEFAULT nextval('prices_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY orders (id, user_id, created_at, date, is_read, prices_ids) FROM stdin;
1	2	2017-11-29 15:06:43.598097	2017-11-29 15:06:15.494016	f	{1,2}
\.


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('orders_id_seq', 1, true);


--
-- Data for Name: prices; Type: TABLE DATA; Schema: public; Owner: sugar
--

COPY prices (id, name, description, price_uah, time_hours) FROM stdin;
1	Some name	description	10.00	2.00
2	some name 2	desc 2	20.00	1.00
3	another name	qweqweqwe	100.00	6.00
\.


--
-- Name: prices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sugar
--

SELECT pg_catalog.setval('prices_id_seq', 3, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users (id, type, email, phone, name, created_at) FROM stdin;
1	1	bromaretskaya@gmail.com	380960799798	Александра	2017-11-29 15:05:43.743252
2	2	dontsovroman@gmail.com	380974885047	Roman	2017-11-29 15:06:15.494016
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('users_id_seq', 2, true);


--
-- Name: orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: prices_pkey; Type: CONSTRAINT; Schema: public; Owner: sugar
--

ALTER TABLE ONLY prices
    ADD CONSTRAINT prices_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

