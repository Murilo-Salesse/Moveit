import { useContext } from 'react';
import styles from '../styles/components/Porfile.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Murilo-Salesse.png" alt="Murilo Salesse" />

      <div>
        <strong>Murilo Salesse</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
