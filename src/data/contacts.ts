interface IContacts {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const contacts: IContacts[] = [
  {
    id: 1,
    icon: "/img/contacts/map.svg",
    title: "АДРЕС:",
    description: "НЕВСКИЙ ПРОСПЕКТ 140, ОФИС 140-142",
  },
  {
    id: 2,
    icon: "/img/contacts/phone.svg",
    title: "ТЕЛЕФОН:",
    description: "8 (812) 111-22-33<br/>8 (812) 111-22-33",
  },
  {
    id: 3,
    icon: "/img/contacts/watch.svg",
    title: "ВРЕМЯ РАБОТЫ:",
    description: "ПН-СБ<br/>10:00 - 20:00",
  },
  {
    id: 4,
    icon: "/img/contacts/mail.svg",
    title: "E-MAIL:",
    description: "INFO@VIP.RU",
  },
];
