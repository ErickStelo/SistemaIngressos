create table evento
(
    eve_codigo    serial,
    eve_nome      varchar(200) not null,
    eve_data      date,
    eve_local     varchar(200),
    eve_descricao text,
    PRIMARY KEY (eve_codigo)
);

create table promoter
(
    pro_codigo   serial,
    pro_nome     varchar(100) not null,
    pro_telefone varchar(11),
    PRIMARY KEY (pro_codigo)
);
insert into promoter (pro_nome, pro_telefone)
values ('Erick', '54991567366');
--
drop table if exists usuarios;
create table usuario
(
    usu_codigo    serial,
    usu_username  varchar(20)  not null,
    usu_password  varchar(200) not null,
    pro_codigo    int       default null references promoter (pro_codigo) on delete cascade,
    usu_admin     boolean   default false,
    usu_dtcriacao timestamp default now(),
    primary key (usu_codigo)
);
insert into usuario (usu_username, usu_password, usu_admin)
values ('erick', '$2b$10$iH.Zw60U94H/qkxIVD0OPePScyIDBx1.AkLtHVgS/p8KtXUFAY6nm', true);

-- create table setores
-- (
--     set_codigo serial       not null,
--     set_nome   varchar(100) not null,
--     PRIMARY KEY (set_codigo)
-- );

-- create table lotes
-- (
--     lot_codigo serial       not null,
--     lot_nome   varchar(100) not null,
--     PRIMARY KEY (lot_codigo)
-- );

-- Vincula o evento com seus promoters
create table evento_promoters
(
    evp_codigo serial,
    eve_codigo int not null references evento (eve_codigo),
    pro_codigo int not null references promoter (pro_codigo),
    primary key (evp_codigo)
);

create table categoria_preco
(
    cap_codigo serial      not null,
    cap_nome   varchar(50) not null,
    PRIMARY KEY (cap_codigo)
);

insert into categoria_preco (cap_nome)
values ('Promocional'),
       ('Meia Entrada'),
       ('Inteiro');

-- Armazena os produtos (setores) do evento
create table evento_produtos
(
    evp_codigo serial      not null,
    eve_codigo int         not null references evento (eve_codigo) on delete cascade,
    evp_nome   varchar(50) not null,
    PRIMARY KEY (evp_codigo)
);

-- Vincula os eventos com seus lotes
create table evento_produto_lotes
(
    epl_codigo         serial not null,
    eve_codigo         int    not null references evento (eve_codigo) on delete cascade,
    evp_codigo         int    not null references evento_produtos (evp_codigo) on delete cascade,
    epl_numero         int    not null,
    epl_ativo          boolean default true,
    epl_datafechamento date
);

-- Vincula os lotes do evento, com seus setores e respectivos valores
create table lote_produto_categoria_preco_valores
(
    lpv_codigo          serial,
    epl_codigo          int              not null references evento_produto_lotes (epl_codigo) on delete cascade,
    cap_codigo          int              not null references categoria_preco (cap_codigo) on delete cascade,
    lpv_limiteingressos int,
    lpv_valoringresso   double precision not null,
    PRIMARY KEY (lpv_codigo)
);

-- Tabela que vai registrar a saída dos ingressos
create table ingresso_saida
(
    igs_codigo         serial primary key,
    pro_codigo         int              not null references promoters (pro_codigo),
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