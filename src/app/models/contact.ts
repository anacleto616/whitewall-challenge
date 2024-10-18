export interface Contact {
  name: string;
  group: string;
  lastMessageDate: Date;
  lastUpdateDate: Date;
  identity: string;
  extras: {
    isTestersGroup: string;
    typeOfCompile: string;
  };
  source: string;
}
