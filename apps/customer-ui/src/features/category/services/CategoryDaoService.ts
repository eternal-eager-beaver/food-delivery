import { HttpService } from '../../../common/services/HttpService';

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

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
