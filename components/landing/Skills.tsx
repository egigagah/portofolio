import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FaReact, FaPhp } from 'react-icons/fa';
import parse from 'html-react-parser';
import hljs from "highlight.js";
import 'highlight.js/styles/tomorrow-night-blue.css'

const tabData = [
  {id: "ts", icon: <FaReact size={18} />, filename: "index.tsx",
    content: ['function Name(nama:string):string {', '  const greetings = `Halo ${nama}`;', '  return greetings;','}'], lang: 'typescript'
  },
  // {id: "php", icon: <FaPhp size={18} />, filename: "index.php",
  // content: ['<?php','  function Test(halo) {', '    var greetings = halo + "nama";', '    return greetings;','  }', '?>'], lang: 'php'
  // },
  // {id: "ts1", icon: <FaReact size={18} />, filename: "index.tsx",
  //   content: ['function Name(halo:string):string {', '  const greetings = `${halo} nama`;', '  return greetings;','}'], lang: 'typescript'
  // },
  // {id: "php1", icon: <FaPhp size={18} />, filename: "index.php",
  // content: ['<?php','  function Test(halo) {', '    var greetings = halo + "nama";', '    return greetings;','  }', '?>'], lang: 'php'
  // },
  // {id: "ts2", icon: <FaReact size={18} />, filename: "index.tsx",
  //   content: ['function Name(halo:string):string {', '  const greetings = `${halo} nama`;', '  return greetings;','}'], lang: 'typescript'
  // },
  // {id: "php2", icon: <FaPhp size={18} />, filename: "index.php",
  // content: ['<?php','  function Test(halo) {', '    var greetings = halo + "nama";', '    return greetings;','  }', '?>'], lang: 'php'
  // },
  // {id: "ts3", icon: <FaReact size={18} />, filename: "index.tsx",
  //   content: ['function Name(halo:string):string {', '  const greetings = `${halo} nama`;', '  return greetings;','}'], lang: 'typescript'
  // },
  // {id: "php3", icon: <FaPhp size={18} />, filename: "index.php",
  // content: ['<?php','  function Test(halo) {', '    var greetings = halo + "nama";', '    return greetings;','  }', '?>'], lang: 'php'
  // },
  // {id: "ts4", icon: <FaReact size={18} />, filename: "index.tsx",
  //   content: ['function Name(halo:string):string {', '  const greetings = `${halo} nama`;', '  return greetings;','}'], lang: 'typescript'
  // },
  // {id: "php4", icon: <FaPhp size={18} />, filename: "index.php",
  // content: ['<?php','  function Test(halo) {', '    var greetings = halo + "nama";', '    return greetings;','  }', '?>'], lang: 'php'
  // },
]

interface tabDataType {
  id: string | number,
  icon: JSX.Element,
  filename: string,
  content: string[],
  lang: string
}

export default function Skills() {
  const [tabActive, setTabActive] = useState<tabDataType | undefined>(undefined)
  const [tabLoading, setTabLoading] = useState<boolean>(true)

  useEffect(() => {
    let ready = true
    if (ready) {
      setTabLoading(true)
      tabData.forEach((x) => {
        x.content.forEach((c, i) => {
          x.content[i] = hljs.highlight(c, {language: x.lang}).value;
        })
      })
      setTabActive(tabData[0])
      setTabLoading(false)
    }
    return () => {ready = false}
  }, [tabData])

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.codeScript-writter')
    if (!tabLoading && els.length > 0) typewritingCode(els)
  }, [tabActive])

  const typewritingCode = (target:NodeListOf<HTMLElement>) => {
    const codeTl = gsap.timeline()
    // gsap.utils.toArray<HTMLElement>('.codeScript-writter')
    target
    .forEach(el => {
      codeTl.fromTo(el,
      {text: ""},
      { text: el.innerHTML, delay: 0.5,
        stagger: el.innerText.length,
      })
    })
    ScrollTrigger.create({
      trigger: '#skill-section',
      start: 'top top',
      animation: codeTl,
    })
  }

  return (
    <section id="skill-section" className="min-h-screen flex flex-col relative">
      <div className="flex flex-col py-16 md:py-24 lg:py-32 space-y-16">
        <div className="flex flex-col justify-center items-center h-full">
          <h3 className="text-2xl md:text-4xl font-extrabold text-transparent text-clip bg-clip-text bg-gradient-to-br from-blue-400 to-primary drop-shadow-lg">Tech Stack</h3>
        </div>
        <div className="flex flex-row justify-center items-center px-4 md:px-16 lg:px-32">
          {/* component vscode */}
          <div id="cstm-editor" className="h-[65vh] w-full lg:h-[30rem] lg:w-[55rem] font-mono bg-accentDarkLight rounded-3xl flex flex-col overflow-clip border-[1px] border-accentDark shadow-2xl shadow-primary">
            <div id="bar-editor" className="flex flex-row w-full h-[3rem] text-secondary bg-accentDark overflow-scroll">
              {tabData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setTabActive(item)}
                className={`flex flex-row items-center min-w-[10rem] ${tabActive?.id == item?.id ? 'bg-accentDarkLight border-b-0 border-t-2 border-t-blue-500' : 'bg-transparent border-b-[1px]' } space-x-2 px-4 border-r-[1px] border-accentDark hover:bg-accentDarkLight`}
              >
                {item.icon}
                <p>{item.filename}</p>
              </button>)
            )}
            </div>
            <div id="body-editor" className="flex flex-col h-full w-full px-6 py-4 text-secondary hover:cursor-text overflow-scroll relative">
              {!tabLoading && tabActive?.content?.map((item, idx) => (
                <div key={idx} className="flex flex-row space-x-2 relative">
                  <div id="number-body" className="flex flex-row w-6 sticky left-0 top-0 bg-accentDarkLight">
                    <span className="pr-4 flex flex-row justify-end">{idx+1}</span>
                  </div>
                  <div id="text-body" className="flex flex-row flex-1">
                    <pre style={{padding: '0px !important', background: 'transparent !important'}}><code className={`${tabActive?.lang} codeScript-writter`} style={{padding: '0px !important', background: 'transparent !important'}}>{parse(item)}</code></pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}