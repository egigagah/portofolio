import Portofolio from '@/components/landing/Portofolio'
import Skills from '@/components/landing/Skills'
import { PageWrapper } from '@/components/PageWrapper'
import Banner from '../components/landing/Banner'

export default function Home() {

  return (
    <PageWrapper titleTag='Egi Gagah Brilliant | Portofolio' noHeading={true}>
      <Banner />
      <Portofolio />
      <Skills />
    </PageWrapper>
  )
}
