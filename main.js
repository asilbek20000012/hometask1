function checkConditions(numbers, temperature, age, date, month, day) {
    // Uchta son
    let [a, b, c] = numbers;
    
    // To'rtta son
    let [w, x, y, z] = numbers;

    // Uchta sonning faqat ikkitasi bir xil
    if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
        console.log("Faqat ikkitasi bir xil");
    }

    // Son faqat 3 ga bo‘linadi va 5 ga bo‘linmaydi
    if (a % 3 === 0 && a % 5 !== 0) {
        console.log("Faqat 3 ga bo‘linadi va 5 ga bo‘linmaydi");
    }

    // Ikki sonning yig‘indisi 50 dan kichik
    if (a + b < 50) {
        console.log("Kifoya emas");
    }

    // Harorat 0 dan past yoki 35 dan yuqori
    if (temperature < 0 || temperature > 35) {
        console.log("Ekstremal sharoit");
    }

    // Ikki sonning biri toq, ikkinchisi juft
    if ((a % 2 === 0 && b % 2 !== 0) || (a % 2 !== 0 && b % 2 === 0)) {
        console.log("Turli turlilik");
    }

    // Uch sonning yig‘indisi 100 dan katta, lekin 200 dan kichik
    if (a + b + c > 100 && a + b + c < 200) {
        console.log("Oraliqda");
    }

    // Foydalanuvchi yoshi 15 va 65 oralig‘ida
    if (age >= 15 && age <= 65) {
        console.log("Yosh oralig'ida");
    }

    // Uch sonning hammasi manfiy
    if (a < 0 && b < 0 && c < 0) {
        console.log("Hammasi manfiy");
    }

    // Foydalanuvchi kirgan sana hafta oxiriga to‘g‘ri kelsa
    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Dam olish kuni");
    }

    // Berilgan to‘rtta sonning faqat ikkitasining yig‘indisi 50 ga teng
    if (w + x === 50 || w + y === 50 || w + z === 50 || x + y === 50 || x + z === 50 || y + z === 50) {
        console.log("Mos juftlik");
    }

    // Harorat 20 dan yuqori, lekin 30 dan kichik
    if (temperature > 20 && temperature < 30) {
        console.log("Ideal harorat");
    }

    // Uch sonning faqat bittasi juft
    if ((a % 2 === 0 && b % 2 !== 0 && c % 2 !== 0) || 
        (b % 2 === 0 && a % 2 !== 0 && c % 2 !== 0) || 
        (c % 2 === 0 && a % 2 !== 0 && b % 2 !== 0)) {
        console.log("Faqat bitta juft");
    }

    // Foydalanuvchi kiritgan oy qish fasliga to‘g‘ri kelsa
    if ([12, 1, 2].includes(month)) {
        console.log("Sovuq fasl");
    }

    // To‘rt sonning yig‘indisi juft
    if ((w + x + y + z) % 2 === 0) {
        console.log("Juft yig‘indi");
    }

    // Ikki sonning biri 0 dan katta, ikkinchisi 0 dan kichik
    if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        console.log("Turli ishoralar");
    }

    // Uch sonning yig‘indisi 60 dan oshsa
    if (a + b + c > 60) {
        console.log("Normadan yuqori");
    }

    // Kiritilgan kun raqami hafta kunlari orasida bo‘lmasa
    if (day < 1 || day > 7) {
        console.log("Notog‘ri kun");
    }

    // Son 2 ga ham, 3 ga ham bo‘linmasa
    if (a % 2 !== 0 && a % 3 !== 0) {
        console.log("Bo‘linmaydi");
    }

    // Foydalanuvchi 25 dan katta, lekin 50 dan kichik son kiritsa
    if (a > 25 && a < 50) {
        console.log("Qabul qilindi");
    }

    // Uch sonning hech bo‘lmaganda biri 5 ga bo‘linadigan bo‘lsa
    if (a % 5 === 0 || b % 5 === 0 || c % 5 === 0) {
        console.log("Bo‘linish mavjud");
    }

    // Ikki sonning biri musbat va ikkalasi yig‘indisi 100 dan katta
    if ((a > 0 || b > 0) && (a + b > 100)) {
        console.log("Maqsadga erishildi");
    }

    // Foydalanuvchi 18 dan katta va 30 dan kichik yosh kiritsa
    if (age > 18 && age < 30) {
        console.log("Yosh chekloviga mos");
    }

    // Kiritilgan to‘rtta sonning faqat ikkitasi teng bo‘lsa
    if ((w === x && w !== y && w !== z) || 
        (w === y && w !== x && w !== z) || 
        (w === z && w !== x && w !== y) || 
        (x === y && x !== w && x !== z) || 
        (x === z && x !== w && x !== y) || 
        (y === z && y !== w && y !== x)) {
        console.log("Teng juftlik");
    }

    // Foydalanuvchi 0 dan katta, lekin 100 dan kichik qiymat kiritsa
    if (a > 0 && a < 100) {
        console.log("Qabul qilinadigan qiymat");
    }

    // Uch sonning yig‘indisi 200 dan oshsa yoki 100 ga teng
    if (a + b + c > 200 || a + b + c === 100) {
        console.log("Shart bajarildi");
    }

    // Ikki sonning biri 5 ga bo‘linadi va ikkalasi ham 50 dan kichik
    if ((a % 5 === 0 || b % 5 === 0) && a < 50 && b < 50) {
        console.log("Maxsus shart");
    }
}

