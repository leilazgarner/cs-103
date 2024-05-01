let mochi1 = document.getElementById('mochi-1');

function handleMouseDown(e) {
    let rect = mochi1.getBoundingClientRect();
    let offsetX = e.clientX - (rect.left + rect.width / 2);
    let offsetY = e.clientY - (rect.top + rect.height / 2);
    function handleMouseMove(e) {
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;
        mochi1.style.left = newX + 'px';
        mochi1.style.top = newY + 'px';
    }
    document.addEventListener('mousemove', handleMouseMove);

    function handleMouseUp() {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }
    document.addEventListener('mouseup', handleMouseUp);
}
mochi1.addEventListener('mousedown', handleMouseDown);