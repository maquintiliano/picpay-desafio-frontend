import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SweetalertCustom } from 'src/app/shared/shared/utils/sweetalert-custom';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(
                () => {},
                (error: HttpErrorResponse) => {
                        if (error || ([302, 304].includes(error.status))) {
                        }
                        if (error || ([400, 401, 404, 500].includes(error.status))) {
                            SweetalertCustom.showAlertTimer2('error', 'Atenção', 'Ocorreu um erro na requisição, entre em contato com suporte tecnico');
                        }
                }
            )
        );
    }
}