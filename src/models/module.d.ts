export as namespace models;

export interface Project {
  name: string;
}

export interface DropdownData {
  id?: string;
  name?: string;
  value?: string;
}

export interface HandleError {
  status: number;
  message: string;
}

export type CreateUser = {
  name: string;
  email: string;
  cellphone: string;
  password: string;
  grantType: string;
};

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface Params {
  name?: string;
  id?: string;
  date?: string;
}

export interface Pagination {
  offset?: number;
  limit?: number;
}

export interface UserCreation {
  name?: string;
  password?: string;
  email?: string;
  profileType?: number;
}
