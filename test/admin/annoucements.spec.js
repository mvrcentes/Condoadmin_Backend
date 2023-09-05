import { getAnnouncement, getAnnouncementByID } from '../../src/controllers/announcements.controller.js';
import supabase from '../../src/database.js'; 

describe('getAnnouncement', () => {
  it('should return a list of announcements', async () => {
    const mockData = [{ id: 1, title: 'Announcement 1' }, { id: 2, title: 'Announcement 2' }];
    const mockResponse = { data: mockData, error: null };

    // Mockear la función de supabase.from().select() para devolver datos ficticios
    supabase.from = jest.fn(() => ({
      select: jest.fn().mockReturnValue(mockResponse),
    }));

    const req = {};
    const res = {
      json: jest.fn(),
    };

    await getAnnouncement(req, res);

    expect(supabase.from).toHaveBeenCalledWith('anuncio');
    expect(supabase.from('anuncio').select).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it('should handle errors', async () => {
    const errorMessage = 'An error occurred';
    const mockResponse = { data: null, error: errorMessage };

    // Mockear la función de supabase.from().select() para devolver un error ficticio
    supabase.from = jest.fn(() => ({
      select: jest.fn().mockReturnValue(mockResponse),
    }));

    const req = {};
    const res = {
      json: jest.fn(),
    };

    await getAnnouncement(req, res);

    expect(supabase.from).toHaveBeenCalledWith('anuncio');
    expect(supabase.from('anuncio').select).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });
});

describe('getAnnouncementByID', () => {
  it('should return an announcement by ID', async () => {
    const id = 1;
    const mockData = { id: 1, title: 'Announcement 1' };
    const mockResponse = { data: mockData, error: null };

    // Mockear la función de supabase.from().select().eq() para devolver datos ficticios
    supabase.from = jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn().mockReturnValue(mockResponse),
      })),
    }));

    const req = { params: { id } };
    const res = {
      json: jest.fn(),
    };

    await getAnnouncementByID(req, res);

    expect(supabase.from).toHaveBeenCalledWith('anuncio');
    expect(supabase.from('anuncio').select).toHaveBeenCalled();
    expect(supabase.from('anuncio').select().eq).toHaveBeenCalledWith('id', id);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it('should handle errors', async () => {
    const id = 1;
    const errorMessage = 'An error occurred';
    const mockResponse = { data: null, error: errorMessage };

    // Mockear la función de supabase.from().select().eq() para devolver un error ficticio
    supabase.from = jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn().mockReturnValue(mockResponse),
      })),
    }));

    const req = { params: { id } };
    const res = {
      json: jest.fn(),
    };

    await getAnnouncementByID(req, res);

    expect(supabase.from).toHaveBeenCalledWith('anuncio');
    expect(supabase.from('anuncio').select).toHaveBeenCalled();
    expect(supabase.from('anuncio').select().eq).toHaveBeenCalledWith('id', id);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });
});
