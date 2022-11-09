import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
      <div className="dashboard-layout">
        <nav>
            <Link href='/dashboard/settings'>Settings</Link>
            <Link href='/dashboard/analytics'>Analytics</Link>
        </nav>
        {children}
      </div>
  )
}
