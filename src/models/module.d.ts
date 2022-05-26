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
  id?: string;
  name?: string;
  password?: string;
  email?: string;
  profileType?: number;
}

export interface ReportProps {
  id?: string;
  userId: string;
  title: string;
  description: string;
  typeId: string;
  subTypes: string;
  image: string;
  audio: string;
  latitude: string;
  longitude: string;
}

export interface Report {
  id?: string;
  userId?: string;
  title?: string;
  description?: string;
  typeId?: string;
  type?: models.Type;
  subTypes?: string[];
  image?: string;
  audio?: string;
  latitude?: string;
  longitude?: string;
}

export interface Type {
  id: string;
  typeName: string;
  subTypes: string[];
}
