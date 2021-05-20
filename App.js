import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
        <View style={{marginTop: 12}}>
          <Button 
            title='Alterar texto'
            onPress={() => this.setState({ contador: this.state.contador + 1})}
          />
        </View>
      </View>
    );
  }
}

// export default function App() {
//   //hook
//   const [texto, setTexto] = useState('Texto Inicial');
//   return (

//     <View style={styles.container}>
//       <Text>{texto}</Text>
//       <View style={{marginTop: 12}}>
//         <Button 
//           title="Alterar texto"
//           onPress={() => setTexto("Novo Texto")}
//         />
//       </View>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
