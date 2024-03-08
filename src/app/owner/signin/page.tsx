"use client"


import Image from "next/image"
import logo from "../../../../public/logo.png"
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useAppStore } from "@/store"





const Login = () => {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUserInfo} = useAppStore();

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        if(data.userInfo){
          setUserInfo(data.userInfo);
          router.push('/owner');
        }
      }


    } catch (error: any) {
      console.log(error.message );
      
    }

   



  }


  return (
    <div className="h-[100vh] flex justify-center items-center bg-no-repeat bg-center bg-black" style={{ backgroundImage: 'url("/home/home-bg.png")' }}>

      <div className="absolute bg-black bg-opacity-30"></div>

      <Card className="shadow-lg flex flex-col gap-3 bg-opacity-15 sm:w-[30rem] max-w-full">
        <CardHeader className="flex flex-col gap-3 justify-center items-center">
          <div className="flex flex-col gap-1 justify-center items-center ">
            <Image src={logo} alt="logo" width={80} height={80} className="rounded-full object-contain" />
            <span className="flex gap-2 text-xl font-bold text-white">
              <span className="text-green-600 font-extrabold">
                JourneyJot
              </span>
              Admin Login
            </span>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col gap-3 justify-center items-center">
          <div className="flex flex-col gap-3 w-full">
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        </CardBody>
        <CardFooter className="flex justify-center items-center">
          <Button className="text-medium font-semibold btn-Gradient w-full" onClick={handleLogin}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login