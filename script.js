document.addEventListener('DOMContentLoaded', () => {
    const slotMotor = document.getElementById('slot-motor');
    const slotMobil = document.getElementById('slot-mobil');

    if (slotMotor) {
        slotMotor.textContent = '12';
    }

    if (slotMobil) {
        slotMobil.textContent = '8';
    }
});
