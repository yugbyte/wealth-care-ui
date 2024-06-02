import { IconType } from "react-icons";
import { BsCashCoin, BsFillFuelPumpFill } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaCar, FaCarrot, FaMoneyCheckDollar } from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { ImPower } from "react-icons/im";
import { IoFastFoodSharp } from "react-icons/io5";
import { LuUtilityPole } from "react-icons/lu";
import { MdOutlineLocalGroceryStore, MdSchool } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { TbFileUnknown, TbMeat } from "react-icons/tb";

type IconMapType = {
  [key: string]: IconType;
};

export const IconMap: IconMapType = {
  grocery: MdOutlineLocalGroceryStore,
  school: MdSchool,
  mobile: CiMobile3,
  bills: RiBillLine,
  power: ImPower,
  utility: LuUtilityPole,
  carInsurance: FaCar,
  vegetables: FaCarrot,
  fuel: BsFillFuelPumpFill,
  food: IoFastFoodSharp,
  rent: FaHome,
  cash: BsCashCoin,
  meat: TbMeat,
  misc: TbFileUnknown,
  mortgage: HiOutlineHomeModern,
  emi: FaMoneyCheckDollar,
};

export const getIconByName = (name: string): IconType | undefined => {
  return IconMap[name.toLowerCase()];
};
