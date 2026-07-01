import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function AuthForm() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
        </CardHeader>
        <CardContent>
            <form className="flex flex-col gap-4">
                <Input type="email" name="email" placeholder="Enter your email" />
                <Input type="password" name="password" placeholder="Enter your password" />
                <Button type="submit">Sign Up</Button>
            </form>
        </CardContent>
      </Card>
    </section>
  )
}
