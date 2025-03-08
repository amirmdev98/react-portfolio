import { Component, ErrorInfo, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 2rem;
`;

const ReloadButton = styled.button`
  background: ${({ theme }) => theme.accent.primary};
  color: ${({ theme }) => theme.background.primary};
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            {this.state.error?.message || "An unexpected error occurred"}
          </ErrorMessage>
          <ReloadButton onClick={this.handleReload}>Reload Page</ReloadButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}
