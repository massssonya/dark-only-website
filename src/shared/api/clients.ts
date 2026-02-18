const BASE_URL = '';

export const apiClient = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const config: RequestInit = {
    method: options?.method ?? 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Ошибка: ${response.status}`);
  }

  return response.json();
};