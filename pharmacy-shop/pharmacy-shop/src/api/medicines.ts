import { Medicine } from '@/types/medicine'

const API_BASE_URL = 'http://localhost:3001'

export interface MedicinesPage {
  medicines: Medicine[]
  totalPages: number
}


export async function fetchMedicinesPage(page: number, limit: number): Promise<MedicinesPage> {
  const res = await fetch(`${API_BASE_URL}/medicines?_page=${page}&_limit=${limit}`)
  if (!res.ok) {
    throw new Error('Failed to fetch medicines')
  }
  const medicines: Medicine[] = await res.json()
  
  const totalCount = Number(res.headers.get('X-Total-Count') || medicines.length)
  const totalPages = Math.ceil(totalCount / limit)

  return { medicines, totalPages }
}

export async function fetchTotalMedicinesCount(): Promise<number> {
  const res = await fetch(`${API_BASE_URL}/medicines`)
  if (!res.ok) {
    throw new Error('Failed to fetch medicines count')
  }
  const allMedicines: Medicine[] = await res.json()
  return allMedicines.length
}
