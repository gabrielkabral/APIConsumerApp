import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import ComponenteUsuario from '../Components/ComponenteUsuario'

// Styles
import styles from './Styles/LaunchScreenStyles'
import NewActions from '../Redux/NewRedux'
import { usuariosSeletores } from '../Seletores/NewSeletores'

class NewScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ComponenteUsuario
          senha={'123123'}
          apelido={'auheuhae'}
          ultimoNome={'Nome'}
          idade={12}
          primeiroNome={'dale'}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  usuarios: usuariosSeletores(state)
})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewScreen)
