import React from 'react'
import { ImageKitProvider } from '@imagekit/react'

export const AppWrapper = ({ children }) => {
  return (
    <ImageKitProvider urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}>
      {children}
    </ImageKitProvider>
  )
}
