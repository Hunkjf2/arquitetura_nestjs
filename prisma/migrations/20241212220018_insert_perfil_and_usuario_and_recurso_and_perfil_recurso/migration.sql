-- Perfil
INSERT INTO perfil
(id, descricao) VALUES(1, 'Administrador');

-- Recurso
INSERT INTO recurso
(id, descricao, "role")
VALUES(1, 'Listar Perfil', 'ROLE_LISTAR_PERFIL');
INSERT INTO recurso
(id, descricao, "role")
VALUES(2, 'Cadastrar Perfil', 'ROLE_CADASTRAR_PERFIL');
INSERT INTO recurso
(id, descricao, "role")
VALUES(3, 'Atualizar Perfil', 'ROLE_ATUALIZAR_PERFIL');
INSERT INTO recurso
(id, descricao, "role")
VALUES(4, 'Deletar Perfil', 'ROLE_DELETAR_PERFIL');
INSERT INTO recurso
(id, descricao, "role")
VALUES(5, 'Listar Recurso', 'ROLE_LISTAR_RECURSO');
INSERT INTO recurso
(id, descricao, "role")
VALUES(6, 'Listar Usuário', 'ROLE_LISTAR_USUARIO');
INSERT INTO recurso
(id, descricao, "role")
VALUES(7, 'Cadastrar Usuário', 'ROLE_CADASTRAR_USUARIO');
INSERT INTO recurso
(id, descricao, "role")
VALUES(8, 'Atualizar Usuário', 'ROLE_ATUALIZAR_USUARIO');
INSERT INTO recurso
(id, descricao, "role")
VALUES(9, 'Deletar Usuário', 'ROLE_DELETAR_USUARIO');

-- Perfil Recurso
INSERT INTO perfil_recurso
(perfil_id, recurso_id)
VALUES(1, 1);
INSERT INTO perfil_recurso
(perfil_id, recurso_id)
VALUES(1, 2);
INSERT INTO perfil_recurso
(perfil_id, recurso_id)
VALUES(1, 3);
INSERT INTO perfil_recurso
(perfil_id, recurso_id)
VALUES(1, 4);
INSERT INTO perfil_recurso
(perfil_id, recurso_id)
VALUES(1, 5);
INSERT INTO perfil_recurso
(perfil_id, recurso_id)
VALUES(1, 6);
INSERT INTO perfil_recurso
(perfil_id, recurso_id)
VALUES(1, 7);
INSERT INTO perfil_recurso
(perfil_id, recurso_id)
VALUES(1, 8);
INSERT INTO arquitetura_nestjs.perfil_recurso
(perfil_id, recurso_id)
VALUES(1, 9);

-- Usuario
INSERT INTO usuario
(id, nome, email, login, "password", id_perfil)
VALUES(1, 'admin', 'admin@gmail.com', 'admin', '$2a$10$/EWaUQFalMbq/bn57gTjbukl.aX1vboKFPC2o9uz4IiafB9Ow.dK.', 1);