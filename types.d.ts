interface InitialState {
  lang: Lang;
  toggleLang: () => void;
  themed: boolean;
  toggleThemed: () => void;
}
type Lang = "es" | "en";

interface ComponentProps {
  themed: boolean;
}
