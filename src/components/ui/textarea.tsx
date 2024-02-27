import React from 'react'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ ...props }, ref) => {
    return (
      <textarea
        className="placeholder:text-black/50 border rounded-sm border-shaft-950 p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-shaft-950/50"
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
