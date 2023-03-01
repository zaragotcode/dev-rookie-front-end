// services
import * as tokenService from './tokenService'

import { Job } from '../types/models'
import { JobFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/jobs`

async function index(): Promise<Job[]> {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    throw error
  }
}

async function show(id: string): Promise<Job> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`)
    return res.json()
  } catch (error) {
    throw error
  }
}

async function create (jobData: JobFormData): Promise<Job> {
  try {
    const res = await fetch(`${BASE_URL}/create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
    })
    return await res.json() as Job
  } catch (error) {
    throw (error);
  }
}

async function update (jobData: JobFormData, jobId: number): Promise<Job> {
  try {
    const res = await fetch(`${BASE_URL}/${jobId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
    })
    return await res.json() as Job
  } catch (error) {
    throw (error);
  }
}

async function deleteJob (id: string): Promise<Job> {
  console.log('this is my service id',typeof parseInt(id));
  
  try {
    const res = await fetch(`${BASE_URL}/${parseInt(id)}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
    })
    return await res.json() as Job
  } catch (error) {
    throw (error);
  }
}

export { index, show, create, update, deleteJob}