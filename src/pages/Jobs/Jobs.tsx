

// types 
import { Job } from "../../types/models"

interface JobProps {
  jobs: Job[];
}


const Jobs = (props: JobProps): JSX.Element => {
  const { jobs } = props

  return (
    <>
    </>
  )
}

export default Jobs