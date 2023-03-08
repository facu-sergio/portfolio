import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private _ngxUiLoaderService: NgxUiLoaderService) {}
	private _activeRequest = 0;

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

		if (this._activeRequest === 0) {
			this._ngxUiLoaderService.start();
		}
		this._activeRequest++; //1

		return next.handle(request).pipe(finalize(() => this._stopLoader()));
	}

	private _stopLoader() {
		this._activeRequest--;
		if (this._activeRequest === 0) {
			this._ngxUiLoaderService.stop();
		}
	}
}

