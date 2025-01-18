export const formatDate = (publishDate) => {
  return `${publishDate.getFullYear()}-${(publishDate.getMonth() + 1).toString().padStart(2, '0')}-${publishDate.getDate().toString().padStart(2, '0')}`
}