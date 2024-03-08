"use client"

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

export function Provider({children} : {children: React.ReactNode}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}