// Misol chaqiruv
checkConditions([10, 20, 30, 40], 25, 20, new Date('2025-02-06'), 12, 5);

function checkConditions(numbers, temperature, age, date, year, month, day) {
    // Uchta son
    let [a, b, c] = numbers;
    
    // To'rtta son
    let [w, x, y, z] = numbers;

    // Ikki sonning faqat bittasi manfiy
    if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
        console.log("Yagona manfiy");
    }

    // Foydalanuvchi 50 dan katta, lekin 80 dan kichik son kiritsa
    if (a > 50 && a < 80) {
        console.log("Oraliqda");
    }

    // Uchta sonning faqat bittasi 10 ga bo‘linadigan bo‘lsa
    if ((a % 10 === 0 && b % 10 !== 0 && c % 10 !== 0) || 
        (b % 10 === 0 && a % 10 !== 0 && c % 10 !== 0) || 
        (c % 10 === 0 && a % 10 !== 0 && b % 10 !== 0)) {
        console.log("Bo‘linuvchan");
    }

    // Ikki son yig‘indisi yoki ayirmasi musbat bo‘lsa
    if ((a + b > 0) || (a - b > 0)) {
        console.log("Mos natija");
    }

    // Harorat 10 dan past yoki 35 dan yuqori
    if (temperature < 10 || temperature > 35) {
        console.log("Noqulay sharoit");
    }

    // Kabisa yili
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Kabisa yili");
    }

    // 0 dan katta, lekin 200 dan kichik bo‘lgan toq son
    if (a > 0 && a < 200 && a % 2 !== 0) {
        console.log("Haqiqiy qiymat");
    }

    // Uch sonning faqat bittasi musbat
    if ((a > 0 && b <= 0 && c <= 0) || 
        (b > 0 && a <= 0 && c <= 0) || 
        (c > 0 && a <= 0 && b <= 0)) {
        console.log("Musbat yakkasi");
    }

    // Ikki sonning biri juft, ikkinchisi toq va yig‘indisi 30
    if (((a % 2 === 0 && b % 2 !== 0) || (a % 2 !== 0 && b % 2 === 0)) && (a + b === 30)) {
        console.log("Ideal juftlik");
    }

    // To‘rtta sonning hech bo‘lmaganda ikkitasining yig‘indisi 50 dan katta
    if ((w + x > 50) || (w + y > 50) || (w + z > 50) || (x + y > 50) || (x + z > 50) || (y + z > 50)) {
        console.log("Mos juftlik");
    }

    // Harorat 0 dan past yoki 40 dan katta
    if (temperature < 0 || temperature > 40) {
        console.log("Ekstremal holat");
    }

    // Foydalanuvchi 18 dan katta yosh kiritsa va yil faslini yoz deb aniqlasa
    if (age > 18 && month >= 6 && month <= 8) {
        console.log("Yoshlar uchun qulay fasl");
    }

    // Uch sonning faqat ikkitasi musbat
    if ((a > 0 && b > 0 && c <= 0) || 
        (a > 0 && c > 0 && b <= 0) || 
        (b > 0 && c > 0 && a <= 0)) {
        console.log("Juft musbat");
    }

    // Foydalanuvchi faqat juft son kiritganini aniqlang
    if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
        console.log("Faqat juft sonlar");
    }

    // To‘rtta sonning faqat bittasi manfiy
    if ((w < 0 && x >= 0 && y >= 0 && z >= 0) || 
        (x < 0 && w >= 0 && y >= 0 && z >= 0) || 
        (y < 0 && w >= 0 && x >= 0 && z >= 0) || 
        (z < 0 && w >= 0 && x >= 0 && y >= 0)) {
        console.log("Yagona manfiy");
    }

    // Foydalanuvchi faqat 5 va 10 ga bo‘linadigan son kiritsa
    if (a % 5 === 0 && a % 10 === 0) {
        console.log("Maxsus bo‘linish");
    }

    // Foydalanuvchi faqat hafta kunini bildiruvchi raqam kiritsa
    if (day >= 1 && day <= 5) {
        console.log("Ish kuni");
    }

    // Foydalanuvchi 50 dan katta va juft son kiritsa
    if (a > 50 && a % 2 === 0) {
        console.log("Katta va juft");
    }

    // Foydalanuvchi faqat bir xil ikki son kiritsa
    if (a === b && a !== c) {
        console.log("Bir xil juftlik");
    }

    // Harorat 15 dan yuqori, lekin 25 dan kichik
    if (temperature > 15 && temperature < 25) {
        console.log("Qulay sharoit");
    }

    // 100 dan katta, lekin 200 dan kichik son kiritsa
    if (a > 100 && a < 200) {
        console.log("Ideal qiymat");
    }
}

// Misol chaqiruv
checkConditions([10, -20, 30, 40], 25, 20, new Date('2025-02-06'), 2024, 7, 3);

