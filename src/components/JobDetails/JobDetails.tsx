import { useState, useEffect } from "react"
import { useParams } from "react-router"


// services
import * as jobService from "../../services/jobService"

//types
import { Job } from "../../types/models"

const JobDetails = (): JSX.Element => {
  const [ jobDetails, setJobDetails ] =  useState<Job | null>(null)
  const { id } = useParams() as {id: string}

useEffect(() => {
  const fetchJob = async (): Promise<void> => {
    const data: Job = await jobService.show(id)
    setJobDetails(data)
  }
  fetchJob()
}, [id])

  if (!jobDetails) {
    <h1>Loading job details...</h1>
  }

  const salary = jobDetails?.salary ? jobDetails.salary : 'Not specified'


  return (
    <article>
      <div>
        <h1>{jobDetails?.companyName}</h1>
      </div>
      <div>
        <img src={`${jobDetails?.logo}`} alt={`${jobDetails?.companyName}'s logo`} />
        </div>
      <div>
        <h3>Position: {jobDetails?.position}</h3>
      </div>
      <div>
        <h3>Apply Here:  
          <a href={jobDetails?.applyLink}>
          {jobDetails?.companyName}'s Careers Page
          </a> 
        </h3>
      </div>
      <div>
        <h3>Salary: {salary}</h3>
      </div>
      <div>
        <h6>Salary shown is based on the average given on the salary range and may be different based on your location within the United States.</h6>
      </div>
    </article>
  )
}

export default JobDetails