export class ChatMessage {
  userName: string;
  message: string;
  timeStamp: string;


  constructor(userName: string, message: string, timeStamp: string) {
    this.userName = userName;
    this.message = message;
    this.timeStamp = timeStamp;
  }
}
