// src/services/WebSocketService.ts

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { BehaviorSubject, Observable } from 'rxjs';

const WS_URL = 'ws://localhost:8425/';

class WebSocketService {
  private socket$: WebSocketSubject<any>;
  private subscriptions: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {
    this.socket$ = webSocket(WS_URL);
  }

  subscribeToStock(isin: string) {
    const currentSubscriptions = this.subscriptions.value;
    if (!currentSubscriptions.includes(isin)) {
      currentSubscriptions.push(isin);
      this.subscriptions.next(currentSubscriptions);
      this.socket$.next({ subscribe: isin });
    }
  }

  unsubscribeFromStock(isin: string) {
    const currentSubscriptions = this.subscriptions.value;
    if (currentSubscriptions.includes(isin)) {
      const updatedSubscriptions = currentSubscriptions.filter((s) => s !== isin);
      this.subscriptions.next(updatedSubscriptions);
      this.socket$.next({ unsubscribe: isin });
    }
  }

  getWebSocketObservable(): Observable<any> {
    return this.socket$.asObservable();
  }
}

export const webSocketService = new WebSocketService();
