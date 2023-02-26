import JobCard from "../../components/JobCard/JobCard";

// types 
import { Job } from "../../types/models"

interface JobProps {
  jobs: Job[];
}


const Jobs = (props: JobProps): JSX.Element => {
  const { jobs } = props

  return (
    <main>
      <h1>This is my list!</h1>
      {jobs.map((job: Job) => 
      <JobCard
        key={job.id}
        job={job}
      />
      )}
    </main>
  )
}

export default Jobs