import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View, Image} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

type Props = TouchableOpacityProps &{ 
    title: string;
}

export function ButtonIcon({ title, ...rest } : Props){
    return(
        <TouchableOpacity 
            style={ styles.container }
            {...rest}
        >
            <View style={ styles.iconWrapper }>
                <Image
                  source={ DiscordImg }
                  style={ styles.icon }
                />
            </View>

            <Text style={ styles.title }>
                { title }
            </Text>
        </TouchableOpacity>
    )
}