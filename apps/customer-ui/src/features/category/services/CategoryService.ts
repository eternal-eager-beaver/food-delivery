import { HttpService } from '../../../common/services/HttpService';
import type { Category } from '../types/category';

async function getList(): Promise<Category[]> {
  const response = await HttpService.get<Category[]>('/categories');
  return response.data;
}

async function getById(id: string): Promise<Category> {
  const response = await HttpService.get<Category>(`/categories/${id}`);
  return response.data;
}

export const CategoryService = {
  getList,
  getById,
};
