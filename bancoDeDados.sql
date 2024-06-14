-- Tabela Pacientes
CREATE TABLE Pacientes (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Tabela Profissionais
CREATE TABLE Profissionais (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    ubs_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (ubs_id) REFERENCES Ubs(id)
);

-- Tabela Ubs
CREATE TABLE Ubs (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Tabela Consultas
CREATE TABLE Consultas (
    id INT NOT NULL AUTO_INCREMENT,
    paciente_id INT NOT NULL,
    profissional_id INT NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    status VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (paciente_id) REFERENCES Pacientes(id),
    FOREIGN KEY (profissional_id) REFERENCES Profissionais(id)
);

-- Status da Consulta
INSERT INTO Consultas (status) VALUES ('Agendada');
INSERT INTO Consultas (status) VALUES ('Realizada');
INSERT INTO Consultas (status) VALUES ('Falta');