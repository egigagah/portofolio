import { HTMLAttributes, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TextPlugin from "gsap/dist/TextPlugin";
import { FaReact, FaPhp } from 'react-icons/fa';
import parse from 'html-react-parser';
import hljs from "highlight.js";
import 'highlight.js/styles/tomorrow-night-blue.css'
import Link from "next/link";

const tabData = [
  {id: "ts", icon: <FaReact size={18} />, filename: "index.tsx",
    content: ['import { HTMLAttributes, useEffect, useState } from "react";', '', 'interface HiremeType extends HTMLAttributes<HTMLButtonElement> {', '  action: boolean', '}', '', 'export default function HireMeButton({action, ...rest}:HiremeType):JSX.Element {', '  const [showButton, setShowButton] = useState<boolean>(false)', '', '  useEffect(() => {', '    setShowButton(action)', '  }, [action])', '', '  if(showButton) return <button {...rest}>Hire Me</button>', '  else return <></>', '', '}'],
    lang: 'typescript'
  },
]

interface tabDataType {
  id: string | number,
  icon: JSX.Element,
  filename: string,
  content: string[],
  lang: string
}

interface MyProps {
  datas: tabDataType[]
}

// interface HiremeType extends HTMLAttributes<HTMLButtonElement> {
//   action: boolean
// }

export default function Skills({datas}:MyProps) {
  // const dataList = ([...datas])
  const [tabActive, setTabActive] = useState<tabDataType | undefined>(undefined)
  const [tabLoading, setTabLoading] = useState<boolean>(true)
  const tabRef = useRef<HTMLDivElement>(null)

  const convertContent = (dataParse:tabDataType) => {
    console.log(datas, "---")
    console.log(dataParse.content, "---")
    return new Promise<tabDataType>((resolve, reject) => {
      try {
        dataParse.content = dataParse.content.map(x => hljs.highlight(x, {language: dataParse.lang}).value)
        resolve(dataParse)
      } catch (error) {
        reject(error)
      }
    })
  }

  useEffect(() => {
    let ready = true
    if (ready) {
      gsap.set("#hireme", {autoAlpha: 0, yPercent: -100})
      setTabLoading(true)
      // tabData.forEach((x) => {
      //   x.content.forEach((c, i) => {
      //     x.content[i] = hljs.highlight(c, {language: x.lang}).value;
      //   })
      // })
      convertContent({...datas[0]}).then((res) => {
        setTabLoading(false)
        setTabActive(res)
      })
    }
    return () => {ready = false}
  }, [])

  useEffect(() => {
  //   setTimeout(() => {
  //     if (tabRef?.current?.childNodes != undefined && tabRef?.current?.childNodes.length > 0) {
  //       const els = document.querySelectorAll<HTMLElement>('.codeScript-writter')
  //       if (!tabLoading && els.length > 0) {
  //         typewritingCode(els)
  //       }
  //     }
  //   }, 1000)
    typewritingCode(document.querySelectorAll<HTMLElement>('.codeScript-writter'))
  }, [tabActive])

  const typewritingCode = (target:NodeListOf<HTMLElement>) => {
    const codeTl = gsap.timeline()
    codeTl.set("#hireme", {autoAlpha: 0, yPercent: -100})
    // gsap.utils.toArray<HTMLElement>('.codeScript-writter')
    target
    .forEach(el => {
      codeTl.fromTo(el,
        {text: "", display: 'block'},
        { text: el.innerHTML, stagger: el.innerText.length * 0.3 }
      )
    })
    // codeTl.to("#hireme", {autoAlpha: 1, yPercent: 0})
    codeTl.eventCallback("onComplete", () => {gsap.to("#hireme", {autoAlpha: 1, yPercent: 0})})
    ScrollTrigger.create({
      trigger: '#skill-section',
      start: 'top top',
      animation: codeTl,
      // markers: true
    })
  }

  return (
    <section id="skill-section" className="min-h-screen flex flex-col relative">
      <div className="flex flex-col py-16 md:py-24 lg:py-32 space-y-16">
        <div className="flex flex-col justify-center items-center h-full">
          <h3 className="text-2xl md:text-4xl font-extrabold text-transparent text-clip bg-clip-text bg-gradient-to-br from-blue-400 to-primary drop-shadow-lg">Packages</h3>
        </div>
        <div className="flex flex-row justify-center items-center px-4 md:px-16 lg:px-32">
          {/* component vscode */}
          <div id="cstm-editor" className="h-[65vh] w-full lg:h-[30rem] lg:w-[55rem] font-mono bg-accentDarkLight rounded-3xl flex flex-col overflow-clip border-[1px] border-accentDark shadow-2xl shadow-primary">
            <div id="bar-editor" className="flex flex-row w-full h-[3rem] text-secondary bg-accentDark overflow-scroll">
              {datas.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setTabLoading(true)
                  convertContent({...datas[idx]}).then((res) => {
                    setTabLoading(false)
                    setTabActive(res);
                  })}
                }
                className={`flex flex-row items-center min-w-[10rem] ${tabActive?.id == item?.id ? 'bg-accentDarkLight border-b-0 border-t-2 border-t-blue-500' : 'bg-transparent border-b-[1px]' } space-x-2 px-4 border-r-[1px] border-accentDark hover:bg-accentDarkLight`}
              >
                {item.icon}
                <p>{item.filename}</p>
              </button>)
            )}
            </div>
            <div ref={tabRef} id="body-editor" className="flex flex-col h-full w-full py-4 text-secondary hover:cursor-text overflow-scroll">
              {!tabLoading && tabActive?.content?.map((item, idx) => (
                <div key={idx} className="flex flex-row space-x-2 relative w-full">
                  <div id="number-body" className="flex flex-row w-6 sticky left-0 bg-accentDarkLight px-6">
                    <span className="pr-4 flex flex-row justify-end">{idx+1}</span>
                  </div>
                  <div id="text-body" className="flex flex-row flex-1">
                    <pre style={{padding: '0px !important', background: 'transparent !important'}}><code className={`${tabActive?.lang} codeScript-writter hidden`} style={{padding: '0px !important', background: 'transparent !important'}}>{parse(item)}</code></pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button id="hireme" onClick={() => console.log('')} className="px-8 py-4 bg-primary text-secondary rounded-xl font-semibold shadow-xl transform hover:scale-[1.02]" > Hire Me</button>
        </div>
        <div className="flex flex-row justify-center">
          <p>If you like this IDE Component, <Link href='https://www.npmjs.com/package/react-ide-component'><a className="underline text-primary" target='_blank'>check this out</a></Link></p>
        </div>
      </div>
    </section>
  )
}