import { HttpService } from '@/common/services/HttpService';

// TODO: get types from shared library
interface AuthDto {
  email: string;
  password: string;
}

async function login(dto: AuthDto) {
  const response = await HttpService.post('/auth/login', dto);
  return response.data;
}

async function register(dto: AuthDto) {
  const response = await HttpService.post('/auth/register', dto);
  return response.data;
}

export const AuthService = {
  login,
  register,
};
