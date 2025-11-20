import { SignIn } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { neobrutalism } from "@clerk/themes"
import Image from "next/image"
import { ReactNode } from "react"

async function MainLayout({children} :{children: ReactNode}) {

  const user = await currentUser()

  if(!user){
    return (
      <main className="flex flex-col items-center p-5 gap-10 animate-fadeIn" >
      <section className="flex flex-col items-center">
        <Image src='assets/logo.svg' width={100} height={100} alt="logo" />
        <h1 className="text-lg font-extrabold lg:text-2xl">
          Connect, Communicate, Collaborate in Real-Time 
        </h1>
      </section>
      <div className="mt-3">
        <SignIn appearance={{baseTheme: neobrutalism}}  />
      </div>
    </main>
    )
  }

  return (
    <main className="animate-fade-in">
      {children}
    </main>
  )
}

export default MainLayout