export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className=' bg-grey min-h-screen  bug '>
      <div className='max-w-[1440px] mx-auto'>{children}</div>
    </main>
  )
}
