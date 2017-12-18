import React, { Component, PropTypes } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class Footer extends Component {

  static propTypes = {
    onRemoveCompleted: PropTypes.func.isRequired,
  }

  render() {
    const {onRemoveCompleted} = this.props

    return (
        <TouchableOpacity style={styles.footer} onPress={onRemoveCompleted}>
          <Text style={styles.text}>Remove Completed</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    padding: 15,
  },
  text: {
    textAlign: 'center',
    color: '#CD5C5C',
  },
})
