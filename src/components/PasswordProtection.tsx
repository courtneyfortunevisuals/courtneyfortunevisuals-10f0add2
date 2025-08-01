
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface PasswordProtectionProps {
  password: string;
  projectId: number;
  onUnlock: () => void;
}

const PasswordProtection = ({ password, projectId, onUnlock }: PasswordProtectionProps) => {
  const [inputPassword, setInputPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (inputPassword === password) {
        // Store in session storage that this project is unlocked
        sessionStorage.setItem(`project-${projectId}-unlocked`, "true");
        onUnlock();
        toast({
          title: "Access granted",
          description: "You now have access to this protected project.",
        });
      } else {
        toast({
          title: "Incorrect password",
          description: "Please try again with the correct password.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh] p-6">
      <Card className="w-full max-w-md shadow-lg animate-fade-in">
        <CardHeader>
          <CardTitle>Protected Project</CardTitle>
          <CardDescription>
            This project requires a password to view. Please enter the password below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="w-full"
              required
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Checking..." : "Unlock Project"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordProtection;
