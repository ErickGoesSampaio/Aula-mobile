import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
	<TextInput 
		style={styles.numero} 
		value={props.num} 
		placeholder='Valor'
		onChangeText={valorDoCampo => props.atualizaValor(props.nome, valorDoCampo)}
	/>
);

const styles = StyleSheet.create({
	numero: {
		backgroundColor: '#e0e0e0',
		textAlign: 'center',
		border: 'none',
		color: 'Black',
		padding: 5,
		borderRadius: 8,
		boxSizing: 'border-box',
		marginTop: 30,
		width: 140,
		height: 80,
		fontSize: 20
	}
});
