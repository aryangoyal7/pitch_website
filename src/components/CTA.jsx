import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Be on your platoform today!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Thirtyml is one of a kind exclusive clubbing platoform, soon going to the the hottest
          party app hosting the best events in town, don't miss out on the first mover advantage!
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
