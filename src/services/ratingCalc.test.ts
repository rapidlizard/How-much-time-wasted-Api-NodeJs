import { RatingCalc } from './ratingCalc';

test('should calculate rating when hours between 0 49', () => {
  expect(RatingCalc.getRating(20)).toEqual({
    title: 'What even are games?',
    description: 'Seriously what are they???',
  });
});

test('should calculate rating when hours between 50 299', () => {
  expect(RatingCalc.getRating(100)).toEqual({
    title: 'You might aswell just play mobile games',
    description: 'Sponsored by RAID: Shadow Legends',
  });
});

test('should calculate rating when hours between 300 599', () => {
  expect(RatingCalc.getRating(400)).toEqual({
    title: 'You gotta pump those numbers up. Those are rookie numbers',
    description: 'I myself have more than 1000 hours',
  });
});

test('should calculate rating when hours between 600 999', () => {
  expect(RatingCalc.getRating(700)).toEqual({
    title: 'Even my mum has more hours on candy crush',
    description: "She's over level 9000",
  });
});

test('should calculate rating when hours between 1000 1999', () => {
  expect(RatingCalc.getRating(1500)).toEqual({
    title: 'Its all civilisation isnt it?',
    description: 'Just one more turn',
  });
});

test('should calculate rating when hours between 2000 3999', () => {
  expect(RatingCalc.getRating(3000)).toEqual({
    title: 'You have a healthy balance',
    description: 'Not too much but not too little',
  });
});

test('should calculate rating when hours between 4000 5999', () => {
  expect(RatingCalc.getRating(5000)).toEqual({
    title: 'Are you going pro??',
    description: '* insert wannabe esports pro starter pack *',
  });
});

test('should calculate rating when hours between 6000 7999', () => {
  expect(RatingCalc.getRating(7000)).toEqual({
    title: 'Certified Hardcore Gamer',
    description: 'Get your certificate here: www.ImaHardcoreGamer.com',
  });
});

test('should calculate rating when hours between 8000 9999', () => {
  expect(RatingCalc.getRating(9000)).toEqual({
    title: 'Dude. Are you okay?',
    description: 'When was the last time you went outside??',
  });
});

test('should calculate rating when hours over 10000', () => {
  expect(RatingCalc.getRating(12000)).toEqual({
    title: 'You need to seek medical help',
    description: 'https://www.nhs.uk/',
  });
});
