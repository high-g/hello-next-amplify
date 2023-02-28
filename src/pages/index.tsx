import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import type { NextPage, GetServerSideProps } from 'next'

type fetchData = {
  userId: number
  id: number
  title: string
  body: string
}

type Props = {
  posts: fetchData[]
}

const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hello world</h1>

        {posts.map((item, key) => {
          return (
            <div key={key}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <p>userId: {item.userId}</p>
            </div>
          )
        })}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Home
