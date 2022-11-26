import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";
import React,{ FC } from "react";
export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <h1 className="title">
        Ir a <Link href="/about">About</Link>
      </h1>
      <p className="description">
        Editar <code className="code">pages/index.js</code>
      </p>
    </>
  );
}

HomePage.getLayout = function getLayout(page:JSX.Element | JSX.Element[]) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
