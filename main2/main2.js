function next(nextId) {
window.location.href = nextId + ".html";
}

const route = {
    '렛풀다운': '/main4/main4-back/렛풀다운.html',
    '백익스텐션': '/main4/main4-back/백익스텐션.html',
    '시티드로우': '/main4/main4-back/시티드로우.html',
    '어시스트풀업': '/main4/main4-back/어시스트풀업.html',
    '케이블시티드로우': '/main4/main4-back/케이블시티드로우.html',
    '티바로우': '/main4/main4-back/티바로우.html',
    '플레이트래터럴풀다운': '/main4/main4-back/플레이트래터럴풀다운.html',
    '디클라인프레스': '/main4/main4-chest/디클라인프레스.html',
    '벤치프레스': '/main4/main4-chest/벤치프레스.html',
    '스미스머신': '/main4/main4-chest/스미스머신.html',
    '시티드체스트프레스': '/main4/main4-chest/시티드체스트프레스.html',
    '인클라인벤치프레스': '/main4/main4-chest/인클라인벤치프레스.html',
    '체스트프레스머신': '/main4/main4-chest/체스트프레스머신.html',
    '케이블크로스오버': '/main4/main4-chest/케이블크로스오버.html',
    '플라이머신': '/main4/main4-chest/플라이머신.html',
    'V스쿼트': '/main4/main4-lowerbody/V스쿼드.html',
    '라잉레그컬': '/main4/main4-lowerbody/라잉레그컬.html',
    '레그익스텐션': '/main4/main4-lowerbody/레그익스텐션.html',
    '레그프레스': '/main4/main4-lowerbody/레그프레스.html',
    '시티드레그컬': '/main4/main4-lowerbody/시티드레그컬.html',
    '어덕션': '/main4/main4-lowerbody/어덕션.html',
    '이너아웃사이': '/main4/main4-lowerbody/이너아웃사이.html',
    '파워레그프레스': '/main4/main4-lowerbody/파워레그프레스.html',
    '핵스쿼트': '/main4/main4-lowerbody/핵스쿼트.html',
    '힙쓰러스트': '/main4/main4-lowerbody/힙쓰러스트.html',
    '리버스플라이': '/main4/main4-shoulder/리버스플라이.html',
    '사이드레터럴레이즈': '/main4/main4-shoulder/사이드레터럴레이즈.html',
    '숄더프레스': '/main4/main4-shoulder/숄더프레스.html'
};

document.querySelectorAll('#search-input, #search-input2').forEach(function(input) {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            search();
        }
    });
});

function search() {
    const input1 = document.getElementById('search-input').value.replaceAll(/\s/g, "");
    const input2 = document.getElementById('search-input2').value.replaceAll(/\s/g, "");
    const temp = route;

    const Path = temp[input1] || temp[input2];

    if (Path) window.location.href = Path;
    else alert("검색 결과가 없습니다.");
}

document.querySelector('.map').addEventListener('click', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } 
    else alert("Geolocation은 이 브라우저에서 지원되지 않습니다.");

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const searchUrl = `https://map.naver.com/v5/search/헬스장?c=${longitude},${latitude},18,0,0,0,dh`;
        window.open(searchUrl, '_blank');
    }

    function error() {
        alert("현재 위치를 가져올 수 없습니다.");
    }
});

const toggleButton = document.getElementById('choice-toggle');
const choiceContainer = document.querySelector('.choice-container2');
const choiceList = document.getElementById('choices');
const icon = toggleButton.querySelector('i');

choiceContainer.style.visibility = 'hidden';

toggleButton.addEventListener('click', () => {
    if (choiceContainer.style.visibility === 'hidden') {
        choiceContainer.style.visibility = 'visible';
        choiceList.style.display = 'block';
        icon.classList.remove('bi-chevron-right');
        icon.classList.add('bi-chevron-left');
    } else {
        choiceContainer.style.visibility = 'hidden';
        choiceList.style.display = 'none';
        icon.classList.remove('bi-chevron-left');
        icon.classList.add('bi-chevron-right');
    }
});
const choiceButtons = document.querySelectorAll('.choice3');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const svgOverlay = document.querySelector(".svg-overlay");
    const image = document.getElementById("main-image");
    const areas = document.querySelectorAll("area");

    areas.forEach(area => {
        area.addEventListener("mouseenter", () => {
            const coords = area.coords.split(",").map(Number);
            const points = [];
            for (let i = 0; i < coords.length; i += 2) {
                points.push([coords[i], coords[i + 1]]);
            }
            const polygon = createPolygon(points, "rgba(214, 39, 39, 0.933)", svgOverlay);
            area.polygon = polygon; // 생성된 다각형을 저장
        });

        area.addEventListener("mouseleave", () => {
            if (area.polygon) {
                area.polygon.remove(); // 다각형 제거
                area.polygon = null;
            }
        });
    });

    function createPolygon(points, color, svgContainer) {
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        const pointsAttr = points.map(point => point.join(",")).join(" ");
        polygon.setAttribute("points", pointsAttr);
        polygon.setAttribute("fill", color);
        svgContainer.appendChild(polygon);
        return polygon; // 생성된 다각형 반환
    }
});

