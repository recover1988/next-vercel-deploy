import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";
export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>{" "}
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className="description">
        Editar <code className="code">pages/about.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page:JSX.Element | JSX.Element[]) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
