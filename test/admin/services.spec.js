import request from 'supertest';
import app from '../../src/app'; // Asegúrate de tener la importación correcta de tu aplicación

// Mock de supabase para simular respuestas
jest.mock('../../database.js', () => ({
  from: () => ({
    select: () => ({ data: [{ /* datos de prueba */ }], error: null }),
    insert: () => ({ data: [{ /* datos de prueba */ }], error: null }),
  }),
}));

describe('GET /api/equipment', () => {
  test('debe responder con un código de estado 200', async () => {
    const response = await request(app).get('/api/equipment');
    expect(response.statusCode).toBe(200);
  });

  test('debe responder con una lista de equipos', async () => {
    const response = await request(app).get('/api/equipment');
    expect(response.body).toEqual([{ /* datos de prueba */ }]);
  });
});

describe('GET /api/service/:id', () => {
  test('debe responder con un código de estado 200', async () => {
    const response = await request(app).get('/api/service/1');
    expect(response.statusCode).toBe(200);
  });

  test('debe responder con una lista de servicios para el equipo con ID 1', async () => {
    const response = await request(app).get('/api/service/1');
    expect(response.body).toEqual([{ /* datos de prueba */ }]);
  });
});

describe('POST /api/equipment', () => {
  test('debe responder con un código de estado 200', async () => {
    const newEquipment = {
      nombre: 'Equipo de prueba',
      descripcion: 'Descripción de prueba',
      estado: 'Activo',
      condominio: 'Condominio de prueba',
    };
    const response = await request(app).post('/api/equipment').send(newEquipment);
    expect(response.statusCode).toBe(200);
  });

  test('debe responder con un mensaje de éxito', async () => {
    const newEquipment = {
      nombre: 'Equipo de prueba',
      descripcion: 'Descripción de prueba',
      estado: 'Activo',
      condominio: 'Condominio de prueba',
    };
    const response = await request(app).post('/api/equipment').send(newEquipment);
    expect(response.body).toEqual({ message: 'equipo creado' });
  });
});

describe('POST /api/service', () => {
  test('debe responder con un código de estado 200', async () => {
    const newService = {
      equipo: 'Equipo de prueba',
      fecha: '2023-05-15',
      descripcion: 'Descripción de prueba',
      estado: 'Activo',
      costo: 100,
    };
    const response = await request(app).post('/api/service').send(newService);
    expect(response.statusCode).toBe(200);
  });

  test('debe responder con un mensaje de éxito', async () => {
    const newService = {
      equipo: 'Equipo de prueba',
      fecha: '2023-05-15',
      descripcion: 'Descripción de prueba',
      estado: 'Activo',
      costo: 100,
    };
    const response = await request(app).post('/api/service').send(newService);
    expect(response.body).toEqual({ message: 'mantenimiento creado' });
  });
});
