import Layout from "@theme/Layout";
import HomepageHeader from "../components/HomepageHeader";
import HomepageContent from "../components/HomepageContent";

export default function Home() {
    return (
        <Layout title="Home" description="Landing page for docusaurus-sandbox-2026-01-15">
            <HomepageHeader />
            <HomepageContent />
        </Layout>
    );
}
