import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AuthFormContent() {
  return (
    <CardContent>
            <form className="flex flex-col gap-4">
                <Input type="email" name="email" placeholder="Enter your email" />
                <Input type="password" name="password" placeholder="Enter your password" />
                <Button type="submit">Sign Up</Button>
            </form>
        </CardContent>
  )
}
