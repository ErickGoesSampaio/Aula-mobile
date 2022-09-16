import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class Operacao extends Component {
	render() {
		return (
			<Picker 
				style={styles.operacao}
				selectedValue={this.props.operacao}
				onValueChange={op => { this.props.atualizaOperacao(op); }}
			>
				<Picker.Item label='Soma' value='soma' />
				<Picker.Item label='Subtração' value='subtracao' />
			</Picker>
		);
	}
}

const styles = StyleSheet.create({
	operacao: {
		width: 120,
		height: 50,
		fontSize: 20,
		marginTop: 5,
		marginLeft: 145,
		marginBottom: 15
	}
});
