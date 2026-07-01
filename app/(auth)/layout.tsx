import AuthForm from "../components/Auth/authForm";
import NavBar from "../components/HomePage/navBarSection/navBar";

export default function Auth({children}: {children: React.ReactNode }) {
  return (
    <main>
      <NavBar />
      <section className="flex gap-4 justify-between p-16">
        <img src="https://placehold.net/400x400.png" alt="Placeholder" />
          {children}
        <AuthForm />
      </section>
    </main>  
  )
}
