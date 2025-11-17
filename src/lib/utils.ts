export const generateId = (): string => {
  return `local-${Date.now()}-${Math.random().toString(36)}`;
};
