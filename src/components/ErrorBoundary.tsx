import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Only log detailed errors in development to prevent information disclosure
    if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    // In production, send to monitoring service instead of console
    // TODO: Implement server-side error logging
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center min-h-[200px] bg-gradient-to-br from-primary/10 via-muted/50 to-primary/5 rounded-lg">
          <p className="text-sm text-muted-foreground">Content temporarily unavailable</p>
        </div>
      );
    }

    return this.props.children;
  }
}
