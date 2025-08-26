-- Criando a tabela funcionários
CREATE TABLE Funcionarios(
id_funcionario INT PRIMARY KEY, 
nome VARCHAR(100),data_contratacao DATE
);
-- Criando a tabela dos detalhes salariais
CREATE TABLE DetalhesSalariais(
id_funcionario INT PRIMARY KEY,
salario DECIMAL (10,2),
conta_bancaria VARCHAR(50),
FOREIGN KEY (id_funcionario) REFERENCES Funcionarios(id_funcionario));

-- Inserindo dados na Tabela Funcionarios
INSERT INTO Funcionarios(id_funcionario, nome, data_contratacao) Values
(1, 'Ana Silva', '2020-05-15'),
(2, 'Carlos Souza', '2019-11-20'),
(3, 'Pedro Santos', '2021-03-10'),
(4, 'Mariana Lima', '2018-08-01'),
(5, 'Bruno Oliveira', '2022-01-25');

-- Inserindo dados na tabela Detalhes Salariais
INSERT INTO DetalhesSalariais(id_funcionario, salario,
conta_bancaria) Values
(1, 5500.00, '12345-6'),
(2, 7200.00, '65432-1'),
(3, 4800.00, '98765-4'),
(4, 9100.00, '11223-3'),
(5, 4900.00, '44556-6');

-- Criando a tabela departamentos
CREATE TABLE Departamentos(
id_departamento INT PRIMARY KEY,
nome_Departamento VARCHAR(50)
);

-- Alterando a tabela funcionários
ALTER TABLE Funcionarios
ADD Column id_departamento INT,
ADD FOREIGN KEY(id_departamento) REFERENCES
Departamento(id_departamento);

-- Adicionando dados na Tabela Departamentos
INSERT INTO Departamentos (id_departamento, nome_departamento) Values
(10, 'Tecnologia'),
(20, 'Recursos Humanos'),
(30, 'Financeiro'),
(40, 'Marketing'),
(50, 'Vendas');

-- Alterando dados na tablea funcionários
UPDATE Funcionarios SET id_departamento = 10 WHERE id_funcionario IN(1,3);
UPDATE Funcionarios SET id_departamento = 20 WHERE id_funcionario = 2;
UPDATE Funcionarios SET id_departamento = 40 WHERE id_funcionario = 4;
UPDATE Funcionarios SET id_departamento = 50 WHERE id_funcionario = 5;

-- Criando a Tabela Departamentos
CREATE TABLE Departamentos(
id_departamento INT PRIMARY KEY,
nome_departamento VARCHAR(50)
);

-- Criando a tabela habilidades
CREATE TABLE Habilidades(
id_habilidade INT PRIMARY KEY,
nome_habilidade VARCHAR(50)
);

-- Criando a tabela Funcionarios_Habilidades
CREATE TABLE Funcionarios_Habilidades(
id_funcionario INT, id_habilidade INT,
PRIMARY KEY (id_funcionario, id_habilidade),
FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario),
FOREIGN KEY (id_habilidade) REFERENCES Habilidades (id_habilidade)
);

-- Inserindo dados na tabela Habilidade
INSERT INTO Habilidade (id_habilidade, nome_habilidade)
VALUES
(100, 'SQL'),
(200, 'Phyton'),
(300, 'Comunicação'),
(400, 'Lidrança'),
(500, 'Power BI');


-- Atividade Inserir 5 Funcionários:
INSERT INTO funcionarios (id_funcionario, nome, data_contratacao) VALUES
(6,'Felipe Araujo', '2019-08-14'),
(7,'Luiz Dias', '2021-08-26'),
(8,'Juliana Ferreira', '2020-05-24'),
(9,'Bruna Martins', '2011-12-18'),
(10,'Rita Lima', '2019-04-05');

-- Inserir 5 Detalhes salário

INSERT INTO DetalhesSalariais(id_funcionario, salario, conta_bancaria) VALUES
(6, 2700.00, '34219-7'),
(7, 3100.00, '53187-6'),
(8, 9800.00, '43907-4'),
(9, 5400.00, '25818-9'),
(10, 7200.00, '38581-0');