
# rn-tv-icons-br

Ícones de canais de TV brasileiros para projetos React Native.

## Instalação

1. Primeiro, instale o pacote:

```bash
npm install rn-tv-icons-br
# ou
yarn add rn-tv-icons-br
```

2. Certifique-se que você tenha instalado:

```bash
npm install react-native-svg
# ou
yarn add react-native-svg
```

> **Obs:** `react-native-svg` é obrigatório para o funcionamento dos ícones.

---

## Uso

```tsx
import { ChannelIcon } from 'rn-tv-icons-br';

export const Example = () => {
  return (
    <ChannelIcon name="telecine" size={48} color="#000" />
  );
};
```

---

## Ícones Disponíveis

Atualmente, há **82 canais** suportados:

- AeE
- AMC
- AnimalPlanet
- Arte1
- AXN
- Band
- BandSports
- Bis
- CanalBrasil
- CanalOff
- Cinemax
- CNN
- CNNBrasil
- CNNEspanhol
- Curta
- Cultura
- Discovery
- DiscoveryCivilization
- DiscoveryTheater
- DiscoveryTurbo
- DiscoveryWorld
- Espn
- Espn2
- Espn3
- Espn4
- Espn5
- EspnExtra
- FoxChannel
- FoxSports
- Globo
- GloboNews
- GNT
- H2
- HBO
- HBO2
- HBOFamily
- HBOMundi
- HBOPlus
- HBOPop
- HBOSignature
- HEH
- HistoryChannel
- ID
- JovemPanNews
- MegaPix
- Multishow
- National
- NossoFutebol
- Paramount
- ParamountPlus
- Premiere
- Premiere2
- Premiere3
- Premiere4
- Premiere5
- Premiere6
- Premiere7
- Premiere8
- Record
- RecordNews
- RedeTv
- SBT
- SCI
- Sony
- Space
- Sportv
- Sportv2
- Sportv3
- TCM
- Telecine
- TelecineAction
- TelecineFun
- TelecinePipoca
- TelecinePremium
- TelecineTouch
- TNT
- TNTSerie
- TvBrasil
- Universal
- Viva
- WarnerChannel
- Woohoo

> Novos canais podem ser adicionados com o tempo!

---

## Props

| Prop  | Tipo    | Descrição |
|-------|---------|-----------|
| name  | string  | Nome do canal. |
| size  | number  | Tamanho do ícone. (Opcional, padrão 24) |
| color | string  | Cor do ícone. (Opcional, padrão `#000`) |

---

## Contribuindo

Se quiser adicionar novos canais, envie um Pull Request! 😄

---

## Licença

[MIT](LICENSE)
