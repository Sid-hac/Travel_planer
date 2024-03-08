
import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { SHA256 } from "crypto-js";



const alg = "HS256"
const secret = new TextEncoder().encode(process.env.JWT_SECRETE_KEY);
const createToken = async (email: string, userId: string) => {

    return await new SignJWT({ email, userId, isAdmin: true }).setProtectedHeader({ alg }).setExpirationTime("48h").sign(secret);
}

 const Prisma = new PrismaClient();

export const POST = async (req : Request) => {

    const { email, password }  = await req.json();
    const hashedPassword = SHA256(password).toString();
    console.log(hashedPassword);
    
     
    try {
        if (!email  || !password){
            return NextResponse.json({
                message: "email or password required",
                status: 400
            })
        }

        const user = await Prisma.admin.findUnique({
            where: {
                email : email,
                password : password 
            }
        })
     
        if (!user) {
            return NextResponse.json({
                message: "email or password incorrect",
                status: 400
            })
        } else {

            const token = await createToken(user.email , user.id)
            cookies().set("access_token", token);
            

            return NextResponse.json({
                userInfo:{
                    id : user.id,
                    email:user.email,                }
            } , {status: 200});
            

        }


    } catch (error : any) {
        return NextResponse.json({
            message: error.message,
            status: 500
        });

    }



}