import Portofolio from '@/components/landing/Portofolio'
import Skills from '@/components/landing/Skills'
import { PageWrapper } from '@/components/PageWrapper'
import Banner from '../components/landing/Banner'
import { FaReact, FaPhp } from 'react-icons/fa';


const tabData = [
  {id: "ts", icon: <FaReact size={18} />, filename: "index.tsx",
    content: ['import { HTMLAttributes, useEffect, useState } from "react";', '', 'interface HiremeType extends HTMLAttributes<HTMLButtonElement> {', '  action: boolean', '}', '', 'export default function HireMeButton({action, ...rest}:HiremeType):JSX.Element {', '  const [showButton, setShowButton] = useState<boolean>(false)', '', '  useEffect(() => {', '    setShowButton(action)', '  }, [action])', '', '  if(showButton) return <button {...rest}>Hire Me</button>', '  else return <></>', '', '}'],
    lang: 'typescript'
  },
  {id: "php", icon: <FaPhp size={18} />, filename: "index.php",
    content: ['<?php','  function Test(halo) {', '    var greetings = halo + "nama";', '    return greetings;','  }', '?>'],
    lang: 'php'
  },
]

export default function Home() {

  return (
    <PageWrapper titleTag='Egi Gagah Brilliant | Portofolio' noHeading={true}>
      <Banner />
      <Portofolio />
      <Skills datas={tabData}/>
    </PageWrapper>
  )
}
