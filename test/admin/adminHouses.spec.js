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


describe('Pruebas básicas', () => {
    it('Debería sumar correctamente', () => {
      const resultado = 2 + 2;
      expect(resultado).toBe(4);
    });
  
    it('Debería verificar que una variable sea verdadera', () => {
      const esVerdadero = true;
      expect(esVerdadero).toBeTruthy();
    });
  
    it('Debería verificar que una variable sea falsa', () => {
      const esFalso = false;
      expect(esFalso).toBeFalsy();
    });
  
    it('Debería comparar dos cadenas de texto', () => {
      const cadena1 = 'Hola, mundo';
      const cadena2 = 'Hola, mundo';
      expect(cadena1).toBe(cadena2);
    });
  
    it('Debería verificar que un objeto no sea nulo', () => {
      const objeto = { nombre: 'Ejemplo' };
      expect(objeto).not.toBeNull();
    });
  
    it('Debería verificar que un arreglo contenga un elemento específico', () => {
      const arreglo = [1, 2, 3, 4, 5];
      expect(arreglo).toContain(3);
    });
  
    it('Debería ejecutarse sin errores', () => {
      // Este es un ejemplo de prueba que siempre pasa porque no tiene expectativas.
      // Puede ser útil para verificar que una función se ejecute sin errores.
      const resultado = funcionQueNoArrojaErrores();
      expect(resultado).toBeDefined();
    });
  });
  
  // Función de ejemplo que no arroja errores
  function funcionQueNoArrojaErrores() {
    // Esta función no hace nada especial, solo devuelve un valor.
    return 'Ejemplo';
  }
  