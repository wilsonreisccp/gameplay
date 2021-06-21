import React from 'react';
import { Text, View, Image } from 'react-native';

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles'

export function SignIn() {
  return (
    <View style={ styles.container }>
      <Image
        source={IllustrationImg}
        style={ styles.image }
        resizeMode= "stretch"
      />

      <View style={ styles.content }>
        <Text style={ styles.tittle } >
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={ styles.subtittle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title="Entrar com Discord"
          activeOpacity={0.7}
        />

      </View>
    </View>
  );
}