import { repository } from '@/../package.json'
import path from 'node:path'

export const editPath = (filePath: string) => {
  const base = path.dirname(path.join(filePath, '../../'))
  const currentPath = base === '.' ? filePath : filePath.replace(base, '')
  const improveFile = `${repository.url}/blob/main/${currentPath}`
  return improveFile
}