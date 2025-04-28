import React from "react";
import { AeE } from "../../assets/icons/AeE"
import { AMC } from "../../assets/icons/AMC"
import { AnimalPlanet } from "../../assets/icons/AnimalPlanet"
import { Arte1 } from "../../assets/icons/Arte1"
import { AXN } from "../../assets/icons/AXN"
import { Band } from "../../assets/icons/Band"
import { BandSports } from "../../assets/icons/BandSports"
import { Bis } from "../../assets/icons/Bis"
import { CanalBrasil } from "../../assets/icons/CanalBrasil"
import { CanalOff } from "../../assets/icons/CanalOff"
import { Cinemax } from "../../assets/icons/Cinemax"
import { CNN } from "../../assets/icons/CNN"
import { CNNBrasil } from "../../assets/icons/CNNBrasil"
import { CNNEspanhol } from "../../assets/icons/CNNEspanhol"
import { Curta } from "../../assets/icons/Curta"
import { Cultura } from "../../assets/icons/Cultura"
import { Discovery } from "../../assets/icons/Discovery"
import { DiscoveryCivilization } from "../../assets/icons/DiscoveryCivilization"
import { DiscoveryTheater } from "../../assets/icons/DiscoveryTheater"
import { DiscoveryTurbo } from "../../assets/icons/DiscoveryTurbo"
import { DiscoveryWorld } from "../../assets/icons/DiscoveryWorld"
import { Espn } from "../../assets/icons/Espn"
import { Espn2 } from "../../assets/icons/Espn2"
import { Espn3 } from "../../assets/icons/Espn3"
import { Espn4 } from "../../assets/icons/Espn4"
import { Espn5 } from "../../assets/icons/Espn5"
import { EspnExtra } from "../../assets/icons/EspnExtra"
import { FoxChannel } from "../../assets/icons/FoxChannel"
import { FoxSports } from "../../assets/icons/FoxSports"
import { Globo } from "../../assets/icons/Globo"
import { GloboNews } from "../../assets/icons/GloboNews"
import { GNT } from "../../assets/icons/GNT"
import { H2 } from "../../assets/icons/H2"
import { HBO } from "../../assets/icons/HBO"
import { HBO2 } from "../../assets/icons/HBO2"
import { HBOFamily } from "../../assets/icons/HBOFamily"
import { HBOMundi } from "../../assets/icons/HBOMundi"
import { HBOPlus } from "../../assets/icons/HBOPlus"
import { HBOPop } from "../../assets/icons/HBOPop"
import { HBOSignature } from "../../assets/icons/HBOSignature"
import { Heh } from "../../assets/icons/HEH"
import { HistoryChannel } from "../../assets/icons/HistoryChannel"
import { ID } from "../../assets/icons/ID"
import { JovemPanNews } from "../../assets/icons/JovemPanNews"
import { MegaPix } from "../../assets/icons/MegaPix"
import { Multishow } from "../../assets/icons/Multishow"
import { National } from "../../assets/icons/National"
import { NossoFutebol } from "../../assets/icons/NossoFutebol"
import { Paramount } from "../../assets/icons/Paramount"
import { ParamountPlus } from "../../assets/icons/ParamountPlus"
import { Premiere } from "../../assets/icons/Premiere"
import { Premiere2 } from "../../assets/icons/Premiere2"
import { Premiere3 } from "../../assets/icons/Premiere3"
import { Premiere4 } from "../../assets/icons/Premiere4"
import { Premiere5 } from "../../assets/icons/Premiere5"
import { Premiere6 } from "../../assets/icons/Premiere6"
import { Premiere7 } from "../../assets/icons/Premiere7"
import { Premiere8 } from "../../assets/icons/Premiere8"
import { Record } from "../../assets/icons/Record"
import { RecordNews } from "../../assets/icons/RecordNews"
import { RedeTv } from "../../assets/icons/RedeTv"
import { SBT } from "../../assets/icons/SBT"
import { SCI } from "../../assets/icons/SCI"
import { Sony } from "../../assets/icons/Sony"
import { Space } from "../../assets/icons/Space"
import { Sportv } from "../../assets/icons/Sportv"
import { Sportv2 } from "../../assets/icons/Sportv2"
import { Sportv3 } from "../../assets/icons/Sportv3"
import { TCM } from "../../assets/icons/TCM"
import { Telecine } from "../../assets/icons/Telecine"
import { TelecineAction } from "../../assets/icons/TelecineAction"
import { TelecineFun } from "../../assets/icons/TelecineFun"
import { TelecinePipoca } from "../../assets/icons/TelecinePipoca"
import { TelecinePremium } from "../../assets/icons/TelecinePremium"
import { TelecineTouch } from "../../assets/icons/TelecineTouch"
import { TNT } from "../../assets/icons/TNT"
import { TNTSeries } from "../../assets/icons/TNTSerie"
import { TvBrasil } from "../../assets/icons/TvBrasil"
import { Universal } from "../../assets/icons/Universal"
import { Viva } from "../../assets/icons/Viva"
import { WarnerChannel } from "../../assets/icons/WarnerChannel"
import { Woohoo } from "../../assets/icons/Woohoo"

