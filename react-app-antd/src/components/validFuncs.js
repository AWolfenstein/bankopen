import React from 'react';
import  i18n  from '../18n';
import { ErrorMsng } from './errorMsger';

export function requiredFunc(value, callback) {
    if (!value) {
        return callback(<ErrorMsng value={i18n.t('Reuried')}></ErrorMsng>)
    }
}

export function validDateFunc(value, callback) {
    const date = new Date().getFullYear();

//let datevalid;
let month = value.substr(0, 2);

let year = (value || '').substr(-2, 2);
console.log(date.substr(-2, 2))
if (month <= 12 && year != date && year < date+10 ) {
    return callback();
  }
  else {
    return callback(<ErrorMsng value={i18n.t('IncorectData')}></ErrorMsng>)
  }
}

export function validAmountFunc(value, callback) {
    let amount = value.replace(/\s+/g,'');
    if (amount < 100000) {
        return callback();
      }
      else {
        return callback(<ErrorMsng value={i18n.t('InvalidAmmount')}></ErrorMsng>)
      }
    }

    export function validLangFunc(value, callback) {
        let validLang = value.replace(/\s+/g,'');
        if (validLang.search(/[А-яЁё]/) === -1) {
            return callback();
          }
          else {
            return callback(<ErrorMsng value={i18n.t('InvalidLang')}></ErrorMsng>)
          }
        }    