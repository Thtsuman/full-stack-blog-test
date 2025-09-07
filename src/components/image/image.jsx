import React from 'react'
import { Image as IKImg } from '@imagekit/react';


export const Image = ({ src, className = "w-8 h-8", alt = "picture", width, height }) => {
  return (
    <IKImg src={src} alt={alt} className={className} width={width} height={height} />
  )
}
