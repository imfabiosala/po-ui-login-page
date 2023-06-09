import { Injectable } from '@angular/core';

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

}
