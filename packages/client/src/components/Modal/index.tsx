import Button from '../Button'
import mello from './mello.svg'
import styles from './styles.module.css'

interface Props {
  open?: boolean;
  onClose?: () => void;
}

function Modal({ open, onClose }: Props) {
  if(!open) {
    return null;
  }

  const onClick = () => {
    window.open('https://forms.gle/FQN8UJYUAWKpbmBG7')

    if (onClose) {
      onClose()
    }
  }

  return (
    <div className={styles.shadow}>
      <dialog open={open} className={styles.modal}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={mello} alt="success marshmellow" />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Success!</h2>
          <p className={styles.text}>A demo of the generated tokens is being downloaded. You can also request more tokens and a detailed analysis</p>
        </div>

        <div className={styles.footer}>
          <Button variation="secondary" text="Maybe later" onClick={onClose} />
          <Button text="I want more tokens" onClick={onClick} />
        </div>
      </dialog>
    </div>
  )
}

export default Modal
