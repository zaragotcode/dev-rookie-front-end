
//types
import { Job } from "../../types/models"

interface JobProps {
  job: Job
}

const JobDetails = (props: JobProps): JSX.Element => {
  const { job } = props

  return (
    <article>
      <div>
        <img src={`${job.logo}`} alt={`${job.companyName}'s logo`} />
        </div>
      <div>
        <h1>{job.companyName}</h1>
      </div>
      <div>
        <h1>{job.position}</h1>
      </div>
    </article>
  )
}

export default JobDetails