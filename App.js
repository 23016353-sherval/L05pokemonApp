//==========================Exercise 2=====================
import React from 'react';
import {View, Text, FlatList, StyleSheet, StatusBar, SectionList, Button} from 'react-native';
import {Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const datasource = [
  {data: [
      {key:'Sylveon' + '\n' + 'The Intertwining Pokemon',
      image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM2/SM2_EN_92.png',
      entry: "Sylveon wraps its ribbon like feelers around its trainer's arm as they walk together."},

      {key:'Gardevoir' + '\n' + 'The Embrace Pokemon',
      image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM3/SM3_EN_93.png',
      entry: "When it senses danger, it will use all of its psychic powers to protect its trainer."},
    ],
    title:"Fairy", bgColour: 'pink'},

  {data: [
      {key:'Umbreon' + '\n' + 'The Moonlight Pokemon',
      image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM1/SM1_EN_80.png',
      entry: "When exposed to the moon's aura, the rings on its body glow faintly and it's filled with a mysterious power."},

      {key:'Absol' + '\n' + 'The Disaster Pokemon',
      image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XYP/XYP_EN_XY63.png',
      entry: "It senses coming disasters and appears before people only to warn them of impending danger."}
    ],
    title:"Dark", bgColour: '#605f5e' },

  {data: [
      {key:'Lucario' + '\n' + 'The Aura Pokemon',
        image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH8/SWSH8_EN_146.png',
        entry: "By catching the aura emanating from others, it can read their thoughts and movements."},
    ],
    title:"fighting", bgColour: '#CC5500'},

  {data: [
      {key:'Garchomp' + '\n' + 'The Mach Pokemon',
        image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XYP/XYP_EN_XY168.png',
        entry: "When it folds up its body and extends its wings, it looks like a jet plane. It flies at sonic speed."},
    ],
    title:"Dragon", bgColour: '#6a5acd'},
];

const styles = StyleSheet.create({
  arrangementStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
    backgroundColor: '#lightblue'
  },

  textStyle: {
    fontSize:15,
    marginLeft:10,
    textAlign:"center",
    flex: 1,
  },

  headerText: {
    fontSize: 25,
    margin: 10,
    textAlign: "center",
    fontWeight: 'bold'
  },

  image: {
    width: 180,
    height: 250,
    margin: 10,
  },

})

const renderItem = ({item}) => {
  return (
      <View style={styles.arrangementStyle}>
        <Text style={styles.textStyle}>{item.key}{'\n'}{'\n'}{'\n'}{item.entry}</Text>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
  )
}

const App = () => {
  return (
      <View style={{marginTop: 50, marginBottom:50}}>
        <StatusBar hidden={true} />
        <Button title={"Add Pokemon"} />
        <SectionList sections={datasource} renderItem={renderItem}

                     renderSectionHeader={({section:{title, bgColour}}) => (
                         <Text style={[styles.headerText, {backgroundColor: bgColour}]}>{title}</Text>
                     )}
        />
      </View>
  );
};

export default App;
