"use client"

import { userService } from "@/services"
import {
  AuthButton,
  AuthFieldWrap,
  AuthFormMainContainer,
  AuthFormWrap,
  AuthSubmit,
  Loading,
  LoginDataInterface,
  RegisterInput,
} from "@/shared"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { FC, useEffect, useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "@/shared/types/yupSchema"
import { toast } from "@/components/ui/use-toast"

export const LoginForm: FC = () => {
  const Router = useRouter()
  const methods = useForm<LoginDataInterface>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  })

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (data: LoginDataInterface) => {
    try {
      setLoading(true)
      const response = await userService.login(data)
      toast({
        title: " Login Successful",
        description: " ",
        style: {
          backgroundColor: "#4B0082",
          color: "#fff",
        },
      })
      setLoading(false)
      Router.push("/dashboard")
    } catch (error) {
      setLoading(false)

      toast({
        title: "Something Went Wrong",
        description: `${error}`,
        variant: "destructive",
        style: {
          backgroundColor: "#f44336",
          color: "#fff",
          top: "20px",
          right: "20px",
        },
        duration: 5000,
      })
    }
  }

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      Router.push("/dashboard")
    }
  }, [])

  return (
    <>
      {loading && <Loading />}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <AuthFormMainContainer>
            <AuthFormWrap>
              <AuthFieldWrap>
                <RegisterInput
                  name={`email`}
                  inputPlaceholder={`Enter Email Address`}
                  extraClass={`mt-6`}
                  label='Email Address'
                />
                <RegisterInput
                  name={`password`}
                  inputPlaceholder={`Enter 8 characters long`}
                  label='Password'
                  childrenHandleClick={() => setShowPassword((state) => !state)}
                  type={showPassword ? "text" : "password"}
                  extraClass={`mt-6  `}
                >
                  <Image
                    src={`/icons/eye-slash.svg`}
                    alt='show password'
                    width={24}
                    height={24}
                    className='password_field-input  '
                  />
                </RegisterInput>
              </AuthFieldWrap>

              <div className=' self-end '>
                <Link
                  className='text-neutral-80 underline '
                  href='/forgot-password'
                >
                  Forgot Password?
                </Link>
              </div>
            </AuthFormWrap>
            <AuthSubmit
              btnText='Log In'
              linkHref='/register'
              linkPreText={`Don't have an account?`}
              linkText='Sign Up'
            />
          </AuthFormMainContainer>
        </form>
      </FormProvider>
    </>
  )
}
