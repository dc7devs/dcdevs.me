import Head from "next/head"
import { useRouter } from 'next/router'
import Link from "next/link"
import { ReactNode } from "react"
import Header from "./header"
import NextProgress from "next-progress"
import cx from "clsx"

interface PropsChildren {
    children: ReactNode
}

export default function Layout({ children }: PropsChildren) {
    const router = useRouter();
    const checkRouter = (router.pathname == "/");
    const title = cx(router.pathname != "/" ? router.pathname.slice(1).toLowerCase()+" - " : "", "Diego Silva");
    
    return (
        <div className="h-screen w-full font-pontserrat">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <NextProgress color="rgb(139 92 246)" delay={500} />
            
            <Header />
            
            <main className="w-full h-full pt-16 sm:pt-24">
                <div className={cx("px-4 py-7 sm:p-y sm:pr-0 sm:w-4/5 h-full mx-auto overflow-y-auto relative", checkRouter ? "" : "md:border-l-[2.8px] border-dashed border-black/25 dark:border-white/25")}>
                    {children}
                    <div className={cx("hidden sm:block", checkRouter ? "sm:absolute sm:bottom-4 sm:right-2 lg:bottom-10 lg:left-0" : "sm:fixed sm:top-1/2 sm:bottom-1/2 sm:right-[91%]")}>
                        <ul className={cx("flex gap-3 md:gap-4", checkRouter ? "sm:flex-row" : "sm:flex-col", "items-center")}>
                            <li>
                                <Link href="https://github.com/dc7devs" target="__blank">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
                                </Link>
                            </li>

                            <li>
                                <Link href="https://www.linkedin.com/in/diego-c-silva-487b171a5/" target="__blank">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
                                </Link>
                            </li>

                            <li>
                                <Link href="https://www.youtube.com/channel/UCQCBtV_fonx-JZj-OnIFcSw" target="__blank">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300" xmlns="http://www.w3.org/2000/svg"><path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path></svg>
                                </Link>
                            </li>

                            <li>
                                <Link href="https://discord.com/users/687863744541491294" target="__blank">
                                    <svg className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"></path></svg>
                                </Link>
                            </li>

                            <li>
                                <Link href="mailto:diegocaetano444@outlook.com" target="__blank">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300"><path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}