

import React, { FC } from 'react'
import { Button } from "."
import { ButtonProps } from "antd"

export const ButtonGradient: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button className={`bg-gradient !text-white  ${className}`} {...props}>
      {children}
    </Button>
  )
}