interface Props {
  name: ChannelIconNames;
  color?: string;
  size?: number;
}

export const ChannelIcon = ({
  name,
  color = "backgroundContranst",
  size,
}: Props) => {
  const SVGIcon = ChannelIconRegistry[name];
  return <SVGIcon color={color} size={size} />;
};

const ChannelIconRegistry = {
    AeE: AeE,
    AMC: AMC,
    AnimalPlanet: AnimalPlanet,
    Arte1: Arte1,
    AXN: AXN,
    Band: Band,
    BandSports: BandSports,
    Bis: Bis,
    CanalBrasil: CanalBrasil,
    CanalOff: CanalOff,
    Cinemax: Cinemax,
    CNN: CNN,
    CNNBrasil: CNNBrasil,
    CNNEspanhol: CNNEspanhol,
    Curta: Curta,
    Cultura: Cultura,
    Discovery: Discovery,
    DiscoveryCivilization: DiscoveryCivilization,
    DiscoveryTheater: DiscoveryTheater,
    DiscoveryTurbo: DiscoveryTurbo,
    DiscoveryWorld: DiscoveryWorld,
    Espn: Espn,
    Espn2: Espn2,
    Espn3: Espn3,
    Espn4: Espn4,
    Espn5: Espn5,
    EspnExtra: EspnExtra,
    FoxChannel: FoxChannel,
    FoxSports: FoxSports,
    Globo: Globo,
    GloboNews: GloboNews,
    GNT: GNT,
    H2: H2,
    HBO: HBO,
    HBO2: HBO2,
    HBOFamily: HBOFamily,
    HBOMundi: HBOMundi,
    HBOPlus: HBOPlus,
    HBOPop: HBOPop,
    HBOSignature: HBOSignature,
    HEH: Heh,
    HistoryChannel: HistoryChannel,
    ID: ID,
    JovemPanNews: JovemPanNews,
    MegaPix: MegaPix,
    Multishow: Multishow,
    National: National,
    NossoFutebol: NossoFutebol,
    Paramount: Paramount,
    ParamountPlus: ParamountPlus,
    Premiere: Premiere,
    Premiere2: Premiere2,
    Premiere3: Premiere3,
    Premiere4: Premiere4,
    Premiere5: Premiere5,
    Premiere6: Premiere6,
    Premiere7: Premiere7,
    Premiere8: Premiere8,
    Record: Record,
    RecordNews: RecordNews,
    RedeTv: RedeTv,
    SBT: SBT,
    SCI: SCI,
    Sony: Sony,
    Space: Space,
    Sportv: Sportv,
    Sportv2: Sportv2,
    Sportv3: Sportv3,
    TCM: TCM,
    Telecine: Telecine,
    TelecineAction: TelecineAction,
    TelecineFun: TelecineFun,
    TelecinePipoca: TelecinePipoca,
    TelecinePremium: TelecinePremium,
    TelecineTouch: TelecineTouch,
    TNT: TNT,
    TNTSerie: TNTSeries,
    TvBrasil: TvBrasil,
    Universal: Universal,
    Viva: Viva,
    WarnerChannel: WarnerChannel,
    Woohoo: Woohoo,
  };
  

type ChannelIconType = typeof ChannelIconRegistry;
type ChannelIconNames = keyof ChannelIconType;
