export function formatDate(createdAt) {
  if (!createdAt) return ''

  const date = new Date(createdAt)
  const now = new Date()

  const diffInMs = now - date

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInMinutes < 60) {
    if (diffInMinutes < 0) {
      return 'Agora mesmo'
    }
    return `Há ${diffInMinutes} min`
  }

  if (diffInHours < 24) {
    return `Há ${diffInHours} horas`
  }

  if (diffInDays === 1) {
    return 'Ontem'
  }

  if (diffInDays === 2 || diffInDays === 3) {
    return `Há  ${diffInDays}d`
  }

  const day = String(date.getDate().padStart(2, '0'))
  const month = String(date.getMonth().padStart(2, '0'))
  const year = date.getFullYear();
  const hours = String(date.getHours().padStart(2, '0'))
  const minutes = String(date.getMinutes().padStart(2, '0'))

  return `${day}/${month}/${year} às ${hours}:${minutes}`;

  
}
