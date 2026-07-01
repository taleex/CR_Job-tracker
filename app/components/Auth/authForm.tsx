import { Card } from "@/components/ui/card";
import AuthFormHeader from "./AuthFormHeader";
import AuthFormContent from "./AuthFormContent";

export default function AuthForm() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full">
      <Card className="w-full max-w-sm">
        <AuthFormHeader />
        <AuthFormContent />
      </Card>
    </section>
  )
}
