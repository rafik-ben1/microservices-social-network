import React, { ReactElement } from 'react'
import { Label } from './ui/label'

const InputRow = ({label , children} : {label? : string, children : ReactElement}) => {
  return (
<div className="space-y-2">
   { label && <Label>{label}</Label>}
    {React.cloneElement(children)}
</div>
)
}

export default InputRow