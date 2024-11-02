
import { ButtonProps } from "antd/es/button/button"
import React, { FC } from 'react'
import { Button } from "."

export const ButtonGhost: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button className={`bg-gradient-light !border-transparent hover:!border-primary-45      ${className}`} isTextGradient {...props}>
      {children}
    </Button>
  )
}
