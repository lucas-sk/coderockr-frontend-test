import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return (
      <input
        type={type}
        className="placeholder:text-black/50 border rounded-sm border-shaft-950 p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-shaft-950/50"
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
