import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {colors} from '../utils/colors'
import { spacing } from '../utils/sizes';
import {TextInput} from 'react-native-paper'
import {RoundedButton} from '../components/RoundedButton'

export const Focus = ({addSubject}) => {
  
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      
      <View style = {styles.inputContainer}>
        <TextInput style={styles.textInput}  onChangeText={(val)=>{setSubject(val);}} label={<Text style={{fontSize: 15}}>{('What would you like to focus on ?')}</Text>} 
/>

        <View style = {styles.button}>
          <RoundedButton title='+' size={50} onPress={()=>{addSubject(subject)}} />
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
  },
  button:{
    justifyContent:'center'
  },
  textInput:{
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer:{
    // flex: 1,
    padding: spacing.lg,
    justifyContent: 'top', 
    flexDirection:'row',

  },
  
});

export default Focus;
