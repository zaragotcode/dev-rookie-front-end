import { Job } from "../../types/models"

interface ProfileCardProps {
  job: Job
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { job } = props

  return (
    <article>
      <div>
        {/* <h1>{props.companyName}</h1> */}
      </div>
    </article>
  )
}

export default ProfileCard