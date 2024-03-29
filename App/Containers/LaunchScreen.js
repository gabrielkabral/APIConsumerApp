import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/LaunchScreenStyles'
import NewActions from '../Redux/NewRedux'

class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => {
          this.props.request()
        }}>
          <Text>aaa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          this.props.navigation.navigate('NewScreen')
        }>
          <Text>bbb</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  request: NewActions.newRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchScreen)
