const zodiacSign = "Sagittarius";
const birthMonth = "December";
const birthday = 4;
const luckyNumber = 3;
const horoscopeDescription = "Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn't afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think.";
const believeInAstrology = true;
var moodRating = 4.2;
var moodRatingAmir = 5;
var moodRatingSam = 4;
var average = (moodRating + moodRatingAmir + moodRatingSam) / 3;

const horoscopeDescriptions = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];

document.getElementById("sign").textContent = "Horoscope for " + zodiacSign;

document.querySelector(".birthday").textContent = "Birthday: " + birthMonth + " " + birthday + "th";

document.querySelector(".luckyNum").textContent = "Lucky Number: " + luckyNumber;

const paragraphs = document.querySelectorAll("p");

paragraphs[0].textContent = horoscopeDescription;

paragraphs[1].innerHTML = "Do I believe in astrology? <strong>" + believeInAstrology + "</strong>";

paragraphs[2].textContent = "Today's mood rating for Zoe: " + moodRating + " out of 5. The average mood rating for Sagitarius, Pisces and Aquarius is " + average + ".";

var signs = ["Sagittarius", "Pisces", "Aquarius"];
zodiacArrayZoe =  signs[0];
zodiacArrayAmir =  signs[1];
zodiacArraySam =  signs[2];

var chosenHoroscopeDescriptionZoe = horoscopeDescriptions[3]; // Confiance en ton intuition
var chosenHoroscopeDescriptionAmir = horoscopeDescriptions[5]; // Attention aux détails
var chosenHoroscopeDescriptionSam = horoscopeDescriptions[7];  // Embrace transformation


paragraphs[3].textContent = zodiacArrayZoe + " Horoscope: " + chosenHoroscopeDescriptionZoe;
paragraphs[4].textContent = zodiacArrayAmir + " Horoscope: " + chosenHoroscopeDescriptionAmir;
paragraphs[5].textContent = zodiacArraySam + " Horoscope: " + chosenHoroscopeDescriptionSam;
