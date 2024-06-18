const express = require('express');
const {faker} = require('@faker-js/faker');

const app = express();
const port = 8000;

class Usuario {
    constructor() {
        this._id = faker.string.uuid();
        this.primerNombre = faker.person.firstName();
        this.apellido = faker.person.lastName();
        this.numeroTelefono = faker.phone.number();
        this.email = faker.internet.email();
        this.contrasena = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.location.street(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            codigoPostal: faker.location.zipCode(),
            pais: faker.location.country()
        };
    }
}

//Para obtener nuevo usuario
app.get('/api/users/new', (req, res) => {
    const newUser = new Usuario();
    res.json(newUser);
});

//Para obtener nueva empresa
app.get('/api/companies/new', (req, res) => {
    const newCompany = new Empresa();
    res.json(newCompany);
})

//Para obtener nuevo usuario y empresa
app.get('/api/user/company', (req, res) => {
    const newUser = new Usuario();
    const newCompany = new Empresa();
    res.json({ user: newUser, company: newCompany });
})

app.listen(port, () => console.log(`Listening on port: ${port}`));
