import { Component, ReactNode } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

render() : {
    if(this.state.hasError){
        return this.props.fallback;
    }
    return this.props.children
}
}
