import { FaPython, FaJava, FaHtml5, FaCss3, FaBootstrap, FaReact } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { DiJavascript } from 'react-icons/di';
import { SiGnubash, SiNextdotjs, SiTailwindcss, SiTypescript, SiPytorch, SiTensorflow, SiGit, SiFirebase, SiNumpy, SiProcessingfoundation, SiPandas, SiLinux, SiOpensuse, SiArchlinux, SiNeovim, SiDebian, SiLatex, SiRust } from 'react-icons/si';
import Image from 'next/image'
import Link from 'next/link';

const cards = [
  {
    title: 'Card 1',
    link: 'https://example.com/card1',
  },
  {
    title: 'Card 2',
    link: 'https://example.com/card2',
  },
  // Add more cards here...
];

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
              src="/PFP_PNG.png"
              alt="Home Logo"
              width={50}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative place-items-center">
        <h1 className="text-6xl text-emerald-400 font-semibold">my projects</h1>

      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="/"
          className="text-yellow-400 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-100 scroll-smooth"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-4xl`}>
            go back{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &lt;-
            </span>
          </h2>
        </a>

        <Link
          href="/blog"
          className="text-indigo-400 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-4xl`}>
            blog{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xl`}>
            in my humble opinion...
          </p>
        </Link>
      </div>
    </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center ">
        {cards.map((card, index) => (
              <a href={card.link} className="card bg-white rounded-lg p-4">
                <h2 className="text-xl font-bold">{card.title}</h2>
              </a>
          ))}
          </div>
      </div>
    </main>
  )
}
