import type { GetStaticPaths, GetStaticProps } from "next";
import { SERVICE_CATEGORIES, type Service } from "@/data/services";
import ServiceDetail from "@/components/ServiceDetail";

const ALL = SERVICE_CATEGORIES.flatMap(c => c.items);

export default function ServicePage({ service }: { service: Service}) {
    return (
        <>
            <ServiceDetail service={service} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = ALL.filter(s => s.active !== false).map(s => ({ params: { id: s.id } }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ service: Service }> = async ({ params }) => {
    const id = params?.id as string;
    const service = ALL.find(s => s.id === id);
    if (!service || service.active === false) return { notFound: true };
    return { props: { service } };
};