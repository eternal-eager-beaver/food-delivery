import { HttpService } from '@/common/services/HttpService';
import { AuthDto } from '../types/auth-dto';

async function login(dto: AuthDto): Promise<AuthResponse> {
  const response = await HttpService.post('/auth/login', dto);
  return response.data;
}

async function register(dto: AuthDto): Promise<AuthResponse> {
  const response = await HttpService.post('/auth/register', dto);
  return response.data;
}

export const AuthService = {
  login,
  register,
};

// TODO: get from shared library
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
  };
}
