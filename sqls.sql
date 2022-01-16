create table eventos
(
    eve_codigo    serial,
    eve_nome      varchar(200) not null,
    eve_data      date,
    eve_local     varchar(200),
    eve_descricao text,
    PRIMARY KEY (eve_codigo)
);

create table promoters
(
    promo_codigo   serial,
    promo_nome     varchar(100) not null,
    promo_telefone varchar(11),
    PRIMARY KEY (promo_codigo)
);

create table setores
(
    set_codigo serial       not null,
    set_nome   varchar(100) not null,
    PRIMARY KEY (set_codigo)
);

create table lotes
(
    lot_codigo serial       not null,
    lot_nome   varchar(100) not null,
    PRIMARY KEY (lot_codigo)
);

-- Vincula o evento com seus promoters
create table evento_promoters
(
    evp_codigo   serial,
    eve_codigo   int not null references eventos (eve_codigo),
    promo_codigo int not null references promoters (promo_codigo),
    primary key (evp_codigo)
);

-- Vincula o evento com seus setores
create table evento_setores
(
    evs_codigo serial not null,
    eve_codigo int    not null references eventos (eve_codigo),
    set_codigo int    not null references setores (set_codigo),
    PRIMARY KEY (evs_codigo)
);

-- Vincula os eventos com seus lotes
create table evento_lotes
(
    evl_codigo         serial not null,
    eve_codigo         int    not null references eventos (eve_codigo),
    lot_codigo         int    not null references lotes (lot_codigo),
    evl_ativo          boolean default true,
    evl_datafechamento date
);

-- Vincula os lotes do evento, com seus setores e respectivos valores
create table evento_lotes_setor_valores
(
    elsv_codigo          serial,
    evl_codigo           int references evento_lotes (evl_codigo),
    evs_codigo           int references evento_setores (evs_codigo),
    elsv_limiteingressos int,
    elsv_valoringresso   double precision not null,
    PRIMARY KEY (elsv_codigo)
);

-- Tabela que vai registrar a saída dos ingressos
create table ingresso_saida
(
    igs_codigo         serial primary key,
    promo_codigo       int              not null references promoters (promo_codigo),
    elsv_codigo        int              not null references evento_lotes_setor_valores (elsv_codigo),
    igs_desconto       double precision default 0,
    igs_valorfinal     double precision not null,
    igs_serialingresso int              not null,
    igs_clientenome    varchar(200)     not null,
    igs_clientecpf     varchar(11),
    igs_datacompra     timestamp        default now(),
    set_codigo         int              not null references setores (set_codigo),
    lot_codigo         int              not null references lotes (lot_codigo),
    igs_validado       boolean          default false
);