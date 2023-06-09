import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void { }

  companyOptions: any = this.getCompanyOptions();

  selectBranchIsDisabled: boolean = true;
  branchOptions: any;

  inputUsername: string = "";
  inputPassword: string = "";
  inputCompany: string = "";
  inputBranch: string = "";

  getCompanyOptions() {

    return this.loginService.getCompanies();

  };

  getBranchOptions(companyId: string) {

    let allBranches: any;
    let branches: any = [];

    allBranches = this.loginService.getBranches();

    allBranches.forEach((element: any) => {

      if (element.companyId === companyId) {

        branches.push(element);

      };

    });

    this.branchOptions = branches;

    this.selectBranchIsDisabled = false;

  };

  resetBranchOptionSelected() {

    this.inputBranch = "";

  };

  loginSubmit() {

    console.log(this.inputUsername);
    console.log(this.inputPassword);
    console.log(this.inputCompany);
    console.log(this.inputBranch);

  };

}
