document.addEventListener('DOMContentLoaded', function () {
    const titlebarHTML = `
        <div class="titlebar">
            <div class="back-arrow" onclick="handleBack()">←</div> <!-- 백키 추가 -->
            <div class="title">DID CA</div>
            <div class="menu-button" onclick="window.location.href='settings.html'">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;

    // titlebar-container가 있는 모든 요소에 타이틀바 추가
    document.querySelectorAll('.titlebar-container').forEach(container => {
        container.innerHTML = titlebarHTML;
    });
});

// 백키 기능 구현
function handleBack() {
    if (history.length > 1) {
        history.back(); // 이전 페이지로 이동
    } else {
        alert("이전 페이지가 없습니다."); // 이전 페이지가 없는 경우 알림
        // 또는 홈페이지로 리디렉션
        // window.location.href = '/';
    }
}