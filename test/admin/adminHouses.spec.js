import request from "supertest"
import app from "../../src/app.js"


describe("GET /api/houses", () => {
    test("it should respond with a 200 status code", async () => {
        const response = await request(app).get("/api/houses").send()
        expect(response.statusCode).toBe(200)
    })

    test("it should respond with JSON", async () => {
        const response = await request(app).get("/api/houses").send()
        expect(response.headers["content-type"]).toMatch(/application\/json/)
    })

    // Agrega más pruebas según tus necesidades.
})

describe("GET /api/houses/:id", () => {
    test("it should respond with a 200 status code", async () => {
        const response = await request(app).get("/api/houses/1").send()
        expect(response.statusCode).toBe(200)
    })

    test("it should respond with JSON", async () => {
        const response = await request(app).get("/api/houses/1").send()
        expect(response.headers["content-type"]).toMatch(/application\/json/)
    })

    // Agrega más pruebas según tus necesidades.
})

describe("POST /api/houses", () => {
    test("it should respond with a 200 status code", async () => {
        const houseData = {
            num_casa: 100,
            direccion: "Calle 1",
            condominio: 1,
            cuota_mensual: 100,
        }
        const response = await request(app).post("/api/houses").send(houseData)
        expect(response.statusCode).toBe(200)
    })

    test("it should respond with JSON", async () => {
        const houseData = {
            num_casa: 100,
            direccion: "Calle 1",
            condominio: 1,
            cuota_mensual: 100,
        }
        const response = await request(app).post("/api/houses").send(houseData)
        expect(response.headers["content-type"]).toMatch(/application\/json/)
    })

    // Agrega más pruebas según tus necesidades.
})

// Puedes agregar más describe y test para otras rutas y funciones.
