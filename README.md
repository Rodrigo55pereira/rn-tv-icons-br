
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

- band
- bandnews
- bandsports
- bandintl
- bandmulti
- bandfm
- arte1
- agroplus
- agroplusint
- arte1int
- bandcaminhoneiro
- bandnoticias
- bandcine
- bandreality
- banddocumenta
- bandjornalismo
- bandlifestyle
- bandkids
- bandsports2
- bandsports3
- bandmusic
- bandcomedy
- bandprime
- bandaction
- bandclassic
- bandterror
- bandplay
- cnnbrasil
- disneychannel
- discoverychannel
- discoveryhomehealth
- discoverykids
- discoveryscience
- discoverytheater
- hbo
- hbo2
- hbosignature
- hbofamily
- hboxtreme
- cartoonnetwork
- warnerchannel
- universal
- viva
- telecine
- telecinetouch
- tnt
- tntseries
- woohoo
- tvbrasil
- globonews
- sportv
- sportv2
- sportv3
- espnbrasil
- espn
- espn2
- espn3
- espn4
- off
- megapix
- multishow
- gnt
- sporttv
- history
- history2
- natgeo
- natgeowild
- animalplanet
- paramount
- syfy
- axn
- sonychannel
- tbs
- space
- foxchannel
- foxsports
- foxsports2
- fx

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
