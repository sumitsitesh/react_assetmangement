import React from 'react';
class ErrorComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidCatch(error, errorInfo) {
        console.log('Error', error)
        console.log('Error', error)
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        // You can render any custom fallback UI
        return (<h1 style={{ display: 'flex' }}> No asset data found </h1>)
    }
}

export default ErrorComponent;