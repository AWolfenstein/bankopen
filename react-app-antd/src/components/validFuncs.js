import React from 'react';
import i18n from '../18n';
import { ErrorMsng } from './errorMsger';

export function requiredFunc(value, callback) {
  if (!value) {
    return callback(<ErrorMsng value={i18n.t('Reuried')}></ErrorMsng>)
  }
}
export function validCardFunc(value, callback) {
  let card = value.replace(/\s+/g, '');
  if (card.length < 16) {
    return callback(<ErrorMsng value={i18n.t('TrasferCardEror')}></ErrorMsng>)
  }
}

export function validDateFunc(value, callback) {
  const date = new Date().getFullYear().toString();

  let datevalid = parseInt(date.substr(-2, 2));
  let month = parseInt(value.substr(0, 2));
  let year = parseInt((value || '').substr(-2, 2));

  if (month <= 12 && year != datevalid && year <= datevalid + 10 && year > datevalid) {
    if (year == datevalid + 10 && month > 1) {
      return callback(<ErrorMsng value={i18n.t('IncorectData')}></ErrorMsng>)
    } else {

      return callback();
    }
  }
  else {
    return callback(<ErrorMsng value={i18n.t('IncorectData')}></ErrorMsng>)
  }
}

export function validAmountFunc(value, callback) {
  let amount = value.replace(/\s+/g, '');
  if (amount < 100000 || amount > 10) {
    return callback();
  }
  else {
    return callback(<ErrorMsng value={i18n.t('InvalidAmmount')}></ErrorMsng>)
  }
}

export function validLangFunc(value, callback) {
  let validLang = value.replace(/\s+/g, '');
  if (validLang.search(/[А-яЁё]/) === -1) {
    return callback();
  }
  else {
    return callback(<ErrorMsng value={i18n.t('InvalidLang')}></ErrorMsng>)
  }
}    