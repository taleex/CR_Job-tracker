import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field } from "@/components/ui/field";

export default function AuthForm() {
  return (
    <div className="flex flex-col items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Auth Form</CardTitle>
        </CardHeader>
        <CardContent>
            <form className="flex flex-col gap-4">
                <input></input>
                <button type="submit" className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
                    Submit
                </button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
}
