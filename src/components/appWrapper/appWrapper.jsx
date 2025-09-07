import { ImageKitProvider } from '@imagekit/react'
import React from 'react'

export const AppWrapper = ({ children }) => {
  return (
    <ImageKitProvider urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}>
      {children}
    </ImageKitProvider>
  )
}
