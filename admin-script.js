document.addEventListener("DOMContentLoaded", function() {
    // 제품 목록
    const products = [];
    const productList = document.getElementById('product-list');
    const productForm = document.getElementById('product-form');

    // 행사 목록
    const events = [];
    const eventList = document.getElementById('event-list');
    const eventForm = document.getElementById('event-form');

    // 예약 목록 (더미 데이터)
    const reservations = [
        { name: "홍길동", date: "2024-10-15", product: "프레임 A" },
        { name: "김철수", date: "2024-10-16", product: "렌즈 B" }
    ];
    const reservationList = document.getElementById('reservation-list');

    // 제품 추가
    productForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productImage = document.getElementById('product-image').value;

        const product = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        products.push(product);
        displayProducts();
        productForm.reset();
    });

    function displayProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>가격: ${product.price}원</p>
                <img src="${product.image}" alt="${product.name}" width="100">
                <button class="admin-btn" onclick="deleteProduct(${index})">삭제</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    window.deleteProduct = function(index) {
        products.splice(index, 1);
        displayProducts();
    }

    // 행사 추가
    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const eventTitle = document.getElementById('event-title').value;
        const eventDesc = document.getElementById('event-desc').value;

        const eventItem = {
            title: eventTitle,
            description: eventDesc
        };

        events.push(eventItem);
        displayEvents();
        eventForm.reset();
    });

    function displayEvents() {
        eventList.innerHTML = '';
        events.forEach((event, index) => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event-item');
            eventDiv.innerHTML = `
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <button class="admin-btn" onclick="deleteEvent(${index})">삭제</button>
            `;
            eventList.appendChild(eventDiv);
        });
    }

    window.deleteEvent = function(index) {
        events.splice(index, 1);
        displayEvents();
    }

    // 예약 목록 표시
    function displayReservations() {
        reservationList.innerHTML = '';
        reservations.forEach(reservation => {
            const reservationDiv = document.createElement('div');
            reservationDiv.classList.add('reservation-item');
            reservationDiv.innerHTML = `
                <h3>${reservation.name}</h3>
                <p>날짜: ${reservation.date}</p>
                <p>예약한 제품: ${reservation.product}</p>
            `;
            reservationList.appendChild(reservationDiv);
        });
    }

    displayReservations();
});
