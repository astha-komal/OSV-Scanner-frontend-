export function getErrorMessage(err, fallback) {
  const data = err.response?.data;
  if (data?.message) return data.message;
  if (data?.errors) return Object.values(data.errors)[0];
  if (!err.response) return "Can't reach the server. Try again in a moment.";
  return fallback;
}