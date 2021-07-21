import { MaterialIcons } from '@expo/vector-icons'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import NumberFormat from 'react-number-format'
import { Text } from '../../../../../components'
import { SectionTitle } from '../../../../../components/SectionTitle'
import { tailwind } from '../../../../../tailwind'
import { translate } from '../../../../../translations'
import { BalanceParamList } from '../BalancesNavigator'
import { ConversionMode } from '../ConvertScreen'

interface TokenActionItems {
  title: string
  icon: React.ComponentProps<typeof MaterialIcons>['name']
  onPress: () => void
  testID: string
}

type Props = StackScreenProps<BalanceParamList, 'TokenDetailScreen'>

export function TokenDetailScreen ({ route, navigation }: Props): JSX.Element {
  const [token] = useState(route.params.token)
  return (
    <ScrollView style={tailwind('bg-gray-100')}>
      <View style={tailwind('flex-col bg-white px-2 py-8 mb-4 justify-center items-center border-b border-gray-300')}>
        <Text style={tailwind('text-xs text-gray-500')}>
          {translate('screens/TokenDetailScreen', 'AMOUNT BALANCE')}
        </Text>
        <NumberFormat
          value={token.amount} decimalScale={8} thousandSeparator displayType='text' suffix={` ${token.symbol}`}
          renderText={(value) => <Text style={tailwind('text-2xl font-bold')}>{value}</Text>}
        />
      </View>
      <SectionTitle
        text={translate('screens/TokenDetailScreen', 'AVAILABLE OPTIONS')}
        testID='title_available_options'
      />
      {
        token.id !== '0' && (
          <>
            <TokenActionRow
              testID='send_button'
              title={translate('screens/TokenDetailScreen', 'Send to other wallet')} icon='arrow-upward'
              onPress={() => navigation.navigate('Send', { token })}
            />
            <TokenActionRow
              testID='receive_button'
              title={`${translate('screens/TokenDetailScreen', 'Receive')} ${token.displaySymbol}`}
              icon='arrow-downward'
              onPress={() => navigation.navigate('Receive')}
            />
          </>
        )
      }
      {
        token.symbol === 'DFI' && (
          <TokenActionRow
            testID='convert_button'
            title={`${translate('screens/TokenDetailScreen', 'Convert')} ${token.displaySymbol}`}
            icon='swap-vert' onPress={() => {
              const mode: ConversionMode = token.id === '0_utxo' ? 'utxosToAccount' : 'accountToUtxos'
              navigation.navigate('Convert', { mode })
            }}
          />
        )
      }
    </ScrollView>
  )
}

function TokenActionRow ({ title, icon, onPress, testID }: TokenActionItems): JSX.Element {
  return (
    <TouchableOpacity
      testID={testID} onPress={onPress}
      style={tailwind('flex-row py-4 pl-4 pr-2 bg-white border-b border-gray-200')}
    >
      <MaterialIcons name={icon} size={24} style={tailwind('text-primary')} />
      <Text style={tailwind('flex-grow ml-2')}>
        {title}
      </Text>
      <MaterialIcons name='chevron-right' size={24} />
    </TouchableOpacity>
  )
}
