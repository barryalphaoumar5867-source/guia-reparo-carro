// Gerenciamento de Local Storage

import { User, Vehicle, Guide } from './types';

// Chaves do Local Storage
const STORAGE_KEYS = {
  CURRENT_USER: 'conserte_carro_current_user',
  USERS: 'conserte_carro_users',
  VEHICLES: 'conserte_carro_vehicles',
  GUIDES: 'conserte_carro_guides',
};

// Funções de hash simples (para MVP - em produção usar bcrypt)
export const hashPassword = (password: string): string => {
  return btoa(password + 'salt_secret_key');
};

export const verifyPassword = (password: string, hash: string): boolean => {
  return hashPassword(password) === hash;
};

// User Management
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const userJson = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return userJson ? JSON.parse(userJson) : null;
};

export const setCurrentUser = (user: User | null): void => {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
};

export const getAllUsers = (): User[] => {
  if (typeof window === 'undefined') return [];
  const usersJson = localStorage.getItem(STORAGE_KEYS.USERS);
  return usersJson ? JSON.parse(usersJson) : [];
};

export const saveUser = (user: User): void => {
  if (typeof window === 'undefined') return;
  const users = getAllUsers();
  const existingIndex = users.findIndex(u => u.id === user.id);
  
  if (existingIndex >= 0) {
    users[existingIndex] = user;
  } else {
    users.push(user);
  }
  
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

export const findUserByEmail = (email: string): User | undefined => {
  return getAllUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
};

// Vehicle Management
export const getUserVehicles = (userId: string): Vehicle[] => {
  if (typeof window === 'undefined') return [];
  const vehiclesJson = localStorage.getItem(STORAGE_KEYS.VEHICLES);
  const allVehicles: Vehicle[] = vehiclesJson ? JSON.parse(vehiclesJson) : [];
  return allVehicles.filter(v => v.usuarioId === userId);
};

export const saveVehicle = (vehicle: Vehicle): void => {
  if (typeof window === 'undefined') return;
  const vehiclesJson = localStorage.getItem(STORAGE_KEYS.VEHICLES);
  const vehicles: Vehicle[] = vehiclesJson ? JSON.parse(vehiclesJson) : [];
  
  const existingIndex = vehicles.findIndex(v => v.id === vehicle.id);
  
  if (existingIndex >= 0) {
    vehicles[existingIndex] = vehicle;
  } else {
    vehicles.push(vehicle);
  }
  
  localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(vehicles));
};

export const deleteVehicle = (vehicleId: string): void => {
  if (typeof window === 'undefined') return;
  const vehiclesJson = localStorage.getItem(STORAGE_KEYS.VEHICLES);
  const vehicles: Vehicle[] = vehiclesJson ? JSON.parse(vehiclesJson) : [];
  const filtered = vehicles.filter(v => v.id !== vehicleId);
  localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(filtered));
};

// Guides Management
export const getAllGuides = (): Guide[] => {
  if (typeof window === 'undefined') return [];
  const guidesJson = localStorage.getItem(STORAGE_KEYS.GUIDES);
  return guidesJson ? JSON.parse(guidesJson) : [];
};

export const getGuideById = (id: string): Guide | undefined => {
  return getAllGuides().find(g => g.id === id);
};

export const initializeGuides = (guides: Guide[]): void => {
  if (typeof window === 'undefined') return;
  const existing = localStorage.getItem(STORAGE_KEYS.GUIDES);
  if (!existing) {
    localStorage.setItem(STORAGE_KEYS.GUIDES, JSON.stringify(guides));
  }
};

// Logout
export const logout = (): void => {
  setCurrentUser(null);
};
