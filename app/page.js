import { FaPython, FaJava, FaHtml5, FaCss3, FaBootstrap, FaReact } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { DiJavascript } from 'react-icons/di';
import { SiGnubash, SiNextdotjs, SiTailwindcss, SiTypescript, SiPytorch, SiTensorflow, SiGit, SiFirebase, SiNumpy, SiProcessingfoundation, SiPandas, SiLinux, SiOpensuse, SiArchlinux, SiNeovim, SiDebian, SiLatex, SiRust } from 'react-icons/si';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className='main'>
    <div className="bg-wrapper flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 text-2xl space-x-3">
          <FaPython />
          <FaJava />
          <TbBrandCpp />
          <FaHtml5 />
          <FaCss3 />
          <DiJavascript />
          <SiTypescript />
          <FaBootstrap />
          <FaReact />
          <SiNextdotjs />
          <SiTailwindcss />
          <SiGit />
          <SiFirebase />
          <SiTensorflow />
          <SiPytorch />
          <SiNumpy />
          <SiPandas />
          <SiLinux />
          <SiOpensuse />
          <SiArchlinux />
          <SiDebian />
          <SiLatex />
          <SiNeovim />
          <SiRust />
          <SiGnubash />
          <SiProcessingfoundation />
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="./PFP_PNG.png"
              alt="Home Logo"
              width={50}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative place-items-center">
        <h1 className="text-6xl text-emerald-400 font-semibold">justanotherinternetguy&apos;s corner on the internet</h1>

      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="#about"
          className="text-red-400 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-100 scroll-smooth"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-4xl`}>
            about me {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>

        </a>

        <a
          href="#nerd"
          className="text-yellow-400 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-100 scroll-smooth"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-4xl`}>
            academics{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>


      </div>
    </div>
      
    <div id='about'>
      <div className='mt-4 space-y-2 text-center'>
        <h2 className='text-4xl text-red-400 font-bold'>who am i (and what do i do with my time)?</h2>
        <ul>
          <li className='text-2xl text-slate-300'>1. anything related about technology! i enjoy building computers and learning about the latest and greatest in cyberspace.</li>
          <li className='text-2xl text-slate-300'>2. watching formula 1 and other forms of motorsport that turn both left and right (looking at you, NASCAR)</li>
          <li className='text-2xl text-slate-300'>3. cybersec, infosec, and OSINT</li>
          <li className='text-2xl text-slate-300'>4. bubble tea</li>
          <li className='text-2xl text-slate-300'>5. gnu/linux and the open source software movement (opensuse+arch btw)</li>
          <li className='text-2xl text-slate-300'>6. lord of the rings and conlangs (quenya!!)</li>
          <li className='text-2xl text-slate-300'>7. linux ricing in my free time</li>
        </ul>
      </div>
    </div>
      <hr className="w-8 h-8 mx-auto my-8 bg-slate-600 border-0 rounded md:my-12" />
    <div id='nerd'>
      <div className='mt-4 space-y-2 text-center'>
        <h2 className='text-4xl text-yellow-400 font-bold'>my academic interests and achievements</h2>
        <ul>
          <li className='text-2xl text-slate-300 font-bold font-mono'>computer science</li>
            <ul>
              <li className='text-2xl text-slate-300'><a href="https://www.acsl.org/about" target='_blank' className='text-sky-400 underline'>ACSL</a> finalist</li>
              <li className='text-2xl text-slate-300'>machine learning (my current field of interest/research/study)</li>
              <li className='text-2xl text-slate-300'>system administration with unix/linux</li>
              <li className='text-2xl text-slate-300'>web development (but i&apos;m happy to do any sort of software development)</li>
              <li className='text-2xl text-slate-300'>applied mathematics with cs</li>
              <li className='text-2xl text-slate-300'>interested in cybersec/infosec</li>
            </ul>
        </ul>

        <ul>
          <li className='text-2xl text-slate-300 font-bold font-mono mt-9'>robotics</li>
            <ul>
              <li className='text-2xl text-slate-300'>captain of 8405 millburn robotics</li>
              <li className='text-2xl text-slate-300'>i&apos;m very interested in applications of cs in robotics, particularly in <strong>control theory</strong> and <strong>robot automation.</strong></li>
            </ul>
        </ul>

        <ul>
          <li className='text-2xl text-slate-300 font-bold font-mono mt-9'>biology/chemistry</li>
            <ul>
              <li className='text-2xl text-slate-300'><a href="https://www.usabo-trc.org" target="_blank" className='text-sky-400 underline'>USABO</a> semifinalist</li>
              <li className='text-2xl text-slate-300'><a href="https://biologycompetition.org" target="_blank" className='text-sky-400 underline'>ARBC</a> regionals #1</li>
              <li className='text-2xl text-slate-300'>bioinformatics and applied cs in biology</li>
              <li className='text-2xl text-slate-300'>protein folding and protein structure research</li>
              <li className='text-2xl text-slate-300'>biochem and organic chem seems pretty fun as well! (though i only know a very elementary level of organic chem)
</li>
            </ul>
        </ul>

        <ul>
          <li className='text-2xl text-slate-300 font-bold font-mono mt-9'>physics</li>
            <ul>
              <li className='text-2xl text-slate-300'>currently prepping for f=ma/USAPhO</li>
            </ul>
        </ul>
          <div className='pb-24'>
          </div>
      </div>
    </div>
    </main>
  )
}
