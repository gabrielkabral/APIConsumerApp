import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class ComponenteUsuario extends Component {
  render () {
    const { senha, apelido, ultimoNome, idade, primeiroNome } = this.props
    return (
      <View style={{height: 200, width: 150, borderWidth: 1, borderColor: 'red', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Text>{`Senha: ${senha}`}</Text>
        <Text>{`Nick: ${apelido}`}</Text>
        <Text>{`Last Name: ${ultimoNome}`}</Text>
        <Text>{`Idade: ${idade}`}</Text>
        <Text>{`Primeiro Nome: ${primeiroNome}`}</Text>
      </View>
    )
  }
}
