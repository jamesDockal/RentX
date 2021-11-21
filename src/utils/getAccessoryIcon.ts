import GasolineSvg from "../assets/gasoline.svg";
import EnergySvg from "../assets/energy.svg";
import HybridSvg from "../assets/hybrid.svg";

import SpeedSvg from "../assets/speed.svg";
import AccelerationSvg from "../assets/acceleration.svg";
import ForceSvg from "../assets/force.svg";
import ExchangeSvg from "../assets/exchange.svg";
import PeopleSvg from "../assets/people.svg";
import CarSvg from "../assets/people.svg";

export function getAccessoryIcon(icon: string) {
  switch (icon) {
    case "speed":
      return SpeedSvg;
    case "acceleration":
      return AccelerationSvg;
    case "turning_diameter":
      return ForceSvg;
    case "exchange":
      return ExchangeSvg;
    case "seats":
      return PeopleSvg;

    case "gasoline_motor":
      return GasolineSvg;
    case "electric_motor":
      return EnergySvg;
    case "hybrid_motor":
      return HybridSvg;

    default:
      return CarSvg;
  }
}
