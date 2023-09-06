--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8
-- Dumped by pg_dump version 14.8

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- Name: flights; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.flights (
    id integer NOT NULL,
    origin integer NOT NULL,
    destination integer NOT NULL,
    date date NOT NULL,
    CONSTRAINT origin_not_same_destination CHECK ((origin <> destination))
);


--
-- Name: flights_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.flights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: flights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.flights_id_seq OWNED BY public.flights.id;


--
-- Name: passengers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.passengers (
    id integer NOT NULL,
    "firstName" character varying(100) NOT NULL,
    "secondName" character varying(100) NOT NULL
);


--
-- Name: passengers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.passengers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: passengers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.passengers_id_seq OWNED BY public.passengers.id;


--
-- Name: travels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.travels (
    id integer NOT NULL,
    "passengerId" integer NOT NULL,
    "flightId" integer NOT NULL
);


--
-- Name: travels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.travels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.travels_id_seq OWNED BY public.travels.id;


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- Name: flights id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights ALTER COLUMN id SET DEFAULT nextval('public.flights_id_seq'::regclass);


--
-- Name: passengers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers ALTER COLUMN id SET DEFAULT nextval('public.passengers_id_seq'::regclass);


--
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels ALTER COLUMN id SET DEFAULT nextval('public.travels_id_seq'::regclass);


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cities VALUES (1, 'Salvador');
INSERT INTO public.cities VALUES (2, 'Conquista');
INSERT INTO public.cities VALUES (12, 'Itapetinga');


--
-- Data for Name: flights; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.flights VALUES (5, 1, 2, '2023-12-24');
INSERT INTO public.flights VALUES (19, 1, 2, '2023-12-24');
INSERT INTO public.flights VALUES (20, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (21, 1, 2, '2021-12-24');
INSERT INTO public.flights VALUES (22, 1, 2, '2021-12-24');
INSERT INTO public.flights VALUES (23, 1, 2, '2021-12-24');
INSERT INTO public.flights VALUES (24, 1, 2, '2024-12-24');
INSERT INTO public.flights VALUES (25, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (26, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (27, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (28, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (29, 1, 2, '2025-12-24');
INSERT INTO public.flights VALUES (30, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (31, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (32, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (33, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (34, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (35, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (36, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (37, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (38, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (39, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (40, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (41, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (42, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (43, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (44, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (45, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (46, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (47, 1, 2, '2022-12-24');
INSERT INTO public.flights VALUES (48, 1, 2, '2025-12-24');
INSERT INTO public.flights VALUES (49, 1, 2, '2025-12-24');
INSERT INTO public.flights VALUES (54, 1, 2, '2025-12-24');
INSERT INTO public.flights VALUES (55, 1, 2, '2025-12-24');
INSERT INTO public.flights VALUES (57, 1, 2, '2025-12-24');
INSERT INTO public.flights VALUES (58, 1, 2, '2023-09-07');
INSERT INTO public.flights VALUES (59, 1, 2, '2025-09-07');


--
-- Data for Name: passengers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.passengers VALUES (1, 'Joana', 'Alves');
INSERT INTO public.passengers VALUES (2, 'Joana', 'Alves');
INSERT INTO public.passengers VALUES (3, 'Joana', 'Alves');
INSERT INTO public.passengers VALUES (4, 'Joana', 'Alves');
INSERT INTO public.passengers VALUES (5, 'Joana', 'Alves');
INSERT INTO public.passengers VALUES (6, 'cara', 'um');
INSERT INTO public.passengers VALUES (7, 'cara', 'dois');
INSERT INTO public.passengers VALUES (8, 'cara', 'tres');
INSERT INTO public.passengers VALUES (9, 'cara', 'quatro');
INSERT INTO public.passengers VALUES (10, 'cara', 'cinco');
INSERT INTO public.passengers VALUES (11, 'cara', 'seis');
INSERT INTO public.passengers VALUES (12, 'cara', 'sete');
INSERT INTO public.passengers VALUES (13, 'cara', 'oito');
INSERT INTO public.passengers VALUES (14, 'cara', 'nove');
INSERT INTO public.passengers VALUES (15, 'cara', 'dez');


--
-- Data for Name: travels; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.travels VALUES (3, 1, 5);
INSERT INTO public.travels VALUES (4, 1, 5);
INSERT INTO public.travels VALUES (5, 1, 5);
INSERT INTO public.travels VALUES (6, 1, 5);
INSERT INTO public.travels VALUES (7, 1, 5);
INSERT INTO public.travels VALUES (8, 1, 5);
INSERT INTO public.travels VALUES (9, 1, 5);
INSERT INTO public.travels VALUES (11, 1, 19);
INSERT INTO public.travels VALUES (12, 1, 19);
INSERT INTO public.travels VALUES (13, 1, 19);
INSERT INTO public.travels VALUES (14, 2, 19);
INSERT INTO public.travels VALUES (15, 2, 19);
INSERT INTO public.travels VALUES (16, 2, 19);
INSERT INTO public.travels VALUES (17, 2, 19);
INSERT INTO public.travels VALUES (18, 2, 19);
INSERT INTO public.travels VALUES (19, 2, 19);
INSERT INTO public.travels VALUES (20, 2, 19);
INSERT INTO public.travels VALUES (21, 6, 19);
INSERT INTO public.travels VALUES (22, 7, 19);
INSERT INTO public.travels VALUES (23, 8, 19);
INSERT INTO public.travels VALUES (24, 9, 19);
INSERT INTO public.travels VALUES (25, 10, 19);
INSERT INTO public.travels VALUES (26, 11, 19);
INSERT INTO public.travels VALUES (27, 12, 19);
INSERT INTO public.travels VALUES (28, 13, 19);
INSERT INTO public.travels VALUES (29, 14, 19);
INSERT INTO public.travels VALUES (30, 14, 19);
INSERT INTO public.travels VALUES (32, 14, 19);


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cities_id_seq', 12, true);


--
-- Name: flights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.flights_id_seq', 59, true);


--
-- Name: passengers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.passengers_id_seq', 15, true);


--
-- Name: travels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.travels_id_seq', 32, true);


--
-- Name: cities cities_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_name_key UNIQUE (name);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- Name: flights flights_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_pkey PRIMARY KEY (id);


--
-- Name: passengers passengers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers
    ADD CONSTRAINT passengers_pkey PRIMARY KEY (id);


--
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- Name: flights flights_destination_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_destination_fkey FOREIGN KEY (destination) REFERENCES public.cities(id);


--
-- Name: flights flights_origin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_origin_fkey FOREIGN KEY (origin) REFERENCES public.cities(id);


--
-- Name: travels travels_flightId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT "travels_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES public.flights(id);


--
-- Name: travels travels_passengerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT "travels_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES public.passengers(id);


--
-- PostgreSQL database dump complete
--

