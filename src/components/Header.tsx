import styles from './Header.module.css'

import bitcoinLogo from '../assets/bitcoin-logo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={bitcoinLogo} alt="Logo" />
      <strong> Crypto Feed </strong>
    </header>
  )
}