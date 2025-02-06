export interface Contact {
  name: string;
  phone: string;
  id: string;
}

export interface CallLog {
  contact?: Contact;
  number: string;
  type: 'incoming' | 'outgoing' | 'missed'
}
