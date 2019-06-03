import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssuesById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
      // tslint:disable-next-line:object-literal-shorthand
      title: title,
      // tslint:disable-next-line:object-literal-shorthand
      responsible: responsible,
      // tslint:disable-next-line:object-literal-shorthand
      description: description,
      // tslint:disable-next-line:object-literal-shorthand
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      // tslint:disable-next-line:object-literal-shorthand
      title: title,
      // tslint:disable-next-line:object-literal-shorthand
      responsible: responsible,
      // tslint:disable-next-line:object-literal-shorthand
      description: description,
      // tslint:disable-next-line:object-literal-shorthand
      severity: severity,
      // tslint:disable-next-line:object-literal-shorthand
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
