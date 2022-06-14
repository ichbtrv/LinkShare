export const fileUrl = (file: File): string => {
  return URL.createObjectURL(file);
};
