const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const faker = require("faker");


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({"message": "ok"});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api/users/new", (req, res) => {
    res.json({ User: new User() });
});

app.get("/api/company/new", (req, res) => {
    res.json({ Company: new Company() });
});

app.get("/api/user/company/", (req, res) => {
    const user = new User();
    const company = new Company();
    res.json({
        user, 
        company
    });
});

class User{
    constructor(){
        this.id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phonerNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

class Company{
    constructor(){
        this.id = faker.random.uuid();
        this.companyName = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}