// services
import * as tokenService from './tokenService'

import { Job } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/jobs`

async function index(): Promise<Job[]> {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    throw error
  }
}

export { index }