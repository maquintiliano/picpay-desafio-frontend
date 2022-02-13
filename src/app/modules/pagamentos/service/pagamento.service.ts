import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from 'src/app/core/services/base.service';
import { urlConfigs } from 'src/app/core/utils/url-configs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService extends BaseService<any> {

  constructor(protected http: HttpClient) { 
    super(http, urlConfigs.url_tasks);
  }
}
