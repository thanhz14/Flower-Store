document.addEventListener("DOMContentLoaded", () => {

    const BASE_PRICES = [
        349000,
        549000,
        899000,
        1299000,
        2199000
    ];

    const cards = document.querySelectorAll(".flower-card");

    cards.forEach((card, index) => {

        const price = parseInt(card.dataset.price);
        const stock = parseInt(card.dataset.stock);

        // ❌ hết hàng không hiện
        if (stock === 0) return;

        // tìm giá gốc
        let original = null;

        for (let base of BASE_PRICES) {
            if (price < base) {
                original = base;
                break;
            }
        }

        if (!original) return;

        // % giảm
        const percent = Math.round(
            (original - price) / original * 100
        );

        if (percent <= 0) return;

        // badge %
        const badge = document.createElement("div");
        badge.className = "discount-percent";
        badge.innerHTML = `-${percent}<span>%</span>`;

        card.appendChild(badge);

        // 🔥 HOT cho 6 card đầu
        if (index < 6) {
            const hot = document.createElement("div");
            hot.className = "hot-badge";
            hot.innerText = "🔥 HOT";
            card.appendChild(hot);
        }

    });

});
