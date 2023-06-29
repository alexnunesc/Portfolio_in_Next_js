import Link from "next/link";

export default function projetos() {
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>projetos</h1>
      <Link href="/">Volta ao topo ^ </Link>
      <section>
        <h2>Projetos</h2>
      </section>
    </main>
  )
}
