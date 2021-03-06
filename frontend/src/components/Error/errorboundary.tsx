/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Component } from 'react';
import { Error } from './index';

class ErrorBoundary extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false};
    }

    static getDerivedStateFromError() {
        return { hasError: true};
    }

    componentDidCatch(error: Error, info: any) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <Error></Error>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;