import { Injectable } from '@angular/core';

import { Md5 } from 'ts-md5';

import { Login } from './login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }

  getUserTypes() {

    return [

      {
        label: 'AUDITOR',
        value: '01'
      },
      {
        label: 'OPERADOR',
        value: '02'
      }

    ];

  };

  getCompanies() {

    return [

      {
        label: 'EMPRESA 01',
        value: '01'
      },
      {
        label: 'EMPRESA 02',
        value: '02'
      },
      {
        label: 'EMPRESA 03',
        value: '03'
      }

    ];

  };

  getBranches() {
    
    return [

      {
        companyId: '01',
        label: 'MATRIZ',
        value: '01'
      },
      {
        companyId: '02',
        label: 'MATRIZ',
        value: '01'
      },
      {
        companyId: '03',
        label: 'MATRIZ',
        value: '01'
      }

    ];

  };

  auth(login: Login): boolean {

    let md5Password: string = Md5.hashStr(login.password);

    if (login.userType === '01') {

      if (login.username === 'fabiojcs' && md5Password === 'eced04e44a0db556036198f113d3d779') {

        return true;

      } else {

        return false;

      };

    } else {

      if (login.username === 'fabiojcs' && md5Password === '6388136f2b841b4fd9681d0a986a041b') {

        return true;

      } else {

        return false;

      };

    };

  };

}
