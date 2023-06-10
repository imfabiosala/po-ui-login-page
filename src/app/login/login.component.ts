import { Component, OnInit } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

import { LoginService } from './login.service';

import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private ufb: UntypedFormBuilder,
    private poNotificationService: PoNotificationService,
    private loginService: LoginService
  ) {

    this.createLoginForm();

  }

  ngOnInit(): void { }

  loginForm!: UntypedFormGroup;

  userTypeOptions: any = this.getUserTypeOptions();

  companyOptions: any = this.getCompanyOptions();

  selectBranchIsDisabled: boolean = true;
  branchOptions: any;

  buttonSubmitIsDisabled: boolean = true;

  inputUserType: string = "";
  inputUsername: string = "";
  inputPassword: string = "";
  inputCompany: string = "";
  inputBranch: string = "";

  createLoginForm() {

    this.loginForm = this.ufb.group({

      userType: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2)])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(16)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])],
      company: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2)])],
      branch: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2)])]

    });

  };

  getUserTypeOptions() {

    return this.loginService.getUserTypes();

  };

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

    let login:Login = {

      userType:this.inputUserType,
      username:this.inputUsername,
      password:this.inputPassword,
      company:this.inputCompany,
      branch:this.inputBranch

    };

    if (this.loginService.auth(login)) {

      this.poNotificationService.success('Login efetuado com sucesso!');

    } else {

      this.poNotificationService.error('Credenciais inválidas!');

    };

  };

}
