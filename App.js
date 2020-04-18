import React, { Component, useState } from 'react';

import {
  SafeAreaView,
  
  
  View,
  Text,
  
  TextInput,
  StyleSheet, ScrollView, Image, Button, Alert,StatusBar, TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {
  const [text, setText] = useState('');
   const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
 
   const [text4, setText4] = useState('');
    const [text5, setText5] = useState('');
     const [text6, setText6] = useState('');
  var SBP = parseInt(text, 10);
  var DBP = parseInt(text2, 10);
  var SV = parseInt(text3, 10);
  var EF = parseInt(text4, 10);
  var PT = parseInt(text5, 10);
  var ET = parseInt(text6, 10);
  var EA2= (SBP*0.9)/SV;
  var EA = EA2.toFixed(2); 
  var B29 = PT/ET;
  
       var Endavg = 0.35695-(7.2266*(B29))+(74.249*(Math.pow(B29, 2)))-(307.39*(Math.pow(B29, 3)))+(684.54*(Math.pow(B29, 4)))-(856.92*(Math.pow(B29, 5)))+(571.95*(Math.pow(B29, 6)))-(159.1*(Math.pow(B29, 7)))

       var Endest = (0.0275-(0.165*(EF/100))+0.3656*(DBP/(SBP*0.9))+0.515*Endavg);

       var EES2 = (DBP-(Endest*SBP*0.9))/(Endest*SV);

       var Acomplamiento2 = (EA2/EES2);

       var EES = EES2.toFixed(2); 
       var Acomplamiento = Acomplamiento2.toFixed(2); 
  return (
    <View style={styles.container}>
    <View style={styles.header2}>
       <View style={styles.headerLeft2}>
           
            
       </View>


        <View style={styles.headerMidle}>
           
           <Text style={styles.paragraph}>
           Acomplamiento A/V
           </Text>
       </View>




       <View style={styles.headerRight2}>
       <TouchableOpacity onPress={()=> alert('La calculadora no está pensada para ser un sustituto profesional. Mucho esfuerzo se a hecho para hacer este software lo mas preciso posible; aún asi la información proporcionada no puede ser garantizada. Creadores: Jose Carlos Gasca Aldama, Getzemani Cruz Garcia. Referencias: https://pubmed.ncbi.nlm.nih.gov/11738311/?fbclid=IwAR21l2xV-CZ4F1Y-WSbsQnrkBXs186AjLH6CX4uUaUv8y0jeK-eAi-7VSe4  contacto: cruzgetzemani@hotmail.com ')}>

          <Image  style={{width: 30, height: 30, marginTop: 25, marginLeft: 20}} source={require('./assets/icono.png')} />
         
       </TouchableOpacity>
        
           
       </View>
     </View>

   
         

    
   

     <ScrollView style={{flex: 6,marginTop:0} } >
       
     
     <View style={styles.header}>
       <View style={styles.headerLeft}>
           
           <Text style={{marginTop:0,
   margin: 10,
   fontSize: 18,
   
   color: '#DFDFDF'
   
 }}>
           Presión arterial sistólica
           </Text>
       </View>
       <View style={styles.headerRight}>
         
         <TextInput
         style={{
         textAlign: 'center',
           height: 40,
           borderWidth: 1.5,
           borderColor: 'white',
           padding: 5,
           marginTop: 10,
           fontSize: 18,
           backgroundColor:  'white',
         }}
         placeholder="mmHg"
         placeholderTextColor="#808080"
         onChangeText={text => setText(text)}
         defaultValue={text}
       />
     
           
       </View>
     </View>
        <View style={styles.header}>
       <View style={styles.headerLeft}>
           
           <Text style={styles.paragraph}>
            Presión arterial diastólica
           </Text>
       </View>
       <View style={styles.headerRight}>
         
         <TextInput
         style={{
             textAlign: 'center',
           height: 40,
           borderWidth: 1.5,
           borderColor: 'white',
           padding: 5,
           marginTop: 20,
           fontSize: 18,
           backgroundColor:  'white',
         }}
         placeholder="mmHg"
         placeholderTextColor="#808080"
         onChangeText={text2 => setText2(text2)}
         defaultValue={text2}
       />
     
           
       </View>
     </View>
      <View style={styles.header}>
       <View style={styles.headerLeft}>
           
           <Text style={styles.paragraph}>
           Volúmen sistólico
           </Text>
       </View>
       <View style={styles.headerRight}>
         
         <TextInput
         style={{
           textAlign: 'center',
           height: 40,
           borderWidth: 1.5,
           borderColor: 'white',
           padding: 5,
           marginTop: 20,
           fontSize: 18,
           backgroundColor:  'white',
           
         }}
         placeholder="ml"
         placeholderTextColor="#808080"
         onChangeText={text3 => setText3(text3)}
         defaultValu={text3}
       />
     
           
       </View>
     </View>
      <View style={styles.header}>
       <View style={styles.headerLeft}>
           
           <Text style={styles.paragraph}>
           Fracción de eyección
           </Text>
       </View>
       <View style={styles.headerRight}>
         
         <TextInput
         style={{
              textAlign: 'center',
           height: 40,
           borderWidth: 1.5,
           borderColor: 'white',
           padding: 5,
           marginTop: 20,
           fontSize: 18,
           backgroundColor:  'white',
         }}
         placeholder="%"
         placeholderTextColor="#808080"
         onChangeText={text4 => setText4(text4)}
         defaultValue={text4}
       />
     
           
       </View>
     </View>
      <View style={styles.header}>
       <View style={styles.headerLeft}>
           
           <Text style={styles.paragraph}>
           Tiempo de preeyección
           </Text>
       </View>
       <View style={styles.headerRight}>
         
         <TextInput
         style={{
             textAlign: 'center',
           height: 40,
           borderWidth: 1.5,
           borderColor: 'white',
           padding: 5,
           marginTop: 20,
           fontSize: 18,
           backgroundColor:  'white',
         }}
         placeholder="ms"
         placeholderTextColor="#808080"
         onChangeText={text5 => setText5(text5)}
         defaultValue={text5}
       />
     
           
       </View>
     </View>
      <View style={styles.header}>
       <View style={styles.headerLeft}>
           
           <Text style={styles.paragraph}>
           Tiempo total de eyección
           </Text>
       </View>
       <View style={styles.headerRight}>
         
         <TextInput
         style={{
           backgroundColor:  'white',
             textAlign: 'center',
           height: 40,
           borderWidth: 1.5,
           borderColor: 'white',
           padding: 5,
           marginTop: 20,
           fontSize: 18,
         }}
         placeholder="ms"
         placeholderTextColor="#808080"
         onChangeText={text6 => setText6(text6)}
         defaultValue={text6}
       />
     
           
       </View>
     </View>
   
     </ScrollView>
 

         <View style={styles.containerAbajo}>
           

     
                   <Text id="hola" style={styles.paragraph2}>
                   Elastansa Arterial -->  <Text style= {styles.paragraph3}>{EA}   </Text>
                   </Text>


                 
                  

         


                 <Text id="hola" style={styles.paragraph2}>
           Elastansa Ventricular -->  <Text style= {styles.paragraph3}>{EES}   </Text>
           </Text>
                  <Text id="hola" style={styles.paragraph2}>
           V/A Acomplamiento -->  <Text style= {styles.paragraph3}>{Acomplamiento}   </Text>
           </Text>
  </View>
         
   
   
       
   </View>
 );
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',

   backgroundColor: '#2F333F',
   padding: 0,
   flexDirection : 'column'
 },
  header : {
   flex : 0.5,
   flexDirection : 'row',
   marginTop : 10
 },
 
 headerLeft : {
   flex : .7,
   paddingTop:18
   
 },
 headerRight : {
   flex: 0.3,
   marginRight : 10    
   },
 paragraph: {
   margin: 10,
   fontSize: 18,
   
   color: '#DFDFDF',
 
 },

 
  headerMidle : {
   flex : .7,
   marginTop:17,
   
   marginLeft:7,
 },
 headerLeft2 : {
   flex : .3,
  
 },
 header2 : {
   paddingTop: 30,
   flex : 0.18,
   flexDirection : 'row',
   marginTop : 0.5,
   
 },
 headerRight2 : {
   flex: 0.2,
   marginRight : 10    
   },
   containerAbajo: {
   flex: 0.4,
   justifyContent: 'center',   
   backgroundColor: '#49ACD5',
   padding: 0,
   flexDirection : 'column',
   textAlign: 'center',
 },
   paragraph2: {
   margin: 10,
   fontSize: 18,
   color: '#DFDFDF',
   textAlign: 'center'
   
 },
    paragraph3: {
   margin: 10,
   fontSize: 18,
   color: 'black',
   textAlign: 'center'
   
 },
});

export default App;
