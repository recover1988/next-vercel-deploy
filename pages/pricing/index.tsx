import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
import { DarkLayout } from "../../components/layouts/DarkLayout";
export default function PricingPage() {
  return (
    <>
      <h1>Pricing Page</h1>{" "}
      <h1 className="title">
        Ir a <Link href="/">Pricing</Link>
      </h1>
      <p className="description">
        Editar <code className="code">pages/pricing/index.js</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page:JSX.Element | JSX.Element[]) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
