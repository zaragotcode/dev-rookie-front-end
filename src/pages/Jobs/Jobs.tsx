import JobCard from "../../components/JobCard/JobCard";

// types 
import { Job } from "../../types/models"
import { Link } from "react-router-dom";

interface JobProps {
  jobs: Job[];
}


const Jobs = (props: JobProps): JSX.Element => {
  const { jobs } = props

  return (
    <main>
      <h1>This is my list!</h1>
      {jobs.map((job: Job, idx) => 
      <Link key={idx} to={`/jobs/${job.id}`}>
      <JobCard
        key={job.id}
        job={job}
      />
      </Link>
      )}
    </main>
  )
}

export default Jobs