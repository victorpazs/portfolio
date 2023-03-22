import jsonData from "./text.json";

interface TextData {
  [key: string]: {
    welcome: string;
  };
}

const data: TextData = jsonData;

export function switchTexts(newLang: string) {
  let fields = Object.keys(data[newLang]);

  for (let x = 0; x < fields.length; x++) {
    let item = fields[x];
    let element = document.querySelector(`#${item}`);
    let languageField: Record<string, string> = data[newLang];
    if (element !== null) {
      element.innerHTML = languageField[item];
    }
  }
}
