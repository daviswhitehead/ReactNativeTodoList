import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'

import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'
import Footer from '../components/Footer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  addItem = (item) => {
    const {dispatch} = this.props
    dispatch(actionCreators.addItem(item))
  }

  removeItem = (index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.removeItem(index))
  }

  toggleItemCompleted = (index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.toggleItemCompleted(index))
  }

  removeCompleted = (item) => {
    const {dispatch} = this.props
    dispatch(actionCreators.removeCompleted(item))
  }

  render() {
    const {items} = this.props

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <Title>todo list</Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmit={this.addItem}
        />
        <View style={styles.divider}/>
        <List
          items={items}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
        />
        <View style={styles.divider}/>
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
