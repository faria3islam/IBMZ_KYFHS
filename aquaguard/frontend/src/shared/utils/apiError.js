export function getApiErrorMessage(error, fallback = 'An unexpected error occurred') {
  if (!error) return fallback;
  if (typeof error === 'string') return error;
  if (error?.message) return String(error.message);
  if (error?.response?.data?.message) return String(error.response.data.message);
  if (error?.response?.data) return JSON.stringify(error.response.data);
  return fallback;
}
