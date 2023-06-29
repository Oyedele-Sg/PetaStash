import { IllustrationComponent, RegisterForm } from "@/components"
import Image from "next/image"
import React from "react"

export default function Register() {
  return (
    <div>
      <div className='flex   '>
        <section className='flex-1  h-full my-auto    '>
          <div className=' '>
            <IllustrationComponent
              illustrationName='sign-up'
              width={554.1}
              height={400}
            />
          </div>
        </section>
        <section className='flex-1   h-full    '>
          <div className=' bg-grey  w-full py-[164px] px-[50px] '>
            <div className='flex flex-col gap-12 '>
              <h1 className='  text-purple font-headline__large  '>
                Create an Account
              </h1>
              <RegisterForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
