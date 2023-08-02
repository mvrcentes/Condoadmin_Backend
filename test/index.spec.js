import jest from "jest"
import request from "supertest"
import app from "../src/app.js"

describe("GET /", () => {
    //TDD
    test("it should repond with a 200 status code", async () => {
        const response = await request(app).get("/").send()

        expect(response.statusCode).toBe(404)
    })

    test("it should respond with an object", async () => {
        const response = await request(app).get("/api/houses").send()

        expect(response.body).toMatchObject({})
    })
})

describe("POST /api/houses", () => {
    // it hould respond with a 200 status code
    test("it should respond with a 200 status code", async () => {
        const response = await request(app).post("/api/houses").send()

        expect(response.statusCode).toBe(200)
    })

    // it should responde with a content-type of application/json
    test("it should respond with a content-type of application/json", async () => {
        const response = await request(app).post("/api/houses").send()

        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        )
    })

    // it should respond with a json object containing the new house
    test("it should respond with a json object containing the new house", async () => {
        const response = await request(app).post("/api/houses").send({
            num_casa: 100,
            direccion: "Calle 1",
            condominio: 1,
            cuota_mensual: 100,
        })

        expect(response.body).toEqual({ "error": "duplicate key value violates unique constraint \"casa_num_casa_key\"" })
    })

    // it should respond with an error message if the house already exists
    test("it should respond with a json object containing the new house", async () => {
        const response = await request(app).post("/api/houses").send({
            num_casa: 101,
            direccion: "Calle 1",
            condominio: 1,
            cuota_mensual: 100,
        })

        expect(response.body).toEqual({ message: "Casa creado" })
    })

    // it should respond with a json object containing the new house
    test("it should respond with a json object containing the new house", async () => {
        const response = await request(app).get("/api/houses/2").send()
        console.log(response.body)
        expect(response.body).toEqual([{
            num_casa: 2,
            cui: "2345678901234",
            nombre: "María López",
            telefono: "2345678901",
            correo: "residente2@example.com",
            tipo_residente: "Inquilino",
        }])
    })
})
