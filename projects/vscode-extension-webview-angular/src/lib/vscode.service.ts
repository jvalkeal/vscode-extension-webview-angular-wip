/*
 * Copyright 2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Injectable } from '@angular/core';
import { Observable, Subject, fromEvent, PartialObserver, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VscodeService {

    private vscode: VscodeApi;
    private events: Observable<MessageEvent>;

    constructor(
    ) {
        try {
            this.vscode = acquireVsCodeApi();
            this.events = fromEvent<MessageEvent>(window, 'message');
            // const eventListener = (message: any) => {
            //     console.log(`...received...`, message);
            // };
            // window.addEventListener('message', eventListener);
        } catch (error) {
            console.log('Error using vscodeapi', error);
        }
    }

    public postMessage(message: any): void {
        this.vscode.postMessage(message);
    }

    public getEvents(): Observable<MessageEvent> {
        return this.events;
    }
}
