"use client"
import Header from "./components/Header";

const sayHello = () => {
  alert("About");
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
<h1>Hello there</h1>
<button onClick={sayHello} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Say hello</button>
    </main>
  )
}
