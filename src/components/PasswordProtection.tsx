import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection = ({ children }: PasswordProtectionProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Password for the site (change this to your desired password)
  const SITE_PASSWORD = "password123";

  useEffect(() => {
    // Check if already unlocked in session
    const unlocked = sessionStorage.getItem("site-unlocked");
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (inputPassword === SITE_PASSWORD) {
        sessionStorage.setItem("site-unlocked", "true");
        setIsUnlocked(true);
        toast.success("Access granted", {
          description: "Welcome to the site!",
        });
      } else {
        toast.error("Incorrect password", {
          description: "Please try again.",
        });
      }
      setIsLoading(false);
    }, 500);
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-background">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Protected Website</CardTitle>
          <CardDescription>
            This website is password protected. Please enter the password to continue.
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
              {isLoading ? "Verifying..." : "Enter Website"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordProtection;
