import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'
import styles from '../../styles/BackButton.module.css'

export default function BackButton() {
  const router = useRouter()
  return (
    <Button
      className={styles.back}
      variant='outline-primary'
      onClick={() => router.back()}
    >
      Back
    </Button>
  )
}
