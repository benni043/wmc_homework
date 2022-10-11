export class Driver{
  constructor(public firstname:string,
              public lastname:string,
              public team:string,
              public birthday:Date,
              public salary:number //in 1.000 Dollar
  ) {
  }



  static getData():Driver[]{
    return [
      new Driver('Max', 'Verstappen', 'Red Bull', new Date('1997-09-30'), 25000),
      new Driver('Daniel', 'Ricciardo', 'McLaren', new Date('1989-07-01'), 15000),
      new Driver('Lando', 'Norris', 'McLaren', new Date('1999-11-13'), 5000),
      new Driver('Sebastian', 'Vettel', 'Aston Martin', new Date('1987-07-03'), 15000),
      new Driver('Nicholas', 'Latifi', 'Williams', new Date('1995-06-29'), 886),
      new Driver('Pierre', 'Gasly', 'AlphaTauri', new Date('1996-02-07'), 5000),
      new Driver('Sergio', 'Perez', 'Red Bull', new Date('1990-01-26'), 8000),
      new Driver('Fernando', 'Alonso', 'Alpine', new Date('1981-07-29'), 20000),
      new Driver('Charles', 'Leclerc', 'Ferrari', new Date('1997-10-16'), 12000),
      new Driver('Lance', 'Stroll', 'Aston Martin', new Date('1998-10-29'), 10000),
      new Driver('Kevin', 'Magnussen', 'Haas', new Date('1992-10-05'), undefined),
      new Driver('Yuki', 'Tsunoda', 'AlphaTauri', new Date('2000-05-11'), 750),
      new Driver('Alexander', 'Albon', 'Williams', new Date('1996-03-23'), 2000),
      new Driver('Guanyu', 'Zhou', 'Alfa Romeo', new Date('1999-05-30'), 886),
      new Driver('Esteban', 'Ocon', 'Alpine', new Date('1996-09-17'), 5000),
      new Driver('Lewis', 'Hamilton', 'Mercedes', new Date('1985-01-07'), 40000),
      new Driver('Mick', 'Schumacher', 'Haas', new Date('1999-03-22'), 886),
      new Driver('Carlos', 'Sainz', 'Ferrari', new Date('1994-09-01'), 10000),
      new Driver('George', 'Russell', 'Mercedes', new Date('1998-02-15'), 5000),
      new Driver('Valtteri', 'Bottas', 'Alfa Romeo', new Date('1989-08-28'), 10000),
    ]
  }
}
