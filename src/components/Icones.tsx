type Props = { className?: string }

export function IconeInstagram({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function Divisor() {
  return (
    <div className="flex items-center justify-center gap-4" aria-hidden="true">
      <span className="bg-dourado h-px w-24 sm:w-36" />
      <svg viewBox="0 0 24 24" className="text-dourado size-5" fill="none">
        <path
          d="M12 20s-7.5-4.3-7.5-9.6C4.5 7.7 6.5 6 8.6 6c1.5 0 2.7.8 3.4 2 .7-1.2 1.9-2 3.4-2 2.1 0 4.1 1.7 4.1 4.4C19.5 15.7 12 20 12 20z"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
      </svg>
      <span className="bg-dourado h-px w-24 sm:w-36" />
    </div>
  )
}
