import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Vixora — Engineering Intelligent Digital Experiences',
    description:
        'Learn about Vixora — our story, mission, values, team, and what drives us to build exceptional digital products.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
