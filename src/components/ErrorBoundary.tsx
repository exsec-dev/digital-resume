import { Component, type ErrorInfo, type ReactNode } from "react";
import { ErrorFallback } from "./ErrorFallback";

const CHUNK_LOAD_ERROR_REGEX =
  /Failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed/i;

const RELOAD_FLAG = "chunk-reload-attempted";

const getReloadAttempt = (): string | null => {
  try {
    return sessionStorage.getItem(RELOAD_FLAG);
  } catch {
    return null;
  }
};

const setReloadAttempt = (): void => {
  try {
    sessionStorage.setItem(RELOAD_FLAG, "1");
  } catch {
    // private mode can block storage
  }
};

const clearReloadAttempt = (): void => {
  try {
    sessionStorage.removeItem(RELOAD_FLAG);
  } catch {
    // nothing to clean up if storage is blocked
  }
};

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (
      CHUNK_LOAD_ERROR_REGEX.test(error.message) &&
      !getReloadAttempt()
    ) {
      setReloadAttempt();
      window.location.reload();
      return;
    }

    console.error("Uncaught error:", error, info);
  }

  componentDidMount(): void {
    if (!this.state.hasError) {
      clearReloadAttempt();
    }
  }

  handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorFallback onReload={this.handleReload} />;
    }

    return this.props.children;
  }
}
