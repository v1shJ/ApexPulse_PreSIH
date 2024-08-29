import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MapErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI
      return (
        <View>
          <Text className="text-white">Failed to load map. Please try again later.</Text>
        </View>
      );
    }

    return this.props.children; 
  }
}

export default MapErrorBoundary;
