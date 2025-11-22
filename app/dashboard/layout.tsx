import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans">
            <Sidebar />

            {/* Main Content */}
            <main className="lg:pl-64 min-h-screen flex flex-col">
                {children}
            </main>
        </div>
    );
}
