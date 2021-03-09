import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

function App(){
    const [count, setCount] = useState(1);  
    const [count2, setCount2] = useState(2);  
return  (
    <View style={{justifyContent:'center', alignItems:'center', marginTop:200}}>
        <Text> {count}</Text>
        <Button title='Bilangan Ganjil' color='red' onPress={() => setCount(count+2)}/>
        <Text> {count2}</Text>
        <Button title='Bilangan Genap' color='blue' onPress={() => setCount2(count2+2)}/>
    </View>
);
}
export default App