// services
import * as tokenService from './tokenService'

import { Profile } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/profiles`

async function index(): Promise<Profile[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Profile[]
  } catch (error) {
    throw error
  }
}

export { index }