// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Jobs from './pages/Jobs/Jobs'
import NewJob from './components/NewJob/NewJob'
import EditJobDetails from './components/EditJobDetails/EditJobDetails'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import JobDetails from './components/JobDetails/JobDetails'
// services
import * as authService from './services/authService'
import * as profileService from './services/jobService'
import * as jobService from './services/jobService'


// stylesheets
import './App.css'

// types
import { User, Job } from './types/models'
import { JobFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect((): void => {
    const fetchJobs = async (): Promise<void> => {
      try {
        const jobData: Job[] = await jobService.index()
        setJobs(jobData)
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchJobs()
  }, [user])

  const handleAddJob = async (newJobData: JobFormData): Promise<void> => {
    const newJob = await jobService.create(newJobData)
    setJobs([newJob, ...jobs])
    navigate('/jobs')
  }

  const handleUpdateJob = async (JobData: JobFormData, jobId:number): Promise<void> => {
    const updatedJob = await jobService.update(JobData, jobId)
    setJobs(jobs.map((job) => jobId === job.id ? updatedJob : job))
    navigate(`/jobs/${jobId}`)
  }

  const handleDeleteJob = async (jobId:string): Promise<void> => {
    await jobService.deleteJob(jobId)    
    setJobs(jobs.filter(job => job.id !== parseInt(jobId)))
    navigate(`/jobs`)
  }


  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/" 
          element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/jobs"
          element={
              <Jobs jobs={jobs}/>
          }
        />
        <Route
          path="/jobs/:id"
          element={
              <JobDetails user={user} handleDeleteJob={handleDeleteJob}/>
          }
        />
        <Route
          path="/jobs/create"
          element={
            <ProtectedRoute user={user}>
              <NewJob handleAddJob={handleAddJob}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditJobDetails handleUpdateJob={handleUpdateJob}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles  />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
