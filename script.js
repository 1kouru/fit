const hoodies = [
    "images/hoodie1.png",
    "images/hoodie2.png",
    "images/hoodie3.png",
    "images/hoodie4.png",
    "images/hoodie5.png"
  ];
  
  const shirts = [
    "images/shirt1.png",
    "images/shirt2.png",
    "images/shirt3.png",
    "images/shirt4.png",
    "images/shirt5.png",
    "images/shirt6.png",
    "images/shirt7.png",
    "images/shirt8.png"
  ];
  
  const jeans = [
    "images/jeans1.png",
    "images/jeans2.png",
    "images/jeans3.png",
    "images/jeans4.png",
    "images/jeans5.png"
  ];
  
  const shoes = [
    "images/shoes1.png",
    "images/shoes2.png"
  ];
  
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  function setOutfit() {
    document.getElementById('hoodie').src = getRandomItem(hoodies);
    document.getElementById('shirt').src = getRandomItem(shirts);
    document.getElementById('jeans').src = getRandomItem(jeans);
    document.getElementById('shoes').src = getRandomItem(shoes);
  }
  
  function generateOutfit() {
    let count = 0;
    const interval = setInterval(() => {
      setOutfit();
      count++;
      if (count >= 3) clearInterval(interval); // Пролистать 3 раза
    }, 150); // Скорость пролистывания (мс)
  }
  
  // Автоматически показать аутфит при загрузке страницы
  window.addEventListener("DOMContentLoaded", () => {
    setOutfit();
  });
  