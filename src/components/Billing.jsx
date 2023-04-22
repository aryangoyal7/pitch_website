import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>How it works for<br className='sm:block hidden'/>the guests?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The guest shall see the dynamic prices set by clubs for cover charge, they shall makes
          a booking and show up the at the within a time frame for hassle free entry!
          No calling, No lines, No BT.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          
        </div>
      </div>  
    </section>
  )
}

export default Billing
