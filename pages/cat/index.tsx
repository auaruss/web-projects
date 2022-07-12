import type { NextPage } from 'next'
import styles from '../../styles/Cat.module.css'
import React, { useState } from 'react';


const CatImage = ({cat}) => {
  return (

    <a href={cat} className={styles['cat-link']}>
      <img src={cat} className={styles['cat-pic']} alt='a random cat pic (sorry, api has no alt text)'/>
    </a>
  )
}

const Cat: NextPage = () => {
  const [cats, setCats] = useState([])

  const addCat = () =>
    fetch('https://aws.random.cat/meow?ref=apilist.fun')
      .then((res) => res.json())
      .then((cat: JSON) => setCats([...cats, <CatImage cat={cat.file} key={cats.length} />]))
      console.log(cats)
  
  return (
    <div id={styles.page}>
      <div className={styles['top-bar']}>
        <button
          className={styles['get-cat']}
          onClick={addCat}
        >
        Get me a new cat
        </button>
      </div>
      <main id={styles.main}>
        {cats}
      </main>
    </div>
  )
}

export default Cat
