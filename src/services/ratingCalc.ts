export class RatingCalc {
  static getRating(hours: number) {
    if (hours >= 0 && hours <= 39) {
      return {
        title: 'What even are games?',
        description: 'Seriously what are they???',
      };
    }

    if (hours >= 40 && hours <= 299) {
      return {
        title: 'You might aswell just play mobile games',
        description: 'Sponsored by RAID: Shadow Legends',
      };
    }

    if (hours >= 300 && hours <= 599) {
      return {
        title: 'You gotta pump those numbers up. Those are rookie numbers',
        description: 'I myself have more than 1000 hours',
      };
    }

    if (hours >= 600 && hours <= 999) {
      return {
        title: 'Even my mum has more hours on candy crush',
        description: "She's over level 9000",
      };
    }

    if (hours >= 1000 && hours <= 1999) {
      return {
        title: 'Its all civilisation isnt it?',
        description: 'Just one more turn',
      };
    }

    if (hours >= 2000 && hours <= 3999) {
      return {
        title: 'You have a healthy balance',
        description: 'Not too much but not too little',
      };
    }

    if (hours >= 4000 && hours <= 5999) {
      return {
        title: 'Are you going pro??',
        description: '* insert wannabe esports pro starter pack *',
      };
    }

    if (hours >= 6000 && hours <= 7999) {
      return {
        title: 'Certified Hardcore Gamer',
        description: 'Get your certificate here: www.ImaHardcoreGamer.com',
      };
    }

    if (hours >= 8000 && hours <= 9999) {
      return {
        title: 'Dude. Are you okay?',
        description: 'When was the last time you went outside??',
      };
    }

    if (hours >= 1000) {
      return {
        title: 'You need to seek medical help',
        description: 'https://www.nhs.uk/',
      };
    }
  }
}
