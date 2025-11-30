import { useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface PasswordPromptProps {
  projectId: number;
  projectTitle: string;
  onSuccess: (projectData: any) => void;
}

export const PasswordPrompt = ({ projectId, projectTitle, onSuccess }: PasswordPromptProps) => {
  const [password, setPassword] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password.trim()) {
      toast({
        title: "Password required",
        description: "Please enter a password to access this project.",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);

    try {
      // Generate or retrieve session ID for rate limiting
      let sessionId = sessionStorage.getItem('password_session_id');
      if (!sessionId) {
        sessionId = crypto.randomUUID();
        sessionStorage.setItem('password_session_id', sessionId);
      }

      const { data, error } = await supabase.rpc('get_protected_project_content', {
        p_project_id: projectId,
        p_password: password,
        p_session_id: sessionId
      });

      if (error) {
        // Check if rate limited
        if (error.message?.includes('Too many failed attempts')) {
          toast({
            title: "Too many attempts",
            description: "Please wait 15 minutes before trying again.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      if (data) {
        toast({
          title: "Access granted",
          description: "Welcome to the project!",
        });
        onSuccess(data);
      } else {
        toast({
          title: "Incorrect password",
          description: "Please try again.",
          variant: "destructive",
        });
        setPassword("");
      }
    } catch (error) {
      // Only log in development
      if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
        console.error('Password verification error:', error);
      }
      toast({
        title: "Error",
        description: "Failed to verify password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Protected Project</CardTitle>
          <CardDescription>
            "{projectTitle}" is password protected. Please enter the password to view this project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isVerifying}
                className="text-center"
                autoFocus
              />
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isVerifying}
            >
              {isVerifying ? "Verifying..." : "Access Project"}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Contact the owner if you don't have access.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
