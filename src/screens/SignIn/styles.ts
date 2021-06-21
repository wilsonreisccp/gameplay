import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: '#F0F',
    backgroundColor: theme.colors.background
  },

  image: {
    width: '100%',
    height: 360

  },

  content: {
    marginTop: -40,
    paddingHorizontal: 30
  },

  tittle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16
  },

  subtittle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64
  }

});