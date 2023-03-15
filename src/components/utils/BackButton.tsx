import Link from 'next/link'
import { Button } from 'react-bootstrap'
import styles from '../../styles/BackButton.module.css'

export default function BackButton() {
  return (
    <Link href='..'>
      <Button className={styles.back} variant='outline-primary'>
        Back
      </Button>
    </Link>
  )
}
