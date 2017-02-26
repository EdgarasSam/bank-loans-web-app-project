import {Customer} from "./customer";

export const CUSTOMERS: Customer[] = [
  {id: 1, loan: 10100, income: 1200, name: 'Tomas Martinkėnas', status: 'patvirtina', date: 2017, draft:false},
  {id: 2, loan: 3000, income: 1200, name: 'John Boo', status: 'patvirtina', date: 2016, draft:false},
  {id: 3, loan: 1300, income: 1200, name: 'Michael Robinson', status: 'atmesta', date: 2016, draft:false},
  {id: 4, loan: 14000, income: 1000, name: 'Alexander Robson', status: 'patvirtina', date: 2016, draft:false},
  {id: 5, loan: 6500, income: 1100, name: 'Jennifer Pinsker', status: 'patvirtina', date: 2016, draft:false},
  {id: 6, loan: 5600, income: 3000, name: 'Bob Robson', status: 'atmesta', date: 2016, draft:false},
  {id: 7, loan: 1700, income: 1200, name: 'Michael Robinson', status: 'nepatikrinta', date: 2015, draft:false},
  {id: 8, loan: 1800, income: 2200, name: 'Vaida Kisieliūtė', status: 'nepatikrinta', date: 2016, draft:false},
  {id: 9, loan: 1900, income: 1200, name: 'John Jones', status: 'atmesta', date: 2016, draft:false},
  {id: 10, loan: 2000, income: 5000, name: 'Mantas Lukoševičius', status: 'patvirtina', date: 2016, draft:false},
  {id: 11, loan: 0, income: 2000, name: 'Jonas Jonaitis', status: '', date: 2016, draft: true},
  {id: 12, loan: 0, income: 5000, name: 'Conor McGregor', status: '', date: 2016, draft: true}
];
