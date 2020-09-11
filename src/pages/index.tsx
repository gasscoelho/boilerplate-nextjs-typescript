import Head from 'next/head'
import NextjsLogo from '../assets/images/nextjs.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div>
          <NextjsLogo />
        </div>
        <h1>ReactJS Project Structure</h1>
        <p>
          A ReactJS + Next.js app configured with Typescript, ESLint, Prettier,
          Styled Components and more.
        </p>
      </main>
    </Container>
  )
}

export default Home
