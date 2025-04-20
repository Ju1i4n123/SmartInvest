
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

const LANGUAGES = {
  en: { name: "English", flag: "/flags/gb.svg" },
  de: { name: "Deutsch", flag: "/flags/de.svg" },
  es: { name: "Español", flag: "/flags/es.svg" },
  fr: { name: "Français", flag: "/flags/fr.svg" },
  it: { name: "Italiano", flag: "/flags/it.svg" },
};

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Select
        value={i18n.language}
        onValueChange={(value) => i18n.changeLanguage(value)}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(LANGUAGES).map(([code, { name, flag }]) => (
            <SelectItem 
              key={code} 
              value={code} 
              className="flex items-center gap-2"
            >
              <img 
                src={flag} 
                alt={`${name} flag`}
                className="h-4 w-6 object-cover rounded-sm"
              />
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
