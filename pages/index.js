import Head from 'next/head'
import Image from 'next/image'
import Footer from 'components/footer'
import Header from 'components/header'
import Hero from 'components/hero'
import styles from '../styles/Home.module.css'
import Layout from 'components/layout'

export default function Home() {
  return (
      <Hero 
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
      />
  )
}
