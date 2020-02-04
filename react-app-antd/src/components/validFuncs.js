import React from "react";
import i18n from "../18n";
import { ErrorMsng } from "./errorMsger";

export function requiredFunc(value, callback) {

  if (!value) {
    return callback(<ErrorMsng value={i18n.t("Reuried")}></ErrorMsng>);
  }
}

function luhnAlgorithm(digits) {
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let cardNum = parseInt(digits[i]);

    if ((digits.length - i) % 2 === 0) {
      cardNum = cardNum * 2;

      if (cardNum > 9) {
        cardNum = cardNum - 9;
      }
    }
    sum += cardNum;
  }

  return sum % 10 === 0;
}

export function validCardFunc(value, callback) {
  let card = value.replace(/\s+/g, "");
  let alog = luhnAlgorithm(card);

  if (card.length < 16) {
    return callback(<ErrorMsng value={i18n.t("TrasferCardEror")}></ErrorMsng>);
  } 
  else if (card.length == 16 && alog != true) {
    return callback(<ErrorMsng value={i18n.t("TrasferCardEror")}></ErrorMsng>);
  }

}

export function validCardRUSFunc(Flag, callback) {

  if (Flag !== "RUS") {
    return callback(
      <ErrorMsng value={i18n.t("TrasferCardErorForRus")}></ErrorMsng>
    );
  }
}

export function validDateFunc(value, callback) {
  const date = new Date().getFullYear().toString();
  const monthdate = new Date().getMonth().toString();
  let datevalid = parseInt(date.substr(-2, 2));
  let datemonthvalid = parseInt(monthdate);
  let month = parseInt(value.substr(0, 2));
  let year = parseInt((value || "").substr(-2, 2));

  if (
    month <= 12 &&
    year <= datevalid + 10 &&
    year >= datevalid &&
    datemonthvalid + 1 <= month &&
    month > 1
  ) {

    if (year == datevalid + 10 && datemonthvalid + 1 > month) {
      return callback(<ErrorMsng value={i18n.t("IncorectData")}></ErrorMsng>);
    }
     else {
      return callback();
    }

  } 
  else {
    return callback(<ErrorMsng value={i18n.t("IncorectData")}></ErrorMsng>);
  }
}

export function validAmountFunc(Flag, value, callback) {
  let amount = value.replace(/\s+/g, "");
  
  if (Flag == "RU") {

    if (amount <= 140000) {
      return callback();
    } else {
      return callback(
        <ErrorMsng value={i18n.t("InvalidAmmountRus")}></ErrorMsng>
      );
    }

  } else {

    if (amount <= 100000) {
      return callback();
    } else {
      return callback(<ErrorMsng value={i18n.t("InvalidAmmount")}></ErrorMsng>);
    }

  }
}

export function validAmountminFunc(value, callback) {
  let amount = value.replace(/\s+/g, "");

  if (amount >= 10) {
    return callback();
  } else {
    return callback(
      <ErrorMsng value={i18n.t("InvalidAmmountmin")}></ErrorMsng>
    );
  }

}

export function validLangFunc(value, callback) {
  let validLang = value.replace(/\s+/g, "");

  if (validLang.search(/[А-яЁё]/) === -1) {
    return callback();
  } else {
    return callback(<ErrorMsng value={i18n.t("InvalidLang")}></ErrorMsng>);
  }

}

export function validLangFunc2(value, callback) {

  if (value === "" || value === !" ") {
    return callback();
  } else {
    return callback(<ErrorMsng value={i18n.t("InvalidLang")}></ErrorMsng>);
  }

}

export function validCardCountryFunc(paySys, Flag, callback) {
  const masterc = [
    "CUB",
    "IRN", 
    "SDN", 
    "PRK"
  ];
  const visac = [
    "AZE",
    "ARM",
    "BLR",
    "BGR",
    "GRC",
    "GEO",
    "KAZ",
    "KGZ",
    "LVA",
    "LTU",
    "MDA",
    "ROU",
    "SVK",
    "СВН",
    "TJK",
    "TKM",
    "UKR",
    "UZB",
    "CZE",
    "RUS"
  ];

  if (paySys === "visa") {

    if (visac.includes(Flag) == true) {
      return callback();
    } else {
      return callback(
        <ErrorMsng value={i18n.t("TrasferCardEror")}></ErrorMsng>
      );
    }

  } else if (paySys === "mastercard") {

    if (masterc.includes(Flag) !== true) {
      return callback();
    } else {
      return callback(
        <ErrorMsng value={i18n.t("TrasferCardEror")}></ErrorMsng>
      );
    }

  }
}
