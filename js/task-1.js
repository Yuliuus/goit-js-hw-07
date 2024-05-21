// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


// На що буде звертати увагу ментор при перевірці:

// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()


const allCategories = document.querySelectorAll("#categories .item");

 console.log(`Number of categories: ${allCategories.length}`);

 allCategories.forEach(element => {
   const categoryName = element.querySelector("h2").textContent;
   const elementsCount = element.querySelectorAll("li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
 });

 