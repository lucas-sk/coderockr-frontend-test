interface SendIconProps extends React.SVGProps<SVGSVGElement> {}

export function SendIcon(props: SendIconProps) {
  return (
    <svg
      width={21}
      height={18}
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 18l21-9L0 0v7l15 2-15 2v7z" fill="currentColor" />
    </svg>
  )
}
