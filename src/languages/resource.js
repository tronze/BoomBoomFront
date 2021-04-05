import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      brand: "BOOM BOOOM",
      title: "Search Uncrowded Route",
      from: "From",
      to: "To",
      search: "Search",
      searchResult: "Search Result",
      crowdedState: "Crowded State",
      departureTime: "Departure Time",
      now: "Current Time",
      searching: "Searching",
    },
  },
  ko: {
    translation: {
      brand: "붐붐",
      title: "붐비지 않는 경로 찾기",
      from: "출발지",
      to: "도착지",
      search: "검색",
      searchResult: "검색 결과",
      crowdedState: "현재 혼잡도",
      departureTime: "출발 시간",
      now: "현재 시각",
      searching: "검색 중",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});
export default i18n;
