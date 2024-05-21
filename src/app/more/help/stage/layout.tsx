import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stage System",
  description: "Generated by Bezt",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-alice-blue w-[380px] no-scrollbar h-screen mx-auto relative z-1 overflow-y-scroll">
      <div>{children}</div>
    </div>
  )
}